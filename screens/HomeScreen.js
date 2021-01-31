import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaurantsActions from '../redux/actions/restaurants';
import * as productsActions from '../redux/actions/products';
import Header from '../components/Header';
import RestaurantContainer from '../components/RestaurantContainer';
import SliderContainer from '../components/SliderContainer';
import Colors from '../constants/colors';
import LoadingScreen from './LoadingScreen';

class HomeScreen extends Component{

    componentDidMount = () => {
        this.props.actions.getRestaurants();
    }

    renderItem = (item) => {
        return (
            <RestaurantContainer 
                title={item.title}
                img={item.img}
                minTutar={item.min}
                puan={item.point}
                ortZaman={item.time}
                onPress={() => this.goMenu(item)}
            />
        ) 
    }
    
    goMenu = (item) => {
        this.props.actions.changeRestaurant(item);
        this.props.actions.getProducts(item.id);
        this.props.navigation.navigate('Menu');
    }

    render(){
        if(this.props.restaurants.length === 0){
            return (
                <LoadingScreen />
            )
        }
        return(
            <View>
                <Header />
                <SliderContainer />
                <Text style={styles.subtitle}>Restaurantlar</Text>
                <FlatList 
                    style={styles.list}
                    data={this.props.restaurants}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => this.renderItem(item.item)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginLeft: 20,
        marginVertical: 10,
        color: Colors.primary
    },
    list: {
        height: '100%'
    }
});

function mapStateToProps(state) {
    return {
      restaurants: state.restaurantsListReducer,
    };
  }

function mapDispatchToProps(dispatch){
    return {
        actions: {
            getRestaurants: bindActionCreators(restaurantsActions.getRestaurants, dispatch),
            changeRestaurant: bindActionCreators(restaurantsActions.changeRestaurant, dispatch),
            getProducts: bindActionCreators(productsActions.getProducts, dispatch)
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import * as cartActions from '../redux/actions/cart';
import {bindActionCreators} from 'redux';
import BigHeader from '../components/BigHeader';
import ProductContainer from '../components/ProductContainer';
import CartButton from '../components/CartButton';
import CartModal from '../components/CartModal';
import Colors from '../constants/colors';
import LoadingScreen from './LoadingScreen';

class MenuScreen extends Component{
    state = {
        isCartModalVisible: false,
        categories: ['Burger','Pizza']
    }

    renderItem = (item,x) => {
        if(item.category === x) {
            return (
                <ProductContainer 
                    title={item.title}
                    price={item.price}
                    img={item.img}
                    onPress={() => this.addToCart(item)}
                />
            )
        }
    }

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product });
    }

    navigationOrderScreen = () => {
        this.setState({ isCartModalVisible: !this.state.isCartModalVisible });
        this.props.navigation.navigate('Order');
    }

    render(){
        const { isCartModalVisible } = this.state;
        if(this.props.products.length === 0) {
            return (
                <LoadingScreen />
            )
        }
        return(
            <View style={{ flex: 1 }}>
                <BigHeader 
                    title={this.props.clickedRestaurant.title}
                />
                {
                    this.state.categories.map(x => {
                        return(
                            <View>
                                <Text style={styles.title}>{x}</Text>
                                <FlatList 
                                horizontal={true}
                                data={this.props.products}
                                keyExtractor={(item) => item.id}
                                renderItem={(item) => this.renderItem(item.item,x)}
                            />
                            </View>
                        )
                    })
                }
                <CartModal 
                    navigation={() => this.navigationOrderScreen()}
                    isVisible={isCartModalVisible} 
                    onPress={() => this.setState({
                    isCartModalVisible: !isCartModalVisible
                })}/>
                {this.props.cart.length > 0 && <CartButton 
                    onPress={() => this.setState({
                        isCartModalVisible: !isCartModalVisible
                    })}
                />}
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: Colors.primary,
        marginHorizontal: 15,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 20
    }
})

function mapStateToProps(state) {
    return {
        clickedRestaurant: state.changeRestaurantReducer,
        products: state.productsListReducer,
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
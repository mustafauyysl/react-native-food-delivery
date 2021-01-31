import React, {Component} from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import BigHeader from '../components/BigHeader';
import OrderItemContainer from '../components/OrderItemContainer';
import RedButton from '../components/RedButton';
import RadioContainer from '../components/RadioContainer';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../constants/colors';

var paymentMethod = [
    {label: 'Nakit', value: 0 },
    {label: 'Kredi Kartı', value: 1 }
  ];

var address = [
    {label: 'Adres 1', value: 0 },
    {label: 'Adres 2', value: 1 }
];
class OrderScreen extends Component{
    state = {
        showAlert: false
    }

    renderItem = (item) => {
        let totalPrice = item.quantity*item.product.price;
        return (
            <OrderItemContainer 
                title={item.product.title}
                quantity={item.quantity}
                price={totalPrice}
            />
        )
    }

    calculateTotalPrice = () => {
        let finalPrice = 0;
        this.props.cart.map(x => 
            finalPrice += x.quantity*x.product.price
        )
        return finalPrice; 
    }

    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
     
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
        this.props.navigation.navigate('Home');
        this.props.cart.length = 0;
      };
 
    render(){
        return(
            <View style={styles.container}>
                <BigHeader title='Sipariş Özeti' />
                <FlatList 
                    style={styles.list}
                    data={this.props.cart}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => this.renderItem(item.item)}
                />
                <Text style={styles.totalAmount}>= {this.calculateTotalPrice()} ₺</Text>
                <RadioContainer
                    title='Adres'
                    list={address}
                />
                <RadioContainer
                    title='Ödeme Yöntemi'
                    list={paymentMethod}
                />
                <View style={styles.footer}>
                    <RedButton onPress={() => this.showAlert()} title='Sipariş Ver'/>
                </View>

                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title="Siparişiniz Onaylandı"
                    message="Şimdidden afiyet olsun :)"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Tamam"
                    confirmButtonColor={Colors.primary}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    totalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },
    list: {
        height: 230
    },
    footer: {
        position: 'absolute',
        bottom: -200,
        width: '100%'
    }
})

function mapStateToProps(state){
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps)(OrderScreen);
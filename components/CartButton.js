import React from 'react';
import { Image, TouchableHighlight, StyleSheet } from 'react-native';

const CartButton = props => {
    return (
        <TouchableHighlight 
            style={styles.container} 
            onPress={props.onPress}
            underlayColor='transparent'
        >
            <Image style={styles.img} source={require('../assets/cart.gif')}/>
        </TouchableHighlight>
    )
} 

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 150
    }
})

export default CartButton;
import React, { Component } from 'react';
import {  Image, View, StyleSheet, Text, TouchableOpacity  } from 'react-native';


class ProductContainer extends Component {  
    render(){
    return (
        <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.card}>
                <TouchableOpacity  style={styles.addButtonContainer}>
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
                <View style={styles.cardHeader}>
                    <Image style={{width: 50, height: 50}} source={{ uri: this.props.img }}/>
                    <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.price}>{this.props.price} ₺</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    }
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 100,
        width: 100,
        margin: 20,
    },
    cardHeader: {
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    },
    addButtonContainer:{
        borderColor: '#95F443',
        backgroundColor: '#fff',
        borderWidth: 2,
        position: 'absolute',
        borderRadius: 50,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        right: -10,
        top: -10
    },
    addText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#95F443',
        marginBottom: 5

    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleBox: {
        fontSize: 30,
        fontWeight: 'bold'
    },

});
export default ProductContainer;
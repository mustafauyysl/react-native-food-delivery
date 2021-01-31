import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Colors from '../constants/colors';

const BigHeader = props => {
    return (
        <View style={{...styles.header,...props.style}}>
            <Image style={styles.image} source={require('../assets/headerbackground.png')}/>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    image: {
        height: 150,
        position: 'absolute' ,
        top: 0, 
    },
    text: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: -20
    }

});
export default BigHeader;
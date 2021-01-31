import React from 'react';
import { 
    TouchableOpacity, 
    Image, 
    View, 
    StyleSheet, 
    Text  
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const RestaurantContainer = props => {
    return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.card}>
                    <Image 
                        resizeMode='stretch'
                        style={styles.image}        
                        source={{
                            uri: props.img
                        }} 
                    />
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={styles.text}>{props.title}</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.iconContainer}>
                            <Icon name='bicycle' color='white' size={20}/>
                            <Text style={styles.footerText}> {props.minTutar} ₺</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name='happy' color='white' size={20}/>
                            <Text style={styles.footerText}> {props.puan} %</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Text style={styles.footerText}>{props.ortZaman}dk</Text>
                            <Icon name='time' color='white' size={20}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    );
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
        height: 150,
        marginHorizontal: 20,
        marginVertical: 10

    },
    image: {
        height: 150,
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingTop: 10,
        zIndex: 20
    },
    text: {
        fontSize: 26,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        zIndex: 20
    },
    footerText: {
        fontSize: 20,
        color: '#fff',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default RestaurantContainer;
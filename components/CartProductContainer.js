import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

const CartProductContainer = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{props.amount}</Text>
        </View>
        <TouchableOpacity style={styles.trashContainer} onPress={props.onPress}>
          <Text style={styles.trashText}>-</Text>
        </TouchableOpacity>
        <View style={styles.cardHeader}>
          <Image style={{width: 50, height: 50}} source={{uri: props.img}} />
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>{props.price} ₺</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 100,
    width: 100,
    marginLeft: 25,
  },
  cardHeader: {
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -30,
    right: 0,
    left: 0,
  },
  title: {
    fontWeight: 'bold',
  },
  amountContainer: {
    borderColor: '#ffea00',
    backgroundColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: -10,
    top: -10,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffea00',
  },
  trashContainer: {
    borderColor: Colors.primary,
    backgroundColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: -10,
    top: -10,
    zIndex: 1,
  },
  trashText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
export default CartProductContainer;

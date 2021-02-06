import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderItemContainer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.quantity}>{props.quantity}</Text>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <View>
        <Text style={styles.amount}>{props.price} ₺</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#FBAD17',
    width: 18,
    padding: 4,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  quantity: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 5,
    textAlign: 'left',
  },
  amount: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderItemContainer;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const RedButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    marginHorizontal: 40,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RedButton;

import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View
      style={
        Dimensions.get('window').height >= 800
          ? styles.headerMenuPadderX
          : styles.headerMenuPadder
      }>
      <Image style={styles.image} source={require('../assets/header.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerMenuPadder: {
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 1,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 25,
  },
  headerMenuPadderX: {
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#d6d7da',
    borderBottomWidth: 1,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 40,
  },
  container: {
    flex: 1.8,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 40,
  },
});
export default Header;

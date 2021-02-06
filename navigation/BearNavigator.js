import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderScreen from '../screens/OrderScreen';

const BearStackNavigator = createStackNavigator();

const BearNavigator = (props) => {
  return (
    <NavigationContainer>
      <BearStackNavigator.Navigator>
        <BearStackNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}></BearStackNavigator.Screen>
        <BearStackNavigator.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}></BearStackNavigator.Screen>
        <BearStackNavigator.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false,
          }}></BearStackNavigator.Screen>
      </BearStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default BearNavigator;

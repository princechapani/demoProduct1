import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import {NavConstants} from '../helper/NavigationConstants';
import AddProduct from '../screens/AddProduct';
import Map from '../screens/Map';
import Number from '../screens/Number';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Number"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavConstants.Home} component={Home} />
      <Stack.Screen name={NavConstants.AddProduct} component={AddProduct} />
      <Stack.Screen name={NavConstants.Map} component={Map} />
      <Stack.Screen name={NavConstants.Number} component={Number} />
    </Stack.Navigator>
  );
};
export default StackNav;

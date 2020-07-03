import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../pages/home';

const AppStack = createStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomePage} />
  </AppStack.Navigator>
);

export default function AppRoutes() {
  return <AppStackScreen />;
}

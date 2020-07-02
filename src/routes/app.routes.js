import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from '../pages/home';
import ChatPage from '../pages/chat';

const AppStack = createStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomePage} />
    <AppStack.Screen name="Chat" component={ChatPage} />
  </AppStack.Navigator>
);

export default function AppRoutes() {
  return <AppStackScreen />;
}

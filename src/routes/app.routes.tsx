import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/Home';
import CommentsPage from '../pages/comments';

const AppStack = createStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={HomePage} />
    <AppStack.Screen name="Comments" component={CommentsPage} />
  </AppStack.Navigator>
);

const AppRoutes = () => {
  return <AppStackScreen />;
};

export default AppRoutes;

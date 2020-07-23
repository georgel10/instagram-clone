import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import Create from '../pages/create';

const HomeIcon = (focused: boolean) => (focused ? 'home' : 'home-outline');
const ProfileIcon = (focused: boolean) =>
  focused ? 'person-circle' : 'person-circle-outline';
const AddIcon = (focused: boolean) =>
  focused ? 'add-circle' : 'add-circle-outline';

const Tab = createBottomTabNavigator();

const tabBarIcon = ({
  route,
  focused,
  color,
  size,
}: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => {
  const iconName =
    route.name === 'Home'
      ? HomeIcon(focused)
      : route.name === 'Profile'
      ? ProfileIcon(focused)
      : AddIcon(focused);

  return <Icon name={iconName} size={size} color={color} />;
};

const BottomTabRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (prop) => tabBarIcon({ route, ...prop }),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabRouter;

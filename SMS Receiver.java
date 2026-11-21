import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './DashboardScreen';
import RoastScreen from './RoastScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#1E1E1E', borderTopWidth: 0 },
          tabBarActiveTintColor: '#FF3366',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Roast Mode" component={RoastScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }

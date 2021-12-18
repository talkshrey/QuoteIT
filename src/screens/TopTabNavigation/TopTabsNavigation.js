import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketScreen from './MarketScreen';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './DashboardScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
 
      <Tab.Navigator>
        <Tab.Screen name="MarketScreen" component={MarketScreen} />
        <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      </Tab.Navigator>
      
   
  );
}

export default TopTabNavigation
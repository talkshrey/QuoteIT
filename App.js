import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigation from './src/screens/TopTabNavigation/TopTabsNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import AppliancesDetails from './src/screens/AppliancesDetails';
AppliancesDetails

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopTabNavigation">
        <Stack.Screen name='TopTabNavigation' component={TopTabNavigation} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='AppliancesDetails' component={AppliancesDetails} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
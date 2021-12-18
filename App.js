import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigation from './src/screens/TopTabNavigation/TopTabsNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import AppliancesDetails from './src/screens/AppliancesDetails';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='TopTabNavigation' component={TopTabNavigation} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='AppliancesDetails' component={AppliancesDetails} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
import React, { useState, useEffect } from 'react'

// import { NavigationContainer } from '@react-navigation/native';
// import TopTabNavigation from './src/screens/TopTabNavigation/TopTabsNavigation';
import { createStackNavigator } from '@react-navigation/stack';
// import AppliancesDetails from './src/screens/AppliancesDetails';
// import Login from './src/screens/Login';
// import Splash from './src/screens/Splash';
// import Register from './src/screens/Register';
// import ProductDetails from './src/screens/ProductDetails';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './src/Authentication/AuthProvider';
import Navigator from './src/controllers/Navigator'


const Stack = createStackNavigator();
function App() {
  // const [token, setToken] = useState(null);
  // const [istoken, setisToken] = useState(false);
  // useEffect(async () => {
  //   if (token == null) {
  //     var t = await AsyncStorage.getItem('user_token');
  //     setToken(t);
  //     setisToken(true)
  //   }
  // }, []);


  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
    // <NavigationContainer>
    //   {
    //     istoken==true ? (
    //       <Stack.Navigator initialRouteName="TopTabNavigation">
    //         <Stack.Screen name='TopTabNavigation' component={TopTabNavigation} options={{ headerShown: false }}></Stack.Screen>
    //         <Stack.Screen name='AppliancesDetails' component={AppliancesDetails} options={{ headerShown: false }}></Stack.Screen>
    //         <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }}></Stack.Screen>
    //       </Stack.Navigator>
    //     ) : <Stack.Navigator initialRouteName="Login">
    //       <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
    //       <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}></Stack.Screen>
    //       <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}></Stack.Screen>

    //     </Stack.Navigator>
    //   }

    // </NavigationContainer>
  );
}

export default App
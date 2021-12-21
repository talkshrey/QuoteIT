import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Authentication/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopTabNavigation from '../screens/TopTabNavigation/TopTabsNavigation'
import AppliancesDetails from '../screens/AppliancesDetails'
import Splash from '../screens/Splash'
import Login from '../screens/Login';
import Register from '../screens/Register';
import ProductDetails from '../screens/ProductDetails';
import ModelDetails from '../screens/ModelDetails';
import Output from '../screens/Output'
import Dashboard from '../screens/TopTabNavigation/DashboardScreen';
import VendorDashboard from '../screens/VendorDashboard';
import FinalVendorDashboard from '../screens/FinalVendorDashboard';
import Quotation from '../screens/Quotation'

const Stack = createStackNavigator();

const Navigator = () => {
    const { currentUser, isLoading, signIn } = useContext(AuthContext);

    const getUser = async () => {
        try {
            const e = await AsyncStorage.getItem('email');
            const p = await AsyncStorage.getItem('password');
            if (e != null && p != null) {
                signIn(e, p);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: bgColor,
                }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <NavigationContainer>
            {currentUser != null ? (
                <Stack.Navigator initialRouteName="TopTabNavigation">
                    <Stack.Screen name='TopTabNavigation' component={TopTabNavigation} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='AppliancesDetails' component={AppliancesDetails} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='ModelDetails' component={ModelDetails} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='Output' component={Output} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='VendorDashboard' component={VendorDashboard} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='FinalVendorDashboard' component={FinalVendorDashboard} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='Quotation' component={Quotation} options={{ headerShown: false }}></Stack.Screen>
                </Stack.Navigator>
            ) :
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='VendorDashboard' component={VendorDashboard} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='FinalVendorDashboard' component={FinalVendorDashboard} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name='Quotation' component={Quotation} options={{ headerShown: false }}></Stack.Screen>
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
};



export default Navigator;
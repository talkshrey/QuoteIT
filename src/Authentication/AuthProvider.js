import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [token,setToken]= useState('');
    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                isLoading,
                signIn: async (email, password) => {
                    setIsLoading(true);
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", `Bearer +${currentUser}`);
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                        "email": email,
                        "password": password
                    });

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    // fetch("http://localhost:3000/api/user/login", requestOptions)
                    //     .then(response => response.text())
                    //     .then(result => {
                    //         console.log(result);
                    //         setToken(token);

                    //     })
                    //     .catch(error => console.log('error', error));
                    // try {
                    //     await AsyncStorage.setItem('user_token', token);
                    //     // console.log(token);
                    // } catch (e) {
                    //     // console.log(token);
                    //     console.log(e);
                    // }
                    try {
                        await fetch("http://localhost:3000/api/user/login", requestOptions)
                            .then(response => response.text())
                            .then((result) => {
                                if (result.Message === 'Internal Server Error') {
                                    setIsLoading(false);
                                    console.log('Error occurred');
                                    Alert.alert('Login Failed', 'Invalid username or password', [
                                        { text: 'OK', onPress: () => console.log('okay') },
                                    ]);
                                } else {
                                    console.log(result);
                                    AsyncStorage.setItem('token', result);
                                    setCurrentUser(result);
                                    setIsLoading(false);
                                }
                            });
                    } catch (E) {
                        console.warn(E);
                    }
                },
                signUp: async(name,email,password,contact, location, role, companyName, dealsin) => { 
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                
                    var raw = JSON.stringify({
                      "name": name,
                      "email": email,
                      "password": password,
                      "contact": contact,
                      "location":location,
                      "role":role,
                      "companyName":companyName,
                      "dealsin": dealsin
                    });
                
                    var requestOptions = {
                      method: 'POST',
                      headers: myHeaders,
                      body: raw,
                      redirect: 'follow'
                    };
                    try {
                        await fetch("http://localhost:3000/api/user/register", requestOptions)
                            .then(response => response.text())
                            .then((result) => {
                                if (result.Message === 'Internal Server Error') {
                                    setIsLoading(false);
                                    console.log('Error occurred');
                                    Alert.alert('Login Failed', 'Invalid username or password', [
                                        { text: 'OK', onPress: () => console.log('okay') },
                                    ]);
                                } else {
                                    console.log(result);
                                    AsyncStorage.setItem('token', result);
                                    setCurrentUser(result);
                                    setIsLoading(false);
                                }
                            });
                    } catch (E) {
                        console.warn(E);
                    }
                    // await fetch("http://localhost:3000/api/user/register", requestOptions)
                    //   .then(response => response.text())
                    //   .then(result =>{
                    //     console.log(result);
                    //   }
                    //     // setToken(result.toString())
                    //   ).catch (error => console.log('error', error),
                    // );
                //   try {
                //     await AsyncStorage.setItem(STORAGE_KEY, token);
                //     // console.log(token);
                //   } catch (e) {
                //     // console.log(token);
                //     Alert.alert('Failed to save the data to the storage');
                //   }
                },

                signOut: async () => {
                    try {
                        await AsyncStorage.clear();
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
};
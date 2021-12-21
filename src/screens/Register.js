import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AuthContext } from '../Authentication/AuthProvider';
import { kCardColor1, klightgreyColor } from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Register({ navigation }) {
  const [name, setName] = useState('');

  const [token, setToken] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { signUp, currentUser } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [clientcheck, setclientcheck] = useState(false);
  const [vendorcheck, setvendorcheck] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [dealsin, setdealsIn] = useState('');
  // const signUp = async(email,password) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "name": "Yash",
  //     "email": email,
  //     "password": password,
  //     "contact": 9326549053,
  //     "role":"client",
  //     "location":"Mumbai"
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   await fetch("http://localhost:3000/api/user/register", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(result);
  //       setToken(token);
  //     }
  //       // setToken(result.toString())
  //     ).catch(error => console.log('error', error),
  //   );
  //   try {
  //     await AsyncStorage.setItem('user_token', token);
  //     // console.log(token);
  //   } catch (e) {
  //     // console.log(token);
  //     console.log(e);
  //   }
  //   // { token != null ? navigation.navigate('TopTabNavigation') : null }
  // }

  return (
    <LinearGradient
      colors={['#1A1B2F', '#162447', '#1F4068']}
      style={styles.linearGradient}>
      <Text style={styles.header}>QuoteIT</Text>
      <Text style={styles.desc}>Create your account</Text>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ marginTop: 25, fontWeight: '600', fontSize: 20, color: 'white', marginRight: wp('32%') }}>Please specify your role</Text>
          <View style={styles.container2}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                  setclientcheck(!clientcheck);
                  // console.log(clientcheck);
                }}>
                  <Ionicons name={"checkmark-circle"} size={20}
                    style={clientcheck ? { color: kCardColor1 } : { color: klightgreyColor }} />
                </TouchableOpacity>
                <Text style={{ color: kCardColor1, marginLeft: 5, fontWeight: '700', fontSize: 15 }}>Client</Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <TouchableOpacity onPress={() => {
                  setvendorcheck(!vendorcheck);
                }}>
                  <Ionicons name={"checkmark-circle"} size={20}
                    style={vendorcheck ? { color: kCardColor1 } : { color: klightgreyColor }} />
                </TouchableOpacity>
                <Text style={{ color: kCardColor1, marginLeft: 5, fontWeight: '700', fontSize: 15 }}>Vendor</Text>
              </View>
            </View>
          </View>
          <View style={{ ...styles.inputContainer, marginTop: 20 }}>
            <Ionicons name={"person"} size={22} color={kCardColor1} style={{ paddingLeft: 10 }} />
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              placeholderTextColor={kCardColor1}
              autoCompleteType="name"
              autoCapitalize="words"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={{ ...styles.inputContainer, marginTop: 25 }}>
            <Ionicons name={"mail"} size={22} color={kCardColor1} style={{ paddingLeft: 10 }} />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={kCardColor1}
              keyboardType="email-address"
              autoCompleteType="email"
              autoCapitalize="none"
              value={email}
              onChangeText={text => setemail(text)}
            />
          </View>

          <View style={{ ...styles.inputContainer, marginTop: 20 }}>
            <TouchableOpacity style={{ paddingLeft: 10 }} activeOpacity={0.5} onPress={() => {
              setVisible(!visible);
            }}>
              <Ionicons name={visible ? "lock-open" : "lock-closed"} size={20} color={kCardColor1} />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholderTextColor={kCardColor1}
              secureTextEntry={!visible}
              placeholder="Password"
              autoCompleteType="password"
              autoCapitalize="none"
              value={password}
              onChangeText={text => setpassword(text)}
            />
          </View>
          <View style={{ ...styles.inputContainer, marginTop: 25 }}>
            <Ionicons name={"call"} size={22} color={kCardColor1} style={{ paddingLeft: 10 }} />
            <TextInput
              style={styles.textInput}
              placeholder="Contact"
              placeholderTextColor={kCardColor1}
              keyboardType="number-pad"
              autoCompleteType="number"
              value={contact}
              onChangeText={text => setContact(text)}
            />
          </View>
          <View style={{ ...styles.inputContainer, marginTop: 25 }}>
            <Ionicons name={"location"} size={22} color={kCardColor1} style={{ paddingLeft: 10 }} />
            <TextInput
              style={styles.textInput}
              placeholder="Location-City"
              placeholderTextColor={kCardColor1}
              autoCapitalize="none"
              value={location}
              onChangeText={text => setLocation(text)}
            />
          </View>
          {
            vendorcheck ? (
              <View>
                <View style={{ ...styles.inputContainer, marginTop: 25 }}>
                  <Ionicons name={"business"} size={22} color={kCardColor1} style={{ paddingLeft: 10 }} />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Company Name"
                    placeholderTextColor={kCardColor1}
                    autoCapitalize="words"
                    value={companyName}
                    onChangeText={text => setCompanyName(text)}
                  />
                </View>
                <View style={{ ...styles.inputContainer, marginTop: 25 }}>
                  <Ionicons name={"business"} size={22} color={kCardColor1} style={{ paddingLeft: 10 }} />
                  <TextInput
                    style={styles.textInput}
                    placeholder="In which category you deal in"
                    placeholderTextColor={kCardColor1}
                    autoCapitalize="words"
                    value={dealsin}
                    onChangeText={text => setdealsIn(text)}
                  />
                </View>
              </View>
            ) : null
          }
          <View style={{ ...styles.button, backgroundColor: kCardColor1 }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              onPress={() => {
                AsyncStorage.clear();
                AsyncStorage.setItem('email', email);
                AsyncStorage.setItem('password', password);
                AsyncStorage.setItem('contact', contact);
                AsyncStorage.setItem('name', name);
                if (clientcheck == true) {
                  signUp(name, email, password, contact, location, "client", companyName, dealsin);
                }
                else {
                  signUp(name, email, password, contact, location, "vendor", companyName, dealsin);
                }
              }}>
              <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          {
            vendorcheck == false ? (
              <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 60 }}>
                <Text style={{ color: klightgreyColor, fontSize: 16 }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => { navigation.pop() }}>
                  <Text style={{ color: kCardColor1, fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 16 }}>Login</Text>
                </TouchableOpacity>
              </View>
            ) : null
          }
        </ScrollView>
      </View>

    </LinearGradient>
  )

};
export default Register;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    //paddingLeft: 15,
    //paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    paddingTop: 10,
    height: hp('81%'),
    width: wp('100%'),
    backgroundColor: '#F5796D',
    marginTop: 20,
    alignItems: 'center',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 20,
  },
  label: {
    color: 'white',
    fontSize: wp('7%'),
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  desc: {
    color: 'white',
    fontSize: wp('4.1%'),
    marginTop: 2,
    textAlign: 'center'
  },
  // input: {
  //   color: '#1A1B2F',
  //   fontSize: 15,
  //   marginTop: 20,
  //   borderColor: '#1A1B2F',
  //   alignSelf: 'center',
  //   width: wp('80%'),
  //   height: hp('6%'),
  //   borderRadius: 10,
  //   backgroundColor: '#f1f2f6',
  //   paddingLeft: 7,
  // },
  container2: {
    flexDirection: 'row',
    // marginLeft: 30,
    // marginRight: 30,
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: klightgreyColor,
    width: wp('85%'),
    borderRadius: 10,
    height: 55,
    // marginTop: 15
  },
  textInput: {
    marginLeft: 5,
    backgroundColor: klightgreyColor,
    fontSize: 15,
    color: 'black',
    paddingLeft: 10,
    fontWeight: '600'
  },
  button: {
    marginTop: 25,
    width: wp('85%'),
    height: 50,
    borderRadius: 50,
  }
});

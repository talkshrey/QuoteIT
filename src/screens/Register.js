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

function Register({ navigation }) {
  const [token, setToken] = useState(null);
  const [contact, setContact] = useState(null);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setUsername] = useState('');
  const { signUp, currentUser } = useContext(AuthContext);


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
      <Text style={styles.header}>" QuoteIT "</Text>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>REGISTER</Text>
          <Text style={styles.desc}>Create your account</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="default"
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setemail(text)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="visible-password"
            autoCompleteType="password"
            autoCapitalize="none"
            value={password}
            onChangeText={text => setpassword(text)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="phone-pad"
            autoCapitalize="none"
            value={contact}
            onChange={value => setContact(value)}></TextInput>
          <View>
            <View style={styles.container2}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ color: 'black', marginLeft: 5 }}>Vendor</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{ color: 'black' }}>Customer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Button
            title="Register"
            onPress={() => {
              AsyncStorage.clear();
              AsyncStorage.setItem('email', email);
              AsyncStorage.setItem('password', password);
              signUp(email, password);
            }}></Button>
          <TextInput
            style={styles.input}
            placeholder="Company Name"
            keyboardType="default"
            autoCapitalize="none"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Deals in:"
            keyboardType="default"
            autoCapitalize="none"></TextInput>
        </View>
      </ScrollView>
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
    height: hp('80%'),
    width: wp('100%'),
    backgroundColor: '#e33e5a',
    marginTop: 50,
    alignSelf: 'center',
    borderTopRightRadius: 60,
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 70,
  },
  label: {
    color: '#1A1B2F',
    fontSize: wp('6%'),
    marginLeft: 40,
    marginTop: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: '#1A1B2F',
    fontSize: wp('4.1%'),
    marginLeft: 40,
    marginTop: 2,
  },
  input: {
    color: '#1A1B2F',
    fontSize: 15,
    marginTop: 20,
    borderColor: '#1A1B2F',
    alignSelf: 'center',
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: 10,
    backgroundColor: '#f1f2f6',
    paddingLeft: 7,
  },
  container2: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
});

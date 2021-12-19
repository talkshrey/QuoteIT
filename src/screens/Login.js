import React, { useState , useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { kCardColor1 } from '../constants/colors';
import { AuthContext } from '../Authentication/AuthProvider';


function Login() {
  const [token, setToken] = useState(null);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {signIn, currentUser} = useContext(AuthContext);

  // const signIn = async (email, password) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", `Bearer +${token}`);
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "email": email,
  //     "password": password
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://localhost:3000/api/user/login", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log(result);
  //       setToken(token);

  //     })
  //     .catch(error => console.log('error', error));
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
    <View style={styles.mainContainer}>

      <Text style={styles.header}>QuoteIT</Text>

      <View style={styles.container}>

        <Text style={styles.label}>WELCOME BACK!</Text>
        <Text style={styles.desc}>Login to your account</Text>
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
        <View>
          <View style={styles.container2}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: 'black', marginLeft: 5 }}>Remember me</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: '700' }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          title="Login"
          onPress={() => {
            AsyncStorage.clear();
            AsyncStorage.setItem('email', email);
            AsyncStorage.setItem('password', password);
            signIn(email, password);
          }}></Button>
      </View>
    </View>
  );

  {/* <View style={styles.loginButton}>
    <Ionicons
      name="chevron-forward-circle-outline"
      size={50}
      color="white"
      style={{position: 'absolute',marginLeft:20, marginTop: hp('20%')}}></Ionicons></View> */}

};
export default Login;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: kCardColor1,
  },
  container: {
    height: hp('80%'),
    width: wp('100%'),
    backgroundColor: '#F5796D',
    marginTop: 100,
    alignSelf: 'center',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 70,
  },
  label: {
    color: '#1A1B2F',
    textAlign: 'center',
    fontSize: wp('7%'),
    // marginLeft: 40,
    marginTop: 70,
    fontWeight: 'bold',
  },
  desc: {
    color: '#1A1B2F',
    textAlign: 'center',
    fontSize: wp('5%'),
    // marginLeft: 40,
    marginTop: 2,
  },
  input: {
    color: '#1A1B2F',
    fontSize: 15,
    marginTop: 40,
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

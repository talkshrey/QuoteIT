import React, { useState, useContext } from 'react';
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
import { kCardColor1, klightgreyColor } from '../constants/colors';
import { AuthContext } from '../Authentication/AuthProvider';


function Login({ navigation }) {
  const [token, setToken] = useState(null);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { signIn, currentUser } = useContext(AuthContext);
  const [check, setcheck] = useState(false);
  const [visible, setVisible] = useState(false);


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
        <View style={{ ...styles.inputContainer, marginTop: 40 }}>
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

        <View style={styles.container2}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => {
              setcheck(!check);
            }}>
              <Ionicons name={"checkmark-circle"} size={20} color="#393E46"
                style={check ? { color: kCardColor1 } : { color: klightgreyColor }} />
            </TouchableOpacity>
            <Text style={{ color: kCardColor1, marginLeft: 5, fontWeight: '700' }}>Remember me</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: 'black', fontWeight: '700', textDecorationLine: 'underline' }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ ...styles.button, backgroundColor: kCardColor1 }}>
          <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => {
              AsyncStorage.clear();
              AsyncStorage.setItem('email', email);
              AsyncStorage.setItem('password', password);
              signIn(email, password);
            }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: '600' }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: klightgreyColor, fontSize: 16 }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
            <Text style={{ color: kCardColor1, fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 16 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
        {/* <Button
          title="Login"
         ></Button> */}
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
    justifyContent: 'flex-end',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: kCardColor1,
  },
  container: {
    height: hp('70%'),
    width: wp('100%'),
    backgroundColor: '#F5796D',
    // marginTop: 100,
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    paddingBottom: 60
  },
  label: {
    color: '#1A1B2F',
    textAlign: 'center',
    fontSize: wp('7%'),
    // marginLeft: 40,
    marginTop: 50,
    fontWeight: 'bold',
  },
  desc: {
    color: '#1A1B2F',
    textAlign: 'center',
    fontSize: wp('5%'),
    marginTop: 2,
  },
  textInput: {
    marginLeft: 5,
    backgroundColor: klightgreyColor,
    fontSize: 15,
    color: 'black',
    paddingLeft: 10,
    fontWeight: '600'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: klightgreyColor,
    width: wp('80%'),
    borderRadius: 10,
    height: 60,
    width: wp('85%'),
    // marginTop: 15
  },

  container2: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  button: {
    marginTop: 40,
    width: wp('85%'),
    height: 50,
    borderRadius: 50,
  }

});

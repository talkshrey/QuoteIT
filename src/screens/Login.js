import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {kCardColor1} from '../constants/colors';

const Login = () => (
  
  
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
        autoCapitalize="none"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="visible-password"
        autoCompleteType="password"
        autoCapitalize="none"></TextInput>
      <View>
        <View style={styles.container2}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{color: 'black', marginLeft: 5}}>Remember me</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{color: 'black', fontWeight: '700'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    {/* <View style={styles.loginButton}>
    <Ionicons
      name="chevron-forward-circle-outline"
      size={50}
      color="white"
      style={{position: 'absolute',marginLeft:20, marginTop: hp('20%')}}></Ionicons></View> */}
  </View>
);
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

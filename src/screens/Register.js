import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Register = () => (
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
          autoCapitalize="none"></TextInput>
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
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          autoCapitalize="none"></TextInput>
        <View>
          <View style={styles.container2}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{color: 'black', marginLeft: 5}}>Vendor</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{color: 'black'}}>Customer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
);
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
    fontWeight:'bold',
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

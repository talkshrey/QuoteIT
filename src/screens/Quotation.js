import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { kCardColor1 } from '../constants/colors';

function Quotation({ navigation }) {
  const [rawPrice, setRawprice] = useState('');
  const [aftertaxPrice, setAftertaxprice] = useState('');
  const [quotedtoName, setQuotedtoname] = useState('');
  const [quotedtoEmail, setQuotedtoemail] = useState('');
  const [quoteOf, setQuoteof] = useState('');
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Quotation sucessfully submitted ",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      hp('30%')
    );
    return null;
  };

  const postData = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlMTgyNzU0MmIzZDYyNzdlOGM3NDQiLCJpYXQiOjE2Mzk5NDI4OTYsImV4cCI6MTY3MTQ3ODg5Nn0.e6TZ1vBSHWrfLTjQdDmGsVlpjtyVgnC-WACas6CX_0M',
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      "companyName": "XYZ",
      "rawPrice": rawPrice,
      "afterTaxPrice": aftertaxPrice,
      "quotedToName": quotedtoName,
      "quotedToEmail": quotedtoEmail,
      "quoteOf": quoteOf,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:3000/api/quotation/new', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FECACA", "#F57960"]}
        style={styles.container1}>
        <Text style={{ textAlign: 'center', marginTop: 40, fontSize: 24, fontWeight: 'bold', color: kCardColor1 }}>Quotation</Text>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.header}>Quote To (Name): </Text>
          <TextInput
            style={styles.display}
            placeholder="Username"
            keyboardType="default"
            placeholderTextColor="gray"
            value={quotedtoName}
            onChangeText={text => setQuotedtoname(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>Quote To (Email): </Text>
          <TextInput
            style={styles.display}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="gray"
            value={quotedtoEmail}
            onChangeText={text => setQuotedtoemail(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>Model Enquired:</Text>
          <TextInput
            style={styles.display}
            placeholder="ModelName"
            placeholderTextColor="gray"
            value={quoteOf}
            onChangeText={text => setQuoteof(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>The Base Price:</Text>
          <TextInput
            style={styles.display}
            placeholder="Rs. 00.00"
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={rawPrice}
            onChangeText={text => setRawprice(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.header}>The Final Price(Inclusive of Taxes):</Text>
          <TextInput
            style={styles.display}
            placeholder="Rs. 00.00"
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={aftertaxPrice}
            onChangeText={text => setAftertaxprice(text)}
            autoCapitalize="none"></TextInput>
        </View>
        <View style={{ ...styles.button, backgroundColor: kCardColor1 }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
            onPress={async () => { await postData(); showToastWithGravityAndOffset(); navigation.navigate('FinalVendorDashboard');}}>
            <Text style={{ fontSize: 17, color: 'white', fontWeight: '500', marginTop: 9 }}>Submit Quotation</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  );
}

export default Quotation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kCardColor1,
    justifyContent: 'center'
  },
  container1: {
    backgroundColor: 'white',
    height: hp('75%'),
    width: wp('83%'),
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 30,
  },
  linearGradient: {
    height: 200,
  },
  display: {
    color: '#1F4068',
    textAlign: 'left',
    borderWidth: 2,
    paddingTop: 10,
    paddingLeft: 20,
    margin: 10,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#E9E9E9',
    borderColor: '#E9E9E9',
  },
  header: {
    marginLeft: 15,
    color: 'black',
  },
  submit: {
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginTop: 20,
    width: wp('60%'),
    height: 45,
    borderRadius: 50,
    alignSelf: 'center'
  }
});

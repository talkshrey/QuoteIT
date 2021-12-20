import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
function Quotation({navigation}) {
  const [rawPrice, setRawprice] = useState('');
  const [aftertaxPrice, setAftertaxprice] = useState('');
  const [quotedtoName, setQuotedtoname] = useState('');
  const [quotedtoEmail, setQuotedtoemail] = useState('');
  const [quoteOf, setQuoteof] = useState('');

  const postData = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlMTgyNzU0MmIzZDYyNzdlOGM3NDQiLCJpYXQiOjE2Mzk5NDI4OTYsImV4cCI6MTY3MTQ3ODg5Nn0.e6TZ1vBSHWrfLTjQdDmGsVlpjtyVgnC-WACas6CX_0M',
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      "companyName":"XYZ",
      "rawPrice": rawPrice,
      "afterTaxPrice": aftertaxPrice,
      "quotedToName": quotedtoName,
      "quotedToEmail": quotedtoEmail,
      "quoteOf":quoteOf,
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
        colors={[ '#F5796D', '#E399A5']}
        style={styles.linearGradient}>
        <View style={styles.container1}>
        <Text style={styles.header}>Quoted To (Name): </Text>
          <TextInput
            style={styles.display}
            placeholder="Username"
            keyboardType="default"
            placeholderTextColor="gray"
            value={quotedtoName}
            onChangeText={text => setQuotedtoname(text)}
            autoCapitalize="none"></TextInput>
            <Text style={styles.header}>Quoted To (Email): </Text>
          <TextInput
            style={styles.display}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="gray"
            value={quotedtoEmail}
            onChangeText={text => setQuotedtoemail(text)}
            autoCapitalize="none"></TextInput>
             <Text style={styles.header}>Model Enquired:</Text>
          <TextInput
            style={styles.display}
            placeholder="ModelName"
            placeholderTextColor="gray"
            value={quoteOf}
            onChangeText={text => setQuoteof(text)}
            autoCapitalize="none"></TextInput>
            <Text style={styles.header}>The Base Price:</Text>
          <TextInput
            style={styles.display}
            placeholder="Rs. 00.00"
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={rawPrice}
            onChangeText={text => setRawprice(text)}
            autoCapitalize="none"></TextInput>
          <Text style={styles.header}>The Final Price(Inclusive of Taxes):</Text>
          <TextInput
            style={styles.display}
            placeholder="Rs. 00.00"
            keyboardType="numeric"
            placeholderTextColor="gray"
            value={aftertaxPrice}
            onChangeText={text => setAftertaxprice(text)}
            autoCapitalize="none"></TextInput>
            <TouchableOpacity onPress={postData}>
                <Text style={styles.submit} >Submit Quotation</Text>
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
  },
  container1: {
    backgroundColor: 'white',
    height: hp('70%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: 150,
    position: 'absolute',
    justifyContent: 'center',
  },
  linearGradient: {
    height: 200,
  },
  display: {
    color: '#1F4068',
    textAlign: 'left',
    borderWidth: 2,
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    height:40,
    borderRadius: 50,
    backgroundColor: '#E9E9E9',
    borderColor: '#E9E9E9',
  },
  header:{
      marginLeft:10,
  },
  submit:{
      textAlign:'center',
  }
});

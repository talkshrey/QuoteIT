import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { kCardColor1 } from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Output({ route }) {
  const [token, setToken] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        setToken(token);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  var Category = route.params.m;
  var SubCategory = route.params.s;
  var model = route.params.o;
  const whatsAppMessage = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "productCategory": Category,
      "productSubCategory": SubCategory,
      "productModel": model
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/api/query/new", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <View style={styles.container}>


      <LinearGradient
        colors={["#FECACA", "#F57960"]}
        style={styles.container1}>
        <Text style={styles.header}>Final Query</Text>
        <Text style={styles.label}>Username </Text>
        <Text style={styles.display}>Username</Text>
        <Text style={styles.label}>Email Address </Text>
        <Text style={styles.display}>Email Address</Text>
        <Text style={styles.label}>Contact Number </Text>
        <Text style={styles.display}>Contact Number</Text>
        <Text style={styles.label}> Category </Text>
        <Text style={styles.display}>{Category}</Text>
        <Text style={styles.label}>Sub-Category </Text>
        <Text style={styles.display}>{SubCategory}</Text>
        <Text style={styles.label}>Model </Text>
        <Text style={styles.display}>{model}</Text>
        <View style={{ ...styles.button, backgroundColor: kCardColor1 }}>
          <TouchableOpacity style={{  alignItems: 'center', justifyContent: 'center' }}
          onPress={whatsAppMessage}>
            <Text style={{ fontSize: 17, color: 'white', fontWeight: '500',marginTop:9 }}>GET QUOTATIONS</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>


  );
}

export default Output;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kCardColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
    backgroundColor: 'white',
    height: hp('80%'),
    width: wp('82%'),
    alignSelf: 'center',
    borderRadius: 30,
    elevation: 10
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
    // height:45,
    borderRadius: 50,
    backgroundColor: '#E9E9E9',
    borderColor: '#E9E9E9'
  },
  header: {
    textAlign: 'left',
    color: kCardColor1,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 28,
    marginLeft: 20,
    fontWeight: '500'

  },
  label: {
    color: kCardColor1,
    fontSize: 15,
    marginLeft: 20,
  },
  button: {
    marginTop: 20,
    width: wp('60%'),
    height: 45,
    borderRadius: 50,
    alignSelf: 'center'
  }
});

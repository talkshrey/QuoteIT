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

function Output({ route }) {
  const [token,setToken]=useState('');
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
        colors={['#E32747', '#E3556D', '#E399A5']}
        style={styles.linearGradient}>
        <View style={styles.container1}>
          <Text style={styles.display}>Username</Text>
          <Text style={styles.display}>Email Address</Text>
          <Text style={styles.display}>Contact Number</Text>
          <Text style={styles.display}>{Category}</Text>
          <Text style={styles.display}>{SubCategory}</Text>
          <Text style={styles.display}>{model}</Text>
        </View>
        <Button
        title="Chal Quoatation de"
          onPress={whatsAppMessage}></Button>
      </LinearGradient>
    </View>
  );
}

export default Output;

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
    paddingLeft: 50,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#E9E9E9',
    borderColor: '#E9E9E9'
  }
});

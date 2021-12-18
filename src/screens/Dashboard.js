import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Dashboard = () => (
  <LinearGradient
    colors={['#1F4068', '#E33E5A', '#FFFFFF']}
    style={styles.linearGradient}>
    <View style={styles.container}>
      
        <Text style={styles.label}>Vendor Name</Text>
        <Text style={styles.label}>Price Quoted</Text>
    </View>
    <View style={styles.container}></View>
    <View style={styles.container}></View>
    <View style={styles.container}></View>
    <View style={styles.container}></View>
  </LinearGradient>
);

export default Dashboard;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    margin: 20,
    height: hp('10%'),
    width: wp('80%'),
  },
  container: {
    margin: 20,
    height: hp('10%'),
    width: wp('80%'),
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    borderColor: 'gray',
    elevation: 9,
  },
  label:{
      color:'black',
  }
});

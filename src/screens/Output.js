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

const Output = () => (
  <View style={styles.container}>
    <LinearGradient
      colors={['#E32747', '#E3556D', '#E399A5']}
      style={styles.linearGradient}>
      <View style={styles.container1}>
        <Text style={styles.display}>Username</Text>
        <Text style={styles.display}>Email Address</Text>
        <Text style={styles.display}>Contact Number</Text>
        <Text style={styles.display}>Category</Text>
        <Text style={styles.display}>Sub-Category</Text>
        <Text style={styles.display}>Model Number</Text>

      </View>
    </LinearGradient>
  </View>
);

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
    justifyContent:'center',
  },
  linearGradient: {
    height: 200,
  },
  display:{
      color:'#1F4068',
      textAlign:'left',
      borderWidth:2,
      padding:10,
      paddingLeft:50,
      margin:10,
      borderRadius:50,
      backgroundColor:'#E9E9E9',
      borderColor:'#E9E9E9'
  }
});

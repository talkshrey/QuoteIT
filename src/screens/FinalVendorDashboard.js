import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView, VibrancyView} from '@react-native-community/blur';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FinalVendorDashboard = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello Priyambi ,</Text>
    <Text style={styles.label}>We have the following queries left for you:</Text>
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'column'}}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>Yash</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>HP 15</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>9326549053</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity >
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column'}}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>Priyambi</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>HP 15</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>8879125321</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity>
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'column'}}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>Shrey</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>Apple MacBook Air M1</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{flex: 0.9}}>
              <Text>9833447698</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity>
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default FinalVendorDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#1A1B2F',
  },
  image: {
    margin: 20,
    marginBottom: 10,
    height: 100,
    width: 100,
  },
  label: {
    color: 'white',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 15,
  },
  button: {
    color: 'black',
  },
  box: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    borderColor: '#1A1B2F',
    borderWidth: 2,
    padding: 5,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 15,
  },
  linearGradient: {
    borderRadius: 5,
    width: 162,
    height: 130,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  upload: {
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#FECACA',
    width: 100,
    color: 'black',
    marginLeft: 35,
    fontSize: 13,
  },
  info: {
    fontWeight: 'bold',
  },
});
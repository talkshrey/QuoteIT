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
import { BlurView, VibrancyView } from '@react-native-community/blur';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { kCardColor1 } from '../constants/colors';

const VendorDashboard = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello Priyambi ,</Text>
    <Text style={styles.label}>We have the following queries for you:</Text>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column' }}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>Lokita</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>Dell Inspiron 15 3000</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>7045141518</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('Quotation')} style={{ justifyContent: 'center', flex: 1, marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>Yash</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>HP 15</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>9326549053</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('Quotation')} style={{ justifyContent: 'center', flex: 1, marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column' }}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>Priyambi</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>HP 15</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>8879125321</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('Quotation')} style={{ justifyContent: 'center', flex: 1, marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column' }}>
        <LinearGradient
          colors={['#FECACA', '#F5796D']}
          style={styles.linearGradient}>
          <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Client Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>Shrey</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Model Name: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>Apple MacBook Air M1</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <View>
              <Text style={styles.info}>Mobile No: </Text>
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.desc}>9833447698</Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate('Quotation')} style={{ justifyContent: 'center', flex: 1, marginTop: 20, marginBottom: 20 }}>
          <Text style={styles.upload}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default VendorDashboard;

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
    fontSize: 16,
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
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 15,
  },
  linearGradient: {

    borderRadius: 10,
    width: 180,
    height: 150,
    marginLeft: 17,
    marginTop: 20,
    marginBottom: 20,
  },
  upload: {
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#FECACA',
    width: 120,
    height: 30,
    color: 'black',
    marginLeft: 42,
    fontSize: 13,
    paddingTop: 5
  },
  info: {
    fontWeight: 'bold',
    color: kCardColor1
  },
  desc: {
    flex: 0.9,
    color: kCardColor1
  }
});
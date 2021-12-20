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

const VendorDashboard = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Queries Generated</Text>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../assets/query.jpg')}></Image>
        <TouchableOpacity>
          <Text style={styles.text}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../assets/query.jpg')}></Image>
        <TouchableOpacity>
          <Text style={styles.text}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{flexDirection: 'row'}}>
    <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../assets/query.jpg')}></Image>
        <TouchableOpacity>
          <Text style={styles.text}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={require('../assets/query.jpg')}></Image>
        <TouchableOpacity>
          <Text style={styles.text}>Upload Quotation</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default VendorDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5796D',
  },
  image: {
    margin: 20,
    marginBottom:10,
    height: 100,
    width: 100,
  },
  label: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  button: {
    color: 'black',
  },
  box:{
    alignContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:10,
    fontWeight:'700',
    borderColor:'#1A1B2F',
    borderWidth:2,
    padding:5

  }
});

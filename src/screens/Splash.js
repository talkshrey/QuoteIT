import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2200);
  }, []);
  return (
    <LinearGradient
      colors={['#1A1B2F', '#162447', '#1F4068']}
      style={styles.linearGradient}>
      <LottieView
        source={require('../assets/quotefinal.json')}
        autoPlay={true}
        loop
        style={styles.lottieview}
      />

      <Text style={styles.header}>QuoteIT</Text>
      <Text style={{...styles.header, fontSize:20, marginTop:7}}>"The best place for the best prices"</Text>
    </LinearGradient>


  );
}

export default Splash;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    height: 500,
    width: 350,
    backgroundColor: '#e33e5a',
    marginTop: 200,
    alignSelf: 'center',
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  lottieview: {
    height: 250,
    width: 250,
    marginTop: hp('10%'),
    alignSelf: 'center',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 100,
  },
});
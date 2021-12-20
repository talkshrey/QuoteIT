import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { kCardColor1 } from '../constants/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';

function ProductDetails({ navigation, route }) {
  var category = route.params.c;
  var url = route.params.u;
  console.log(url);
  console.log(category);

  useEffect(() => {
    getSubCategories();
  }, []);
  const [subcategory, setSubcategory] = useState([]);
  const images = [
    { image: require('../assets/images/laptop.png') },
    { image: require('../assets/images/fridge.png') },
    { image: require('../assets/images/washingmachine.png') },
    { image: require('../assets/images/TV.png') },
    { image: require('../assets/images/microwave.png') },
    { image: require('../assets/images/cement.png') },
    { image: require('../assets/images/plates.png') },
    { image: require('../assets/images/wires.png') },
    { image: require('../assets/images/wood.png') },
    { image: require('../assets/images/cloth.png') },
    { image: require('../assets/images/nebulisers.png') },
    { image: require('../assets/images/oximeter.png') },
    { image: require('../assets/images/masks.png') },
    { image: require('../assets/images/oxygenconcentrator.png') },
    { image: require('../assets/images/stethoscope.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
    { image: require('../assets/images/cars.png') },
  ];

  const getSubCategories = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    await fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        setSubcategory(result);
        console.log(result);
      })
      .catch(error => console.log('error', error));
  };
  const mainImage = () => {
    switch (category) {
      case 'Appliances':
        return (
          <View style={{}}>
            <Image
              style={styles.mainImage}
              source={require('../assets/images/appliances.png')}></Image>
          </View>
        );
      case 'Raw materials':
        return (
          <View>
            <Image
              style={styles.mainImage}
              source={require('../assets/images/raw.png')}></Image>
          </View>
        );
      case 'Healthcare':
        return (
          <View>
            <Image
              style={styles.mainImage}
              source={require('../assets/images/medicalequip.png')}></Image>
          </View>
        );
      case 'Cars':
        return (
          <View>
            <Image
              style={styles.mainImage}
              source={require('../assets/images/cars.png')}></Image>
          </View>
        );
      case 'Beauty':
        return (
          <View >
            <Image
              style={styles.mainImage}
              source={require('../assets/images/beauty.png')}></Image>
          </View>
        );
      case 'Fashion':
        return (
          <View>
            <Image
              style={styles.mainImage}
              source={require('../assets/images/fashion.png')}></Image>
          </View>
        );
    }
  };
  const renderItem = ({ item, index }) => {

    switch (category) {
      case 'Appliances':
        return (
          <View style={{ backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height: 240, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30 }}>
            <LinearGradient
              colors={['#FECACA', '#F5796D',]}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })} >
                <View style={{ backgroundColor: '#FECACA', height: 180, borderRadius: 20, elevation: 10}}>
                  <Image
                    source={images[index].image}
                    style={styles.images}>
                  </Image>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>{item['subCatName']}</Text>
              </TouchableOpacity >
            </LinearGradient>
          </View >
          // <View>
          //   <View>
          //     <Image
          //       style={{ width: 100, height: 100 }}
          //       source={images[index].image}
          //     />
          //     <TouchableOpacity onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })}>
          //       <Text>{item['subCatName']}</Text>
          //     </TouchableOpacity>
          //   </View>
          // </View>
        );
      case 'Raw materials':
        return (
          <View style={{ backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height: 240, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30 }}>
            <LinearGradient
              colors={['#FECACA', '#F5796D',]}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })} >
                <View style={{ backgroundColor: '#FECACA', height: 170, marginTop: 20, borderRadius: 20, marginLeft: 10, elevation: 10 }}>
                  <Image
                    source={images[index + 5].image}
                    style={styles.images}>
                  </Image>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>{item['subCatName']}</Text>
              </TouchableOpacity >
            </LinearGradient>
          </View >
        );
      case 'Healthcare':
        return (
          <View style={{ backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height: 240, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30 }}>
            <LinearGradient
              colors={['#FECACA', '#F5796D',]}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })} >
                <Image
                  source={images[index + 10].image}
                  style={styles.images}>
                </Image>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>{item['subCatName']}</Text>
              </TouchableOpacity >
            </LinearGradient>
          </View >
        );
      case 'Cars':
        return (
          <View style={{ backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height: 240, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30 }}>
            <LinearGradient
              colors={['#FECACA', '#F5796D',]}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })} >
                <Image
                  source={images[index + 15].image}
                  style={styles.images}>
                </Image>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>{item['subCatName']}</Text>
              </TouchableOpacity >
            </LinearGradient>
          </View >
        );
      case 'Beauty':
        return (
          <View style={{ backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height: 240, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30 }}>
            <LinearGradient
              colors={['#FECACA', '#F5796D',]}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })} >
                <View style={{ backgroundColor: '#FECACA', height: 170, marginTop: 20, borderRadius: 20, marginLeft: 10, elevation: 10 }}>
                  <Image
                    source={images[index + 20].image}
                    style={styles.images}>
                  </Image>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>{item['subCatName']}</Text>
              </TouchableOpacity >
            </LinearGradient>
          </View >
        );
      case 'Fashion':
        return (
          <View style={{ backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height: 240, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30 }}>
            <LinearGradient
              colors={['#FECACA', '#F5796D',]}
              style={styles.linearGradient}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ModelDetails', { f: 'https://glacial-harbor-01488.herokuapp.com/models_api', x: category, s: item['subCatName'] })} >
                <Image
                  source={images[index + 20].image}
                  style={styles.images}>
                </Image>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'white', fontWeight: '600' }}>{item['subCatName']}</Text>
              </TouchableOpacity >
            </LinearGradient>
          </View >
        );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your {category} </Text>
      <View>{mainImage()}</View>
      <FlatList
        data={subcategory}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B2F',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
    marginTop: 20,
  },
  mainImage: {
    width: 420,
    height: 220,
    marginTop: 40,
  },
  images: {
    width: wp('35%'),
    height: 150,
    marginTop:15,
    marginLeft:10
  },
  linearGradient: {
    flex: 1,
    borderRadius: 30
    //paddingLeft: 15,
    //paddingRight: 15,
  },
});
export default ProductDetails;

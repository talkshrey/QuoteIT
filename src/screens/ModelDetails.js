import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { kCardColor1 } from '../constants/colors';

function ModelDetails({ route, navigation }) {
  var url = route.params.f;
  var category = route.params.x;
  var subcategory = route.params.s;
  console.log(url);
  console.log(category);
  console.log(subcategory);
  const images = [
    { image: require('../assets/images/dell.png') },
    { image: require('../assets/images/hp.png') },
    { image: require('../assets/images/mac.png') },
  ];
  useEffect(() => {
    getModelCategories();
  }, []);
  const [modelcategory, setModelcategory] = useState([]);
  const getModelCategories = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    await fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        setModelcategory(result);
        console.log(modelcategory);
      })
      .catch(error => console.log('error', error));
  };

  const renderItem = ({ item, index }) => {
    return (
      // <View>
      //   <Image style={{width: 200, height: 200}} source={images[index].image} />
      //   <TouchableOpacity  onPress={() =>
      //     navigation.navigate('Output', {m: category, s: subcategory,o:item['model']})
      //   }>
      //   <Text>{item['model']}</Text></TouchableOpacity>
      // </View>
      <View style={{
        backgroundColor: '#F5796D', elevation: 20, width: wp('42%'), height:
          200, marginRight: 10, marginLeft: 20, marginTop: 40, borderRadius: 30
      }}>
        <LinearGradient
          colors={['#FECACA', '#F5796D',]}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Output', { m: category, s: subcategory, o: item['model'] })}
            style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#FECACA', height: 170, marginTop:20, borderRadius:20, marginLeft:10, elevation:10}}>
              <Image
                source={images[index].image}
                style={styles.images}>
              </Image>
            </View>

            <View style={{ marginTop: 20, flex: 0.9 }}>
              <Text style={{ fontSize: 22, color: "white", fontWeight: '600', marginLeft:15 }}>{item['model']}</Text>
              <Text style={{ fontSize: 12, color: kCardColor1, fontWeight: '600', marginTop: 30 ,marginLeft:15 }}>{item['desc']}</Text>
            </View>

          </TouchableOpacity >
        </LinearGradient>
      </View >
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your {subcategory}</Text>
      <FlatList
        data={modelcategory}
        keyExtractor={item => item.index}
        renderItem={renderItem}
      />
      {/* <Button
        title="Confirm"
        onPress={() =>
          navigation.navigate('Output', {m: category, s: subcategory})
        }></Button> */}
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
  linearGradient: {
    flex: 1,
    borderRadius: 30,
    width: wp('90%'),
    //paddingLeft: 15,
    //paddingRight: 15,
  },
  images: {
    width: wp('34%'),
    height: 100,
    marginTop: 50,
    marginLeft: 10,
   
  },
});
export default ModelDetails;

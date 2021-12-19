import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
function ProductDetails({navigation,route}) {
  var category = route.params.c;
  var url = route.params.u;
  console.log(url);
  console.log(category);

  useEffect(() => {
    getSubCategories();
  }, []);
  const [subcategory, setSubcategory] = useState([]);
  const images = [
    {image: require('../assets/images/laptop.png')},
    {image: require('../assets/images/fridge.png')},
    {image: require('../assets/images/washingmachine.png')},
    {image: require('../assets/images/TV.png')},
    {image: require('../assets/images/microwave.png')},
    {image: require('../assets/images/cement.png')},
    {image: require('../assets/images/plates.png')},
    {image: require('../assets/images/wires.png')},
    {image: require('../assets/images/wood.png')},
    {image: require('../assets/images/cloth.png')},
    {image: require('../assets/images/nebulisers.png')},
    {image: require('../assets/images/oximeter.png')},
    {image: require('../assets/images/masks.png')},
    {image: require('../assets/images/oxygenconcentrator.png')},
    {image: require('../assets/images/stethoscope.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
    {image: require('../assets/images/cars.png')},
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
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/images/appliances.png')}></Image>
          </View>
        );
      case 'Raw materials':
        return (
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/images/raw.png')}></Image>
          </View>
        );
      case 'Healthcare':
        return (
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/images/medicalequip.png')}></Image>
          </View>
        );
      case 'Cars':
        return (
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/images/cars.png')}></Image>
          </View>
        );
      case 'Beauty':
        return (
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/images/beauty.png')}></Image>
          </View>
        );
      case 'Fashion':
        return (
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/images/fashion.png')}></Image>
          </View>
        );
    }
  };
  const renderItem = ({item, index}) => {

    switch (category) {
      case 'Appliances':
        return (
          <View>
            <View>
              <Image
                style={{width: 100, height: 100}}
                source={images[index].image}
              />
              <TouchableOpacity onPress={()=>navigation.navigate('ModelDetails',{f:'https://glacial-harbor-01488.herokuapp.com/models_api',x:category,s:item['subCatName']})}>
              <Text>{item['subCatName']}</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 'Raw materials':
        return (
          <View>
            <View>
              <Image
                style={{width: 300, height: 300}}
                source={images[index+5].image}
              />
              <Text>{item['subCatName']}</Text>
            </View>
          </View>
        );
      case 'Healthcare':
        return (
          <View>
            <View>
              <Image
                style={{width: 300, height: 300}}
                source={images[index+10].image}
              />
            </View>
          </View>
        );
      case 'Cars':
        return (
          <View>
            <View>
              <Image
                style={{width: 300, height: 300}}
                source={images[index+15].image}
              />
            </View>
          </View>
        );
      case 'Beauty':
        return (
          <View>
            <View>
              <Image
                style={{width: 300, height: 300}}
                source={images[index+25].image}
              />
            </View>
          </View>
        );
      case 'Fashion':
        return (
          <View>
            <View>
              <Image
                style={{width: 300, height: 300}}
                source={images[index+30].image}
              />
            </View>
          </View>
        );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SUB-CATEGORY </Text>
      <View>{mainImage}</View>
      <FlatList
        data={subcategory}
        keyExtractor={item => item.index}
        renderItem={renderItem}
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
    marginTop: 5,
  },
});
export default ProductDetails;

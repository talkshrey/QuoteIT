import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
function ModelDetails({route, navigation}) {
  var url = route.params.f;
  var category = route.params.x;
  var subcategory = route.params.s;
  console.log(url);
  console.log(category);
  console.log(subcategory);
  const images = [
    {image: require('../assets/images/dell.png')},
    {image: require('../assets/images/hp.png')},
    {image: require('../assets/images/mac.png')},
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

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image style={{width: 200, height: 200}} source={images[index].image} />
        <Text>{item['model']}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MODEL-CATEGORY </Text>
      <FlatList
        data={modelcategory}
        keyExtractor={item => item.index}
        renderItem={renderItem}
      />
      <Button
        title="Confirm"
        onPress={() =>
          navigation.navigate('Output', {m: category, s: subcategory})
        }></Button>
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
export default ModelDetails;

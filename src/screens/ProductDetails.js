import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
function ProductDetails({route}) {
  
  var url = route.params;
  console.log(url);

  useEffect(() => {
    getSubCategories();
  }, []);
  const [subcategory, setSubcategory] = useState([]);

  const getSubCategories = async () => {
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    await fetch(url, requestOptions)
      .then(response => response.json())
      .then(result =>  setSubcategory(result), console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    <View style={styles.container}>
        <Text style={styles.header}>SUB-CATEGORIES ITEM LIST</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#162447',
  },
  header:{
      textAlign:'center',
      color:'white',
      marginTop:'20',
      fontWeight:'700',

  }
});
export default ProductDetails;

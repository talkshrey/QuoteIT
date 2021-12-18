
import React, {useState,useEffect} from 'react';
import {View, StyleSheet,FlatList,Text} from 'react-native';
function ProductDetails({route}) {
  const [data, setData] = useState([]);
  let url = route.params;
  console.log(url);

  useEffect(() => {
    await fetch(url)
      .then(response => response.json())
      .then(json => setData(json));
      console.log(data);
  }, []);
  return (
    <View>
      {/* <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
          <Text>{item.subCatName}</Text>
        }
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ProductDetails;


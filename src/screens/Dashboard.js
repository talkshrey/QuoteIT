import React,{useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Dashboard() {
  const [quotations, setQuotations] = useState('');
  useEffect(() => {
    saveData();
  }, []);
  const saveData = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJlM2IyYmRjMjg0NzE3OTJkNGU3OWMiLCJpYXQiOjE2Mzk4NjcwNDcsImV4cCI6MTY3MTQwMzA0N30.gAYUoakAHMKKltkWlVYikGrcReNmeSAC8U7TRUTmkhg',
    );

    var raw = '';

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:3000/api/user/client/dashboard', requestOptions)
      .then(response => response.json())
      .then(result => {
        setQuotations(result.data), console.log(result.data);
      })
      .catch(error => console.log('error', error));
  };
  const renderItem = ({item, index}) => {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Vendor's Company:-{item['companyName']}</Text>
        <Text style={styles.label}>Vendor's Contact:-{item['vendorContact']}</Text>
        <Text style={styles.label}>Raw Price:-{item['rawPrice']}</Text>
        <Text style={styles.label}>Final Price:-{item['afterTaxPrice']}</Text>
    </View>
    );

  };
  return (
    <View style={styles.linearGradient}>
   
      <Text style={styles.header}>QUERIES FOR YOUR ORDER</Text>
      <FlatList
      numColumns={2}
      data={quotations}
      keyExtractor={item => item.index}
      renderItem={renderItem}
      />
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor:'#1A1B2F',
    alignItems: 'center',
  },
  image: {
    margin: 20,
    height: hp('10%'),
    width: wp('80%'),
  },
  container: {
    margin: 20,
    height: hp('20%'),
    width: wp('40%'),
    backgroundColor: '#F5796D',
    borderRadius:10,
    borderColor: 'gray',
    elevation: 9,
    padding:2,
    paddingLeft:5,
  },
  label: {
    color: 'white',
    fontSize:13,
  },
});



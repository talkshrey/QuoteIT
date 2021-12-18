import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import CategoriesCardComponent from '../../components/CategoriesCardComponent';
import LinearGradient from 'react-native-linear-gradient';
import { kCardColor1, kCardColor2, kCardColor3 } from '../../constants/colors';

function MarketScreen() {
   const url =[
    'http://localhost:5000/sub-category-appliance',
    'http://localhost:5000/sub-category-raw-materials',
    'http://localhost:5000/sub-category-Healthcare',
    'http://localhost:5000/sub-category-cars',
    'http://localhost:5000/sub-category-beauty',
    'http://localhost:5000/sub-category-fashion',
   ]
    useEffect(() => {
        getCategories();
    }, []);
    const [category, setcategory] = useState([]);
    const [isCategory, setisCategory] = useState(true);

    const getCategories = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        await fetch("http://localhost:5000/category-app", requestOptions)
            .then(response => response.json())
            .then(result => setcategory(result))
            .catch(error => console.log('error', error));
    }
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <CategoriesCardComponent
                    color={kCardColor1}
                    title={item["category-name"]}
                    onPress={()=>navigation.navigate('ProductDetails',url[index])} />
            </View>

        )
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#E32747', '#E3556D', '#E399A5']}
                style={styles.linearGradient}>
                <FlatList
                    data={category}
                    keyExtractor={(item) => item.index}
                    renderItem={renderItem}
                />
                {/* 
                
                {/* <View>

                </View>
                <View>

                </View>
                <View>

                </View> */}

            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1
    }

});
export default MarketScreen



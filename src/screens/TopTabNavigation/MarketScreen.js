import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import CategoriesCardComponent from '../../components/CategoriesCardComponent';
import LinearGradient from 'react-native-linear-gradient';
import { kCardColor1, kCardColor2, kCardColor3 } from '../../constants/colors';
import ProductDetails from '../ProductDetails';


function MarketScreen({ navigation }) {
    const url = [
        'https://glacial-harbor-01488.herokuapp.com/sub-category-appliance',
        'https://glacial-harbor-01488.herokuapp.com/sub-category-raw-materials',
        'https://glacial-harbor-01488.herokuapp.com/sub-category-Healthcare',
        'https://glacial-harbor-01488.herokuapp.com/sub-category-cars',
        'https://glacial-harbor-01488.herokuapp.com/sub-category-beauty',
        'https://glacial-harbor-01488.herokuapp.com/sub-category-fashion',
    ]
    const image = [
        require('../../assets/images/appliances.png'),
        require('../../assets/images/raw.png'),
        require('../../assets/images/medicalequip.png'),
        require('../../assets/images/cars.png'),
        require('../../assets/images/beauty.png'),
        require('../../assets/images/fashion.png'),
    ];
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
        await fetch("https://glacial-harbor-01488.herokuapp.com/category-app", requestOptions)
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
                    image={image[index]}
                    onPress={() => navigation.navigate('ProductDetails', { u: url[index], c: item["category-name"] })} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#F57960", "#FECACA",]}
                style={styles.linearGradient}>
                <FlatList
                    data={category}
                    keyExtractor={(item) => item.index}
                    renderItem={renderItem}
                />
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



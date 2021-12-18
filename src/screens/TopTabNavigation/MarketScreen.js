import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import CategoriesCardComponent from '../../components/CategoriesCardComponent';
import LinearGradient from 'react-native-linear-gradient';
import { kCardColor1, kCardColor2, kCardColor3 } from '../../constants/colors';
import ProductDetails from '../ProductDetails';

function MarketScreen({navigation}) {
    let appliance='http://localhost:5000/sub-category-appliance';
    let rawmaterials=' http://localhost:5000/sub-category-raw-materials';
    let healthcare=' http://localhost:5000/sub-category-Healthcare';
    let cars='http://localhost:5000/sub-category-cars';
    let beauty='http://localhost:5000/sub-category-beauty';
    let fashion='http://localhost:5000/sub-category-fashion';

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#E32747', '#E3556D', '#E399A5']}
                style={styles.linearGradient}>
                <ScrollView >
                    <Text style={styles.header}>CHOOSE YOUR CATEGORY</Text>
                    <CategoriesCardComponent 
                    onPress={()=>navigation.navigate('ProductDetails',appliance)}
                    color = {kCardColor1} />
                    <CategoriesCardComponent 
                    onPress={()=>navigation.navigate('ProductDetails',rawmaterials)}
                    color={kCardColor1} />
                    <CategoriesCardComponent 
                    onPress={()=>navigation.navigate('ProductDetails',healthcare)}
                    color = {kCardColor2}/>
                    <CategoriesCardComponent 
                    onPress={()=>navigation.navigate('ProductDetails',cars)}
                     color = {kCardColor2}/>
                    <CategoriesCardComponent 
                    onPress={()=>navigation.navigate('ProductDetails',beauty)}
                    color = {kCardColor3}/>
                    <CategoriesCardComponent 
                    onPress={()=>navigation.navigate('ProductDetails',fashion)}
                    color = {kCardColor3}/>
                    {/* <View>

                </View>
                <View>

                </View>
                <View>

                </View> */}
                </ScrollView>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient:{
        flex:1
    },
    header:{
        fontSize:20,
        textAlign:'center',
        marginTop:10,
        fontWeight:'700',
        color:'white'
      

    }

});
export default MarketScreen

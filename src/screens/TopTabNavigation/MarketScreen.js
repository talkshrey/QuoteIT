import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import CategoriesCardComponent from '../../components/CategoriesCardComponent';
import LinearGradient from 'react-native-linear-gradient';
import { kCardColor1, kCardColor2, kCardColor3 } from '../../constants/colors';

function MarketScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#E32747', '#E3556D', '#E399A5']}
                style={styles.linearGradient}>
                <ScrollView >
                    <CategoriesCardComponent
                    color = {kCardColor1} />
                    <CategoriesCardComponent 
                    color={kCardColor1} />
                    <CategoriesCardComponent 
                    color = {kCardColor2}/>
                    <CategoriesCardComponent 
                     color = {kCardColor2}/>
                    <CategoriesCardComponent 
                    color = {kCardColor3}/>
                    <CategoriesCardComponent 
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
    }

});
export default MarketScreen

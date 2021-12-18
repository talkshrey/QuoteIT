import React, { useState } from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { kCardColor1 } from '../constants/colors';



const CategoriesCardComponent = (props) => {
    const [show, setShow] = useState(false);

    const showMore = () => {
        setShow(!show);
    }
    return (
        <View style={{...styles.card, backgroundColor:props.color}}>
            <TouchableOpacity onPress={showMore}>
                <View style={styles.header}>
                    <Text style={styles.textStyle}>Appliances</Text>
                    <View style={{ marginTop: 10, marginLeft: 20 }}>
                        {show ?
                            <Ionicons
                                name="arrow-down-circle-outline"
                                color="white"
                                size={40}>
                            </Ionicons> :
                            <Ionicons
                                name="arrow-forward-circle-outline"
                                color="white"
                                size={40}>
                            </Ionicons>
                        }
                    </View>
                </View>
            </TouchableOpacity>
            {
                show ?
                    <View>
                        <ImageBackground style={styles.imageContainer}
                            source={require('../assets/images/appliances.jpg')
                            }>
                        </ImageBackground>
                        <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }} >ghdjhfgdsghfghgjhkscgbmlkxfbhokfcgnbjgcknbklgfcnzblkzfcnblzcvnbjnbjkndfbjkcdzfkjkjg</Text>
                        </View>
                        <TouchableOpacity onPress={props.onPress}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>

                                <Text style={{ color: 'white' }}>To Explore</Text>
                                <Ionicons
                                    style={{ marginLeft: 5 }}
                                    name="arrow-forward-outline"
                                    color="white"
                                    size={20}>
                                </Ionicons>
                            </View>
                        </TouchableOpacity>


                    </View> : null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
    },
    imageContainer: {
        height: 150,
        marginLeft: 40,
        marginRight: 40,

    },
    header: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    }
});
export default CategoriesCardComponent

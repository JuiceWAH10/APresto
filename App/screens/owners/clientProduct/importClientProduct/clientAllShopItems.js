import React from 'react';
import { 
    Image,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function clientAllShopItems(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Product Image and Infos */}
            <View style={styles.containerInfos}>
                <Image style={styles.itemImage}
                        source={require('../../../../assets/DummyShop.jpg')}>
                </Image>
                <View style={styles.itemContainer} >
                    <Text style={styles.itemName}>Product Name</Text>
                    <Text style={styles.itemPrice}>Php 100.00</Text>
                    <Text style={styles.itemInfo}>Product Definition</Text>
                </View> 
            </View>
            {/* End of Product Image and Infos */}

            {/* Product Details */}
            <View style={styles.itemDetailsWrapValues}>
                <View style={styles.itemDetailsWrapValuesSmall}>
                    <Icon3 style={styles.itemDetailsIcon} name="layers" size={18} />
                    <Text style={styles.itemDetailsText}>Stock: 100</Text>
                </View>
                <View style={styles.itemDetailsWrapValuesSmall}>
                    <Icon3 style={styles.itemDetailsIcon} name="wallet" size={18} />
                    <Text style={styles.itemDetailsText}>Sold: 23</Text>
                </View>
            </View>
            <View style={styles.itemDetailsWrapValues}>
                <View style={styles.itemDetailsWrapValuesSmall}>
                    <Icon2 style={styles.itemDetailsIcon} name="heart" size={18} />
                    <Text style={styles.itemDetailsText}>Likes: 34</Text>
                </View>
                <View style={styles.itemDetailsWrapValuesSmall}>
                    <Icon3 style={styles.itemDetailsIcon} name="eye" size={18}/>
                    <Text style={styles.itemDetailsText}>Views: 244</Text>
                </View>
            </View>
            {/* End of Product Details */}

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('clientProductEdit')} >
                    <Icon2 name="pencil" size={20} color="#fff" />
                    <Text style={styles.buttonLabel}>Edit Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => "pressed"} >
                    <Icon3 name="archive" size={20} color="#fff" />
                    <Text style={styles.buttonLabel}>Delist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => "pressed"} >
                    <Icon2 name="trash" size={20} color="#fff" />
                    <Text style={styles.buttonLabel}>Delete</Text>
                </TouchableOpacity>
            </View>
            {/* End of Buttons */}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fd4140",
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        width: wp('25%'),
        height: 35,
        marginHorizontal: wp('2%'),
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 12,
        marginLeft: 3
    },
    buttonsContainer:{
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5,
        height: 40,
        width: 80
    },
    container: {
        alignSelf: "center",
        marginTop: 3,
        marginBottom: 3,
        height: 225,
        width: wp('100%'),
        // borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,

        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
    },
    containerInfos: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
        height: 100,
        width: wp('90%'),
    },
    itemContainer:{
        flexDirection: "column",
        width: wp('50%'),
        elevation: 5
    },
    itemDetailsIcon: {
        opacity: 0.5
    },
    itemDetailsText: {
        color:'#1c2b59',
        fontSize: 12,
        opacity: 0.5
    },
    itemDetailsWrapValues:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
        width: wp('80%')
    },
    itemDetailsWrapValuesSmall:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '35%'
    },
    itemImage: {
        alignSelf: "center",
        borderRadius: 15,
        // flexDirection: "column",
        height: 100,
        width: wp('30%'),
        borderWidth: 1,
    },
    itemInfo: {
        alignSelf: "center",
        fontSize: 14,
        marginRight: 10
    },
    itemName: {
        alignSelf: "center",
        marginBottom: 2,
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold"
    },
    itemPrice: {
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold"
    },
    quantity: {
        textAlign: "center",
        marginTop: 5,
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 4,
        marginRight: 4      
    },
})
export default clientAllShopItems;
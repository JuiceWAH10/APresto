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


function clientAllShopRewards(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerInfos}>
                <Image style={styles.itemImage}
                        source={require('../../../../assets/DummyShop.jpg')}>
                </Image>
                <View style={styles.itemContainer} >
                    <Text style={styles.itemName}>Reward Name</Text>
                    <Text style={styles.itemPrice}>20 Pts</Text>
                    <Text style={styles.itemPrice}>100 Remaining</Text>
                    <Text style={styles.itemInfo}>Category</Text>
                    <Text style={styles.itemInfo}>Reward Definition</Text>
                </View> 
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('clientRewardEdit')} >
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
        height: 200,
        width: wp('90%'),
        // borderWidth: 1
    },
    containerInfos: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
        height: 140,
        width: wp('90%'),
    },
    itemContainer:{
        flexDirection: "column",
        width: wp('50%'),
        elevation: 5
    },
    itemImage: {
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: "column",
        height: 140,
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
export default clientAllShopRewards;
import React from 'react';
import { 
    ImageBackground,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AllShopItem from './././importShopItems/allShopItem';

function shopItemsCart(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            {/* Top Navigation */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name="left" size={30} color="#ee4b43" />
                </TouchableOpacity>
            </View>
            {/* End of Top Navigation */}
            
            <View style={[styles.formContainer, {flex:15}]}>
                {/* Banner */}
                <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../../assets/bannerImages/cart_Banner.jpg')}>
                    <View style={styles.bannerDarken}>
                        <Text style={styles.bannerLabel}>Reward Points will be added once transaction's done!</Text>
                        <Text style={styles.bannerLabelSmall}>Everytime you spent on products you love gives you rewards point.</Text>
                    </View>    
                </ImageBackground>
                {/* End of Banner */}

                <ScrollView style ={styles.cartContainer}>
                    <AllShopItem/>
                    <AllShopItem/>
                    <AllShopItem/>
                    <AllShopItem/>
                    <AllShopItem/>
                    <AllShopItem/>
                    <AllShopItem/> 
                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.footerTextContainer}>
                        <Text style={styles.footerLabelSmall}>Total Amount</Text>
                        <Text style={styles.footerLabel}>Php 200.00</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('shopItemsQR')} >
                        <Text style={styles.buttonLabel}>Generate QR Code</Text>
                    </TouchableOpacity>
                </View>
                {/* End of Footer */}
            </View>
            
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 18,
        marginBottom: 10,
        height: 150,
        width: wp('90%'),
    },
    bannerDarken:{
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.5)',
        // borderRadius: 30,
    },
    bannerLabel: {
        textAlign: "center",
        marginTop: 35,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    bannerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    button: {
        backgroundColor: '#ee4b43',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 10,
        width: '50%',
        height: hp('6%'),
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16
    },
    cartContainer: {
        alignSelf: "center",
        width: wp('90%')
    },
    droidSafeArea: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? 32 : 0
    },
    footer:{
        alignSelf: "center",
        height: hp('6%'),
        width: wp('90%'),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    footerLabel: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    footerLabelSmall: {
        textAlign: "center",
        fontSize: 12,
        marginTop: 8,
    },
    footerTextContainer:{
        alignContent: "center",
        marginLeft: wp('5%')
    },
    title: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    titlePopular: {
        textAlign: "center",
        marginLeft: 3,
        marginTop: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    titlePopularContainer: {
        alignSelf: "center",  
        flexDirection: "row",
        marginBottom: 15,
        marginTop: 15,
        width: wp('90%'),
    },
    topNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 20,
        width: wp('100%'),
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },
    topNavRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
        width: 60,
        marginRight: 15,
        paddingTop: 5,
    },    
})
export default shopItemsCart;
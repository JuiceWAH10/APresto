import React from 'react';
import { 
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function clientHomepage(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Text style={styles.title}>APresto Shop</Text>
            <ScrollView style={styles.container}>
                {/* Profile Header for Shops */}
                <ImageBackground style={styles.profileBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../assets/Liked_Shop.jpg')}>

                    <View style={styles.profileDarken}>
                        {/* Profile Informations */}
                        <Text style={styles.profileShopName}>Shop Name</Text>
                        <Text style={styles.profileLabelSmall}>Spending for the products  you love give you rewards!</Text>
                        <View style={styles.profileButtonContainer}>
                            <TouchableOpacity style={styles.profileButton} onPress={() => "pressed"} >
                                <Icon name="user" size={20} color="#fff" />
                                <Text style={styles.profileButtonLabel}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('rewardItems')} >
                                <Icon name="logout" size={20} color="#fff" />
                                <Text style={styles.profileButtonLabel}>Log Out</Text>
                            </TouchableOpacity>
                        {/* End of Profile Informations */}
                        </View>

                        {/* Rate, Suki, Shopped, Claimed */}
                        <ScrollView horizontal={true} style={styles.profileInfosContainer}>
                            <View style={styles.profileInfo}>
                                <View style={styles.profileInfoLabel} >
                                    <Icon name="star" size={20} color="#fff" />
                                    <Text style={styles.profileInfoTextLabel}>Rate</Text>
                                </View>
                                <Text style={styles.profileInfoTextLabelBig}> 4.5 </Text>    
                            </View>
                            <View style={styles.profileInfo}>
                                <View style={styles.profileInfoLabel} >
                                    <Icon name="smileo" size={20} color="#fff" />
                                    <Text style={styles.profileInfoTextLabel}>My Suki</Text>
                                </View>
                                <Text style={styles.profileInfoTextLabelBig}> 200 </Text>    
                            </View>
                            <View style={styles.profileInfo}>
                                <View style={styles.profileInfoLabel} >
                                    <Icon name="shoppingcart" size={20} color="#fff" />
                                    <Text style={styles.profileInfoTextLabel}>Shopped</Text>
                                </View>
                                <Text style={styles.profileInfoTextLabelBig}> 389 </Text>    
                            </View>
                            <View style={styles.profileInfo}>
                                <View style={styles.profileInfoLabel} >
                                    <Icon name="gift" size={20} color="#fff" />
                                    <Text style={styles.profileInfoTextLabel}>Claimed</Text>
                                </View>
                                <Text style={styles.profileInfoTextLabelBig}> 67 </Text>    
                            </View>
                        </ScrollView>
                        {/* End of Rate, Suki, Shopped, Claimed */}
                    </View>    
                </ImageBackground>
                {/* End of Profile Header */}

                {/* QR code Scanner */}
                <TouchableOpacity onPress={()=> props.navigation.navigate('QRCodeScanner')}>
                    <View style={styles.scanQRContainer}>
                            <Text style={styles.scanQRContainerLabel}>Scan QR Code</Text>
                            <Text style={styles.scanQRContainerLabelSmall}>Scan QR code provided by customers.</Text>
                    </View>
                </TouchableOpacity>    
                {/* End of QR Code Scanner */}

                {/* APresto Products */}
                <View style={styles.dualTitleContainer}>
                    <Icon name="shoppingcart" size={30} color="#fd4140" />
                    <Text style={styles.dualTitle}> APresto Products</Text>
                </View>
                <View style={styles.dual}>
                    <TouchableOpacity onPress={()=>navigation.navigate('clientProductList')}>
                        <View style={styles.dualContent}>
                            <ImageBackground style={styles.dualBgImage}
                                imageStyle={{ borderRadius: 30}}
                                source={require('../../assets/bannerPeach.jpg')}>
                                <View style={styles.darken}> 
                                    <Text style={styles.dualLabel}>My Products</Text>
                                    <Text style={styles.dualLabelSmall}>Gems around corners</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('clientProductAdd')}>
                        <View style={styles.dualContent}>
                            <ImageBackground style={styles.dualBgImage}
                                imageStyle={{ borderRadius: 30}}
                                source={require('../../assets/bannerPeach.jpg')}>
                                <View style={styles.darken}>
                                    <Text style={styles.dualLabel}>Add Product</Text>
                                    <Text style={styles.dualLabelSmall}>Stores you love</Text>
                                </View>    
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* End of APresto Products */}

                {/* APresto Rewards */}
                <View style={styles.dualTitleContainer}>
                    <Icon name="gift" size={30} color="#fd4140" />
                    <Text style={styles.dualTitle}> APresto Rewards</Text>
                </View>
                <View style={styles.dual}>
                    <TouchableOpacity onPress={()=>navigation.navigate('clientRewardList')}>
                        <View style={styles.dualContent}>
                            <ImageBackground style={styles.dualBgImage}
                                imageStyle={{ borderRadius: 30}}
                                source={require('../../assets/bannerLightBlue.jpg')}>
                                <View style={styles.darken}> 
                                    <Text style={styles.dualLabel}>My Rewards</Text>
                                    <Text style={styles.dualLabelSmall}>Gems around corners</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('clientRewardAdd')}>
                        <View style={styles.dualContent}>
                            <ImageBackground style={styles.dualBgImage}
                                imageStyle={{ borderRadius: 30}}
                                source={require('../../assets/bannerLightBlue.jpg')}>
                                <View style={styles.darken}>
                                    <Text style={styles.dualLabel}>Add Rewards</Text>
                                    <Text style={styles.dualLabelSmall}>Stores you love</Text>
                                </View>    
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* End of APresto Rewards */}

                {/* My Suki */}
                <View style={styles.dualTitleContainer}>
                    <Icon name="smileo" size={30} color="#fd4140" />
                    <Text style={styles.dualTitle}> My Suki</Text>
                </View>
                <ImageBackground style={styles.sukiBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../assets/bannerViolet.jpg')}>
                    <View style={styles.sukiDarken}>
                        <Text style={styles.sukiLabel}>Sukis are essential for your business growth</Text>
                        <Text style={styles.sukiLabelSmall}>You can know who among your suki loves you most.</Text>
                        <TouchableOpacity style={styles.sukiButton} onPress={() => navigation.navigate('clientSukiList')} >
                            {/* <Icon name="logout" size={20} color="#fff" /> */}
                            <Text style={styles.sukiButtonLabel}>View Suki</Text>
                        </TouchableOpacity>
                    </View>    
                </ImageBackground>
                {/* End of My Suki */}

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 5,
        height: 150,
        width: wp('90%'),
    },
    bannerDarken:{
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.15)',
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
    container:{
        alignSelf: "center",
        // borderWidth: 1,
        // borderColor: "red",
        width: wp('90%')
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0,
        backgroundColor: "#fff"
    },
    dual: {
        alignSelf: "center",  
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
        height: 180,
        width: wp('90%'),
    },
    dualContent: {
        borderRadius: 30,
        height: 180,
        width: wp('44%'),
    },
    dualBgImage: {
        flexDirection: "row",
        borderRadius: 30,
        height: 180,
        width: wp('44%'),
    },
    dualLabel: {
        textAlign: "left",
        marginLeft: 20,
        marginTop: 100,
        color: "#29312e",
        fontSize: 20,
        fontWeight: "bold"
    },
    dualLabelSmall: {
        textAlign: "left",
        marginLeft: 22,
        marginTop: 2,
        color: "#29312e",
        fontSize: 12,
    },
    dualTitle: {
        textAlign: "left",
        marginLeft: 3,
        marginTop: 3,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    dualTitleContainer: {
        flexDirection: "row",
        marginBottom: 5,
        marginLeft: 5
    },
    dualContainer: {
        flexDirection: "row"
    },
    darken:{
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.15)',
        // borderRadius: 30,
    },
    title: {
        textAlign: "center",
        marginBottom: 10,
        // color: "#fd4140",
        fontSize: 24,
        fontWeight: "bold"
    },
    profileBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 5,
        marginTop: 10,
        height: 300,
        width: wp('90%'),
    },
    profileButton: {
        borderColor: "#fff",
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: 100,
        height: 35,
    },
    profileButtonContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent:"space-between",
        width: '70%',
    },
    profileButtonLabel: {
        color: "#fff",
        fontSize: 12
    },
    profileInfo:{
        height: 100,
        width: 100,
        // backgroundColor: "#fd4140",
        borderRadius: 30,
        borderWidth:1,
        borderColor: "#fff",
        backgroundColor: "#29312e",
        marginRight:5,
        marginLeft: 5
    },
    profileInfosContainer: {
        alignSelf: "center",
        borderRadius: 30,
        flexDirection: "row",
        height: 100,
        width: wp('80%'),
        marginTop: 20,
    },
    profileInfoLabel:{
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 20,
        height: 35,
    },
    profileInfoTextLabelBig:{
        alignSelf: 'center',
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: -20
        
    },
    profileInfoTextLabel:{
        color: "#fff",
        fontSize: 14,
        marginLeft: 3
    },
    profileShopName: {
        textAlign: "center",
        marginTop: 35,
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    profileLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    profileDarken:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 30,
    },
    title: {
        textAlign: "center",
        // marginBottom: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: "#fd4140",
        paddingTop: 10,

        backgroundColor: 'white',
        // borderRadius: 20,
        height: 55,
        // paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        // marginBottom: 15
    },
    titleTransact: {
        textAlign: "center",
        marginLeft: 3,
        marginTop: 5,
        fontSize: 16,
        fontWeight: "bold"
    },
    titleTransactContainer: {
        alignSelf: "center",  
        flexDirection: "row",
        marginTop: 10,
        width: wp('90%'),
    },
    scanQRContainer: {
        alignSelf: "center",
        backgroundColor: "#fe1100",
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 15,
        height: 70,
        width: wp('90%'),
    },
    scanQRContainerLabel: {
        textAlign: "center",
        marginTop: 10,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    scanQRContainerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    sukiBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 5,
        height: 180,
        width: wp('90%'),
    },
    sukiDarken:{
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.15)',
        // borderRadius: 30,
    },
    sukiLabel: {
        textAlign: "center",
        marginTop: 35,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    sukiLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    sukiButton: {
        alignSelf: "center",
        borderColor: "#fff",
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 15,
        width: 110,
        height: 35,
    },
    sukiButtonLabel: {
        color: "#fff",
        fontSize: 12
    },
})
export default clientHomepage;
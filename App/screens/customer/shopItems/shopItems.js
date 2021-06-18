import React, { useRef } from 'react';
import { 
    Animated,
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PopularShopItem from './././importShopItems/popularShopItem';
import AllShopItem from './././importShopItems/allShopItem';

function shopItems(props) {
    const navigation = useNavigation();
    const scrollPosition = useRef(new Animated.Value(0)).current;
    const minHeaderHeight = 0
    const maxHeaderHeight = 200

    const headerHeight = scrollPosition.interpolate({
        inputRange: [0, 500],
        outputRange: [maxHeaderHeight, minHeaderHeight],
        extrapolate: 'clamp',
    });
    const opacity = scrollPosition.interpolate({
        inputRange: [0, 100, 300],
        outputRange: [1, 0.5, 0],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon2 name="left" size={30} color="#fd4140" />
                </TouchableOpacity>
                <View style={styles.topNavRight}>
                    <TouchableOpacity onPress={() => "pressed"} >  
                        <Icon2 name="heart" size={25} color="#fd4140" />
                    </TouchableOpacity>    
                    <TouchableOpacity onPress={() => navigation.navigate('shopItemsCart')} > 
                        <Icon2 name="shoppingcart" size={25} color="#fd4140" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            <Animated.View
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    height: headerHeight,
                    backgroundColor: '#fd4140',
                }}>
                <Animated.View
                    style={{
                    textAlign: "center",
                    opacity: opacity,
                    }}>
                    <ImageBackground style={styles.headerBgImage}
                        source={require('../../../assets/DummyShop.jpg')}>
                        <View style={styles.darken}>
                            <Text style={styles.headerLabel}>Shop Name</Text>
                            <Text style={styles.headerLabelSmall}>Address</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => "pressed"} >
                                    <Icon name="map" size={20} color="#fff" />
                                    <Text style={styles.buttonLabel}>Navigate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('rewardItems')} >
                                    <Icon name="gift" size={20} color="#fff" />
                                    <Text style={styles.buttonLabel}>Rewards</Text>
                                </TouchableOpacity>
                            </View>
                        </View>    
                    </ImageBackground>
                </Animated.View>
            </Animated.View>

            <Animated.ScrollView
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                    {useNativeDriver: false},
                )}
                contentInsetAdjustmentBehavior="automatic"
                style={[styles.container]}>

                    <View style={styles.titlePopularContainer}>
                        <Icon3 name="fire" size={40} color="#fd4140" />
                        <Text style={styles.titlePopular}>Popular Items</Text>
                    </View>

                    <ScrollView horizontal={true} style={styles.popularItems}>
                        <PopularShopItem/>
                        <PopularShopItem/>
                        <PopularShopItem/>
                        <PopularShopItem/>
                        <PopularShopItem/>
                        <PopularShopItem/>
                    </ScrollView>

                    <Text style={styles.titleAllItems}>All Items</Text>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>
                        <AllShopItem/>

                    <ImageBackground style={styles.bannerBgImage}
                        imageStyle={{ borderRadius: 30}}
                        source={require('../../../assets/Liked_Shop.jpg')}>
                        <View style={styles.bannerDarken}>
                            <Text style={styles.bannerLabel}>The more you spend the more you enjoy!</Text>
                            <Text style={styles.bannerLabelSmall}>Everytime you spent on products you love gives you rewards point.</Text>
                        </View>    
                    </ImageBackground>
            </Animated.ScrollView>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    headerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 15,
        height: 200,
        width: wp('100%'),
    },
    headerLabel: {
        textAlign: "center",
        marginTop: 45,
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    headerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 50,
        height: 150,
        width: wp('90%'),
    },
    bannerDarken:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 30,
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
    buttonContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent:"space-between",
        width: '60%',
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 12
    },
    container: {
        // backgroundColor: "#fff",
    },
    darken:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0,
    },
    popularItems: {
        alignSelf: "center",
        borderRadius: 30,
        flexDirection: "row",
        height: 180,
        width: wp('90%'),
        marginBottom: 15,
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
    titleAllItems: {
        alignSelf: "center",
        marginLeft: 3,
        marginTop: 8,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold"
    },
    topNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
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

export default shopItems;
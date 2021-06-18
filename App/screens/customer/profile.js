import React, { useRef } from 'react';
import { 
    Animated,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function profile(props) {
    const scrollPosition = useRef(new Animated.Value(0)).current;
    const minHeaderHeight = 0
    const maxHeaderHeight = 300

    

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
                        source={require('../../assets/DummyShop.jpg')}>
                        <View style={styles.darken}>
                            <Image style={styles.headerProfileImage}
                                source={require('../../assets/Store.jpg')}>
                            </Image>
                            <Text style={styles.headerUsername}>Username</Text>
                            <Text style={styles.headerFullname}>Full Name</Text>
                            <View style={styles.headerButtonContainer}>
                                <TouchableOpacity style={styles.headerButton} onPress={() => "pressed"} >
                                    <Icon name="user" size={20} color="#fff" />
                                    <Text style={styles.headerButtonLabel}>Edit Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('rewardItems')} >
                                    <Icon name="logout" size={20} color="#fff" />
                                    <Text style={styles.headerButtonLabel}>Log Out</Text>
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

                    <View style={styles.titleTransactContainer}>
                        <Icon2 name="access-time" size={30} color="#fd4140" />
                        <Text style={styles.titleTransact}>Last Transaction</Text>
                    </View>
                
                    <ImageBackground style={styles.transactBannerBgImage}
                        imageStyle={{ borderRadius: 30}}
                        source={require('../../assets/Liked_Shop.jpg')}>
                        <View style={styles.transactBannerDarken}>
                            <Text style={styles.transactBannerLabel}>You visited the Shop!</Text>
                            <Text style={styles.transactBannerLabelSmall}>Earned 100 reward points.</Text>
                        </View>    
                    </ImageBackground>


                    
                    <ImageBackground style={styles.bannerBgImage}
                        imageStyle={{ borderRadius: 30}}
                        source={require('../../assets/Liked_Shop.jpg')}>
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
    headerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 15,
        height: 300,
        width: wp('100%'),
    },
    headerButton: {
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
    headerButtonContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent:"space-between",
        width: '60%',
    },
    headerButtonLabel: {
        color: "#fff",
        fontSize: 12
    },
    headerProfileImage:{
        alignSelf: "center",
        height: 100,
        width: 100,
        borderRadius: 100,
        marginTop: 50,
        marginBottom: 20
    },
    headerFullname: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    headerUsername: {
        textAlign: "center",
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
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
    transactBannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 15,
        height: 70,
        width: wp('90%'),
    },
    transactBannerDarken:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 30,
    },
    transactBannerLabel: {
        textAlign: "center",
        marginTop: 10,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    transactBannerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    titleAllItems: {
        alignSelf: "center",
        marginLeft: 3,
        marginTop: 8,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold"
    },    
})

export default profile;
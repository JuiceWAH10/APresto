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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CarouselCards from '../../carousel/CarouselCards'
import IndivShop from '././importScreens/indivShop';


function explore(props) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Text style={styles.title}>Explore APresto</Text>
            <ScrollView style={[styles.container, {flex:1}]}>

                <CarouselCards /> 
                
                {/* Dual View */}
                <View style={styles.dual}>
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <View style={styles.dualContent}>
                            <ImageBackground style={styles.dualBgImage}
                                imageStyle={{ borderRadius: 30}}
                                source={require('../../assets/Map.jpg')}>
                                <View style={styles.darken}> 
                                    <Text style={styles.dualLabel}>Near Me</Text>
                                    <Text style={styles.dualLabelSmall}>Gems around corners</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <View style={styles.dualContent}>
                            <ImageBackground style={styles.dualBgImage}
                                imageStyle={{ borderRadius: 30}}
                                source={require('../../assets/Liked_Shop.jpg')}>
                                <View style={styles.darken}>
                                    <Text style={styles.dualLabel}>Liked Shops</Text>
                                    <Text style={styles.dualLabelSmall}>Stores you love</Text>
                                </View>    
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* End of Dual View */}

                {/* Most Reviewed Shop */}
                <View style={styles.titleReviewsContainer}>
                    <Icon name="fire" size={40} color="#fd4140" />
                    <Text style={styles.titleReviews}>Most Reviewed Shops</Text>
                </View>
                {/* Insert Code here for importing Most Reviewed shops with info */}
                <IndivShop name="Keitandkat Perfume" address="504 Gondola, Muzon, Taytay, Rizal"/>
                <IndivShop name="Scrapyard Cafe & Restaurant" address="45 Manila E Rd, Angono, 1930 Rizal"/>
                <IndivShop name="Blugre Coffee Manila East" address="Don Hilario Cruz, Taytay, Rizal"/>
                <IndivShop name="Korean BBQ & Buffet" address="Peace Be With You Bldg Velasquez Street Brgy, Taytay, Rizal"/>
                <IndivShop name="Jamp Sari-Sari Store" address="Jacob St, Taytay, Rizal"/>
                {/* End of most Reviewed */}

            </ScrollView>    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    carousel: {
        alignSelf: "center",
        borderRadius: 30,
        flexDirection: "row",
        height: 150,
        width: wp('90%'),
        marginBottom: 10,
    },
    carouselImages: {
        borderRadius: 30,
        height: 150,
        width: wp('90%')
    },
    carouselLabel: {
        textAlign: "center",
        marginTop: 35,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    carouselLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },     
    container: {
        flexDirection: "column",
        width: wp('100%'),
        backgroundColor: 'white',
        // borderWidth: 1
    },   
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0
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
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    dualLabelSmall: {
        textAlign: "left",
        marginLeft: 22,
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
    },
    darken:{
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
    titleReviews: {
        textAlign: "center",
        marginTop: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    titleReviewsContainer: {
        alignSelf: "center",  
        flexDirection: "row",
        marginBottom: 5,
        marginLeft: 8,
        width: wp('90%'),
    },
    
    
})
export default explore;
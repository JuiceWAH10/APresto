import React from 'react';
import { 
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import IndivShop from '././importScreens/indivShop';

function explore(props) {
    const navigation = useNavigation();
    const [search, setTextS] = React.useState('');

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Text style={styles.title}>Explore APresto</Text>
            <ScrollView style={[styles.container, {flex:1}]}>
                <ScrollView horizontal={true} style={styles.carousel}>
                    <Image style={styles.carouselImages}
                        source={require('../../assets/Store.jpg')}>
                    </Image>
                    <Image style={styles.carouselImages}
                        source={require('../../assets/Store2.jpg')}>
                    </Image>
                </ScrollView>
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
                <View style={styles.titleReviewsContainer}>
                    <Icon name="fire" size={40} color="#fd4140" />
                    <Text style={styles.titleReviews}>Most Reviewed Shops</Text>
                </View>

                <IndivShop name="Keitandkat Perfume" address="504 Gondola, Muzon, Taytay, Rizal"/>
                <IndivShop name="Scrapyard Cafe & Restaurant" address="45 Manila E Rd, Angono, 1930 Rizal"/>
                <IndivShop name="Blugre Coffee Manila East" address="Don Hilario Cruz, Taytay, Rizal"/>
                <IndivShop name="Korean BBQ & Buffet" address="Peace Be With You Bldg Velasquez Street Brgy, Taytay, Rizal"/>
                <IndivShop name="Jamp Sari-Sari Store" address="Jacob St, Taytay, Rizal"/>

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
        marginBottom: 15,
    },
    carouselImages: {
        borderRadius: 30,
        height: 150,
        width: wp('90%')
    },     
    container: {
        flexDirection: "column",
        width: wp('100%'),
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
        marginBottom: 15,
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
        marginBottom: 10,
        fontSize: 24,
        fontWeight: "bold"
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
        marginBottom: 15,
        width: wp('90%'),
    },    
})
export default explore;
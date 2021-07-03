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
import Icon from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

import IndivShop from '././importScreens/indivShop';

function shops(props) {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <Searchbar
                style={styles.searchBar}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ScrollView style={[styles.container, {flex:1}]}>
                <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../assets/bannerDarkBlue.jpg')}>
                    <View style={styles.darken}>
                        <Text style={styles.bannerLabel}>All shops here are certified APrestoed!</Text>
                        <Text style={styles.bannerLabelSmall}>We guarantee you that shops here bring happiness.</Text>
                    </View>    
                </ImageBackground>
                <View style={styles.titleContainer}>
                    <Icon name="shop" size={40} color="#fd4140" />
                    <Text style={styles.title}>APresto Shops</Text>
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
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 10,
        height: 150,
        width: wp('90%'),
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
    darken:{
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.15)',
        // borderRadius: 30,
    },
    container: {
        flexDirection: "column",
        width: wp('100%'),
    },   
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0
    },
    searchBar: {
        alignSelf: "center",
        color: "#fd4140",
        width: wp('90%'),
        borderColor: "#fd4140",
        marginBottom: 8,
        marginTop: 5,   
    },
    title: {
        textAlign: "center",
        marginLeft: 5,
        marginTop: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    titleContainer: {
        alignSelf: "center",  
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 8,
        height: 40,
        width: wp('90%'),
    },
})
export default shops;
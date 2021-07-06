import React from 'react';
import { 
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import IndivShop from '././importScreens/indivShop';

function shops(props) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={styles.searchBarContainer}>
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>

            <ScrollView style={[styles.container, {flex:1}]}>
                {/* Banner */}
                {/* <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../assets/bannerDarkBlue.jpg')}>
                    <View style={styles.darken}>
                        <Text style={styles.bannerLabel}>All shops here are certified APrestoed!</Text>
                        <Text style={styles.bannerLabelSmall}>We guarantee you that shops here bring happiness.</Text>
                    </View>    
                </ImageBackground> */}
                {/* End of Banner */}

                {/* Shop List */}
                {/* <View style={styles.shopListContainer}> */}
                    <View style={styles.shopListTitleContainer}>
                        {/* <Icon name="shop" size={40} color="#fd4140" /> */}
                        <Text style={styles.shopListTitle}>APresto Shops</Text>
                    </View>
                    {/* Insert Code here for importing shops with info */}
                    <IndivShop name="Keitandkat Perfume" address="504 Gondola, Muzon, Taytay, Rizal"/>
                    <IndivShop name="Scrapyard Cafe & Restaurant" address="45 Manila E Rd, Angono, 1930 Rizal"/>
                    <IndivShop name="Blugre Coffee Manila East" address="Don Hilario Cruz, Taytay, Rizal"/>
                    <IndivShop name="Korean BBQ & Buffet" address="Peace Be With You Bldg Velasquez Street Brgy, Taytay, Rizal"/>
                    <IndivShop name="Jamp Sari-Sari Store" address="Jacob St, Taytay, Rizal"/>
                {/* </View> */}
                {/* End of Shop List */}
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 5,
        marginTop: 10,
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
        backgroundColor: "#fff"
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
        
    },
    searchBarContainer: {
        paddingTop: 6,

        backgroundColor: 'white',
        height: 70,
        borderBottomWidth: 4,
        borderColor: "#fd4140",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    shopListContainer:{
        alignSelf: "center",  
        marginTop: 5,
        marginBottom: 5,
        width: wp('100%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
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
    shopListTitle: {
        textAlign: "center",
        marginLeft: 5,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    shopListTitleContainer: {
        alignSelf: "center",  
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 8,
        height: 40,
        width: wp('90%'),
    },
})
export default shops;
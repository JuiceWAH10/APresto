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
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import IndivReward from '././importScreens/indivReward';

function rewards(props) {
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
                    source={require('../../assets/Liked_Shop.jpg')}>
                    <View style={styles.darken}>
                        <Text style={styles.bannerLabel}>Visit Shops now to claim awesome rewards.</Text>
                        <Text style={styles.bannerLabelSmall}>Spending for the products  you love give you rewards!</Text>
                    </View>    
                </ImageBackground>
                <View style={styles.titleRewardsContainer}>
                    <Icon name="star-four-points" size={40} color="#fd4140" />
                    <Text style={styles.titleRewards}>Shops you have Points</Text>
                </View>
                <IndivReward name="Keitandkat Perfume" address="504 Gondola, Muzon, Taytay, Rizal"/>
                <IndivReward name="Scrapyard Cafe & Restaurant" address="45 Manila E Rd, Angono, 1930 Rizal"/>
                <IndivReward name="Blugre Coffee Manila East" address="Don Hilario Cruz, Taytay, Rizal"/>
                <IndivReward name="Korean BBQ & Buffet" address="Peace Be With You Bldg Velasquez Street Brgy, Taytay, Rizal"/>
                <IndivReward name="Jamp Sari-Sari Store" address="Jacob St, Taytay, Rizal"/>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: wp('100%'),
    },   
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0
    },
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 15,
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
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 30,
    },
    searchBar: {
        alignSelf: "center",
        color: "#fd4140",
        width: wp('90%'),
        borderColor: "#fd4140",
        marginBottom: 8,
        marginTop: 5,   
    },
    titleRewards: {
        textAlign: "center",
        marginLeft: 5,
        marginTop: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    titleRewardsContainer: {
        alignSelf: "center",  
        flexDirection: "row",
        marginBottom: 15,
        marginLeft: 8,
        width: wp('90%'),
    },
})
export default rewards;
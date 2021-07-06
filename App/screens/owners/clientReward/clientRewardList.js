import React from 'react';
import { 
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import ClientAllShopRewards from '././importClientReward/clientAllShopRewards';

function clientRewardList(props) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.droidSafeArea}>

            {/* Top Navigation and Search Bar */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon2 style={styles.backButton} name="left" size={30} color="#aacfdd" />
                </TouchableOpacity>   
                <Searchbar
                        style={styles.searchBar}
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                />
            </View>
            {/* End of Top Nav and Search Bar */}

            {/* Header */}
            <View style={styles.headContainer}>
                <TouchableOpacity onPress={() => "pressed"} >
                    <View style={styles.headIndivContainer}>
                        <Text style={styles.headLabelSmall}>Live</Text>
                        <Icon style={styles.headIcons} name="box" size={35} color="#29312e" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => "pressed"} >
                    <View style={styles.headIndivContainer}>
                        <Text style={styles.headLabelSmall}>Sold</Text>
                        <Icon style={styles.headIcons} name="wallet" size={35} color="#29312e" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => "pressed"} >    
                    <View style={styles.headIndivContainer}>
                        <Text style={styles.headLabelSmall}>Delisted</Text>
                        <Icon style={styles.headIcons} name="archive" size={35} color="#29312e" />
                    </View>
                </TouchableOpacity>    
            </View>  
            {/* End of Header */}

            <ScrollView style={styles.container}>

                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>
                <ClientAllShopRewards/>

                {/* Banner */}
                <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../../assets/bannerLightBlue.jpg')}>
                    <View style={styles.darken}>
                        <Text style={styles.bannerLabel}>Visit Shops now to claim awesome rewards.</Text>
                        <Text style={styles.bannerLabelSmall}>Spending for the products  you love give you rewards!</Text>
                    </View>    
                </ImageBackground>
                {/* End of Banner */}
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backButton:{
        marginTop: 14
    },
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10,
        height: 150,
        width: wp('90%'),
    },
    bannerLabel: {
        textAlign: "center",
        marginTop: 35,
        color: "#29312e",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    bannerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#29312e",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    darken:{
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.4)',
        // borderRadius: 30,
    },
    container:{
        flex:1,
        alignSelf: "center",
        // borderWidth: 1,
        // borderColor: "red",
        width: wp('100%'),
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0,
        borderWidth: 1
    },
    headContainer: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#aacfdd",
        borderRadius: 30,
        marginBottom: 8,
        height: 74,
        width: wp('90%'),
        flexDirection: "row",
        paddingLeft: wp('15%'),
        paddingRight: wp('15%'),
    },
    headIndivContainer: {
        width: wp('25%'),
    },
    headLabelSmall: {
        textAlign: "center",
        marginTop: 5,
        color: "#29312e",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    headIcons: {
        textAlign: "center",
        marginTop: 3,
        color: "#fff",
    },
    searchBar: {
        // alignSelf: "center",
        color: "#fd4140",
        width: wp('80%'),
        borderColor: "#fd4140",
        marginBottom: 10,
        marginTop: 5,   
    },
    topNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        // height: 40,
        width: wp('100%'),
        paddingLeft: 10,
        paddingRight: wp('5%'),
        // paddingTop: 5,
    },
})
export default clientRewardList;
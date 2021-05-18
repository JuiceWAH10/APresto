import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CustomerIndivRewards from './CustomerIndivRewards';

function CustomerRewards(props) {
    const [search, setTextS] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Search Shop Rewards"
                        value={search}
                        onChangeText={text => setTextS(text)}
                    />
                    <TouchableOpacity onPress={()=>console.log("Search")}>
                        <View style={styles.SearchButton}>
                        <Text style={{color: '#29312e', fontSize: 14}}>Search</Text>
                        </View></TouchableOpacity>
                </View>               
            </View>

            <View style={styles.HeaderContainer}>
                <Image 
                style={styles.HeaderStyle}
                source={require('../assets/Reward-Header.png')}></Image>

            </View>

            <ScrollView style={styles.ShopContainer}>
                <CustomerIndivRewards name="Keitandkat Perfume" address="504 Gondola, Muzon, Taytay, Rizal"/>
                <CustomerIndivRewards name="Scrapyard Cafe & Restaurant" address="45 Manila E Rd, Angono, 1930 Rizal"/>
                <CustomerIndivRewards name="Blugre Coffee Manila East" address="Don Hilario Cruz, Taytay, Rizal"/>
                <CustomerIndivRewards name="Korean BBQ & Buffet" address="Peace Be With You Bldg Velasquez Street Brgy, Rizal"/>
                <CustomerIndivRewards name="Jamp Sari-Sari Store" address="Jacob St, Taytay, Rizal"/>
                <CustomerIndivRewards name="Purified Water Refilling Station" address="223-C/869B, Sandoval Ave, Pasig"/>
                <CustomerIndivRewards name="Mongis Bicycle Shop" address="8511, Unit D Sandoval Ave, Pasig, 1602 Metro Manila"/>
                <CustomerIndivRewards name="The Cloudroom Vape Shop" address="18 Alcalde Jose, Pasig, 1600 Metro Manila"/>
                <CustomerIndivRewards name="Kanto Freestyle Kapasigan" address="27 Alcalde Jose, Pasig, Metro Manila"/>
                <CustomerIndivRewards name="Palatiw Hardware - Malinao" address="Prima 1 & 2 Bldg, F. Manalo, Pasig, 1600 Metro Manila"/>
            </ScrollView>

            <View style={styles.NearLike}>
                <TouchableOpacity onPress={()=>console.log("Pressed")}>
                    <Image style={styles.PictureStyle}
                        fadeDuration={1000}
                        source={require('../assets/Near-Me.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log("Pressed")}>
                    <Image style={styles.PictureStyle}
                        fadeDuration={1000}
                        source={require('../assets/Liked-Shops.png')}></Image>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'flex-end',
    },
    BG: {
      flex: 0.9,
      justifyContent: 'flex-start',
    },
    Elements:{
        //borderWidth: 1,
        borderBottomWidth: 1.5,
        borderColor: "#8c8c8c",
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        top: 10
    },
    Footer: {
        width: '80%',
        //height: 50,
        top: 160,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    FooterIcons:{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-around'
        //alignSelf: 'center'       
    },
    HeaderContainer:{   
        width: wp('100%'),
        height: hp('10%'),
        alignContent: 'center',
        position: 'absolute',
        top: hp('15%')
    },
    HeaderStyle:{
        width: wp('100%'),
        height: hp('10%'),
    },
    Nav:{
        height: 50,
        width: 50,
    },    
    NearLike: {
        flexDirection: 'row',
        justifyContent: 'space-around',
       //padding: 2,
        width: wp('100%'),
        height: hp('10%'),
        //top: hp('90%')       
    },
    PictureStyle:{
        width: wp('50%'),
        height: hp('10%'),

    },
    SearchButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 30,
        //alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        top: 20
    },
    ShopContainer: {
        width: wp('100%'),
        height: hp('60%'),
      backgroundColor: '#fff',
      //borderRadius: 30,
      //borderColor: '#fd4140',
      //borderWidth: 2,
      //alignItems: 'center',
      alignSelf: 'center',
      //justifyContent: 'center',
      position: "absolute",
      top: hp('25%'),
    },
    Store:{
      height: 60,
      width: 60

    },
    textStyle: {
      width: '75%',
      height: 35,
      borderColor: '#1c2b59',
      top: 20
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 2,
        width: '100%',
        top: 20,
    },
    toCenter: {
      flexDirection: 'column',
      alignSelf: 'center',

    },
    topContainer:{
        position: "absolute",
        top: 0,
        //width: '100%',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#fd4140',
        //height: 150,
        width: wp('100%'),
        height: hp('15%'),
    },
  });

export default CustomerRewards;
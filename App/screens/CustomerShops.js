import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

import CustomerIndivShops from './CustomerIndivShops.js';

function CustomerShops(props) {
    const [search, setTextS] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
           
            <View style={styles.topContainer}>
                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Search Shops"
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
                source={require('../assets/Shop-Header.png')}></Image>

            </View>
            <ScrollView style={styles.ShopContainer}>
                <CustomerIndivShops name="Keitandkat Perfume" address="504 Gondola, Muzon, Taytay, Rizal"/>
                <CustomerIndivShops name="Scrapyard Cafe & Restaurant" address="45 Manila E Rd, Angono, 1930 Rizal"/>
                <CustomerIndivShops name="Blugre Coffee Manila East" address="Don Hilario Cruz, Taytay, Rizal"/>
                <CustomerIndivShops name="Korean BBQ & Buffet" address="Peace Be With You Bldg Velasquez Street Brgy, Taytay, Rizal"/>
                <CustomerIndivShops name="Jamp Sari-Sari Store" address="Jacob St, Taytay, Rizal"/>
                <CustomerIndivShops name="Purified Water Refilling Station" address="223-C/869B, Sandoval Ave, Pasig"/>
                <CustomerIndivShops name="Mongis Bicycle Shop" address="8511, Unit D Sandoval Ave, Pasig, 1602 Metro Manila"/>
                <CustomerIndivShops name="The Cloudroom Vape Shop" address="18 Alcalde Jose, Pasig, 1600 Metro Manila"/>
                <CustomerIndivShops name="Kanto Freestyle Kapasigan" address="27 Alcalde Jose, Pasig, Metro Manila"/>
                <CustomerIndivShops name="Palatiw Hardware - Malinao" address="Prima 1 & 2 Bldg, F. Manalo, Pasig, 1600 Metro Manila"/>
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
        width: '100%',
        alignContent: 'center',
        position: 'absolute',
        top: 100
    },
    HeaderStyle:{
        height: 100,
        width: '100%'
    },
    Nav:{
        height: 50,
        width: 50,
    },    
    NearLike: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 2,
        width: '100%',       
    },
    PictureStyle:{
        height: 80,
        width: 170

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
      width: '100%',
      height: 440,
      backgroundColor: '#fff',
      //borderRadius: 30,
      borderColor: '#fd4140',
      borderWidth: 2,
      //alignItems: 'center',
      alignSelf: 'center',
      //justifyContent: 'center',
      position: "absolute",
      top: 200,
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
        width: '100%',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#fd4140',
        height: 150,
    },
  });

export default CustomerShops;
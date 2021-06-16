import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MyIndivSuki from './MyIndivSuki.js';

function MySuki(props) {
    const [search, setTextS] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.HeaderContainer}>
                <Image style={styles.Header} source={require('../assets/Header.png')}></Image> 
                <View style={styles.LogoContainer}>
                <Image style={styles.Logo}
                    source={require('../assets/Client-Profile.png')}></Image>
                    <Text style={{color: '#fff', fontSize: 26,}}>00 Likes</Text>
                    <View style={styles.ElementsTop}>     
                        <Text style={{color: '#fff', fontSize: 12,}}>Store Name</Text>
                    </View> 
            </View>
            </ImageBackground>
            <View style={styles.Back}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>
              
            <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Search Suki"
                        value={search}
                        onChangeText={text => setTextS(text)}
                    />
                    <TouchableOpacity onPress={()=>console.log("Search")}>
                        <View style={styles.SearchButton}>
                        <Text style={{color: '#fff', fontSize: 14}}>Search</Text>
                        </View></TouchableOpacity>
            </View> 

            <ScrollView style={styles.ShopContainer}>
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
                <MyIndivSuki />
            </ScrollView>
            
            <View style={styles.FooterContainer}>
                <Image 
                style={styles.HeaderStyle}
                source={require('../assets/Suki-Header.png')}></Image>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'flex-start',
    },
    AddToCart: {
      width: '100%',
      height: 50,
      backgroundColor: '#fd4140',
      borderRadius: 30,
      bottom: 10,
      //alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20

    },
    Back: {
        position: "absolute",
        top: 30,
        padding: 10
    },
    BackLogo: {
        height: 30,
        width: 30,
    },
    BG: {
      flex: 0.9,
      justifyContent: 'flex-start',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'

    },
    ElementsTop:{
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    FooterContainer:{   
        width: wp('100%'),
        height: hp('10%'),
        //alignContent: 'center',
        //position: 'absolute',
        top: hp('85%')
    },
    Header:{
        width: wp('100%'),
        height: hp('20%'),
    },
    HeaderContainer:{   
        position: "absolute",
        width: wp('100%'),
        height: hp('20%'),
        top: 0
        //alignContent: 'center',
    },
    HeaderStyle:{
        width: wp('100%'),
        height: hp('10%'),
    },
    Logo:{
        height: 60,
        width: 60,
    },
    LogoTiny:{
        height: 20,
        width: 20,
    },
    LogoContainer:{
        position: "absolute",
        width: wp('100%'),
        height: hp('15%'),
        top: hp('4%'),
        alignItems: "center",
        alignSelf: "center",
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
        height: hp('5%'),
        backgroundColor: '#fd4140',
        borderRadius: 30,
        //alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        top: hp('0.5%')
    },
    ShopContainer: {
        width: wp('100%'),
        height: hp('65%'),
        backgroundColor: '#fff',
        //borderRadius: 30,
        borderColor: '#fd4140',
        borderWidth: 2,
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
        height: hp('5%'),
        borderColor: '#1c2b59',
        
      },
      textView: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          //padding: 2,
          width: wp('100%'),
          height: hp('6%'),
          top: hp('20%'),
          //borderColor: '#fd4140',
          //borderWidth: 2,
         
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

export default MySuki;
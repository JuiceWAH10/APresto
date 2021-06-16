import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CustomerIndivShopItems from './CustomerIndivShopItems';

function CustomerShopItem(props) {
    const route = useRoute();
    const navigation = useNavigation();
    const [search, setTextS] = React.useState('');
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.HeaderContainer}>
                
                <Image style={styles.Header} source={require('../assets/Header.png')}></Image>
                <View style={styles.LogoContainer}>
                <Image style={styles.Logo}
                    source={require('../assets/Shop-Icon-Red.png')}></Image>
                    <Text style={{color: '#fff', fontSize: 22,}}>{JSON.stringify(route.params.name).replace(/['"]+/g, '')}</Text>
                    <View style={styles.ElementsTop}>
                        <TouchableOpacity onPress={()=>console.log("Address")}>
                            <Image style={styles.LogoTiny}
                                source={require('../assets/Map.png')}></Image>
                        </TouchableOpacity>        
                        <Text style={{color: '#fff', fontSize: 10,}}>{JSON.stringify(route.params.address).replace(/['"]+/g, '')}</Text>
                    </View> 
            </View>
            </ImageBackground>
            <View style={styles.Back}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>  
            <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Search Products"
                        value={search}
                        onChangeText={text => setTextS(text)}
                    />
                    <TouchableOpacity onPress={()=>console.log("Search")}>
                        <View style={styles.SearchButton}>
                        <Text style={{color: '#fff', fontSize: 14}}>Search</Text>
                        </View>
                    </TouchableOpacity>
            </View> 

            <ScrollView style={styles.ShopContainer}>
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
                <CustomerIndivShopItems />
            </ScrollView>

            <View style={styles.buttons}>
                <TouchableOpacity >
                    <View style={styles.AddToCart}>
                        <Text style={{color: '#fff', fontSize: 16}}>Add to Cart</Text>
                    </View>
                </TouchableOpacity> 
                
                <TouchableOpacity onPress={()=> navigation.navigate('CustomerCart')}>
                    <View style={styles.AddToCart}>
                        <Text style={{color: '#fff', fontSize: 16}}>My Cart</Text>
                    </View>
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
      justifyContent: 'flex-start',
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
    AddToCart: {
      width: '100%',
      height: hp('5%'),
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
        width: wp('100%'),
        height: hp('5%'),
        top: hp('90%'),
        //borderColor: '#fd4140',
        //borderWidth: 2,
        

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
        height: 100,
        width: '100%',
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
        height: hp('68%'),
      backgroundColor: '#fff',
      //borderRadius: 30,
      //borderColor: '#fd4140',
      //borderWidth: 2,
      //alignItems: 'center',
      alignSelf: 'center',
      //justifyContent: 'center',
      position: "absolute",
      top: hp('26%')
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

export default CustomerShopItem;
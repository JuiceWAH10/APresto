import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QRCode from "react-qr-code";
import { useNavigation } from '@react-navigation/native';

function CustomerProdQRCode(props) {
    const navigation = useNavigation();
    return (
        <ImageBackground
        style={styles.BGImage}
        source={require('../assets/Store-Blur.png')}>
            <View style={styles.Back}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>
            <View style={styles.QRContainer}>
                <View style={styles.QRElements}>
                    <Text style={{color: '#29312e', fontSize: 24,}}>Store Name</Text>
                    <QRCode value="Under Development ^_^v"/>  
                    <Text style={{color: '#29312e', fontSize: 16,}}>Total Amount</Text>
                    <Text style={{color: '#fd4140', fontSize: 34,}}>Php 00.00</Text>
                </View>  
                    
            </View>
            <View style={styles.LogoContainer}>
                <Image style={styles.Logo}
                    source={require('../assets/Cart-Icon-Red.png')}></Image>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    BGImage: {
        flex: 1,   
      },
    Back: {
        position: "absolute",
        top: 30,
        padding: 20
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
    GenerateQR: {
      width: '90%',
      height: 50,
      backgroundColor: '#fd4140',
      borderRadius: 30,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 50,
      paddingRight: 50,
      top: 10
    },
    Logo:{
        height: 80,
        width: 80,
    },
    LogoQR:{
        height: 240,
        width: 240,
    },
    LogoContainer:{
        position: "absolute",
        top: 140,
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
    toCenter: {
      flexDirection: 'column',
      alignSelf: 'center',

    },
    QRContainer: {
        width: '90%',
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 30,
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        top: 180
    },
    QRElements: {
        top: 35,
        alignItems: 'center',
        alignSelf: 'center',
    },
  });
export default CustomerProdQRCode;
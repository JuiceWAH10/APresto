import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDimensions }  from '@react-native-community/hooks';
import { TextInput } from 'react-native-paper';

function AboutUs(props) {
    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}> 
                    <Image style={styles.HeaderContainer} source={require('../assets/Header.png')}>   
                    </Image>           
                </View>
    
                <View style={styles.ProfileContainer}>
    
                    
    
                </View>
                <View style={styles.ProfilePicContainer}>
                    <Image style={styles.ProfileStyle}
                        source={require('../assets/Logo-Circle.png')}></Image>
                        <Text style={{color: '#29312e', fontSize: 28,}}>About Us</Text>
                </View>
    
                
                <View style={styles.FooterIcons}>
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <Image style={styles.Nav}
                            fadeDuration={1000}
                            source={require('../assets/Shop-B-L.png')}></Image>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <Image style={styles.Nav}
                            fadeDuration={1000}
                            source={require('../assets/Rewards-B-L.png')}></Image>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <Image style={styles.Nav}
                            fadeDuration={1000}
                            source={require('../assets/User-B-L.png')}></Image>
                    </TouchableOpacity>
    
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <Image style={styles.Nav}
                            fadeDuration={1000}
                            source={require('../assets/About-B-L.png')}></Image>
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
    ButtonsCon: {
        top: 80,
        height: 110,
        justifyContent: 'space-between'
    },
    PButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#fd4140',
        borderRadius: 30,
        //top: 80,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        top: 0
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
    ProfileContainer: {
        width: '100%',
        height: 440,
        backgroundColor: '#fff',
        //borderRadius: 30,
        //borderColor: '#fd4140',
        //borderWidth: 2,
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        position: "absolute",
        top: 210,
    },
    ProfilePicContainer:{
        position: "absolute",
        top: 80,
        alignItems: "center",
        alignSelf: "center",
    },
    ProfileStyle: {
        height: 140,
        width: 140
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
        padding: 5,
        width: '100%',
        top: 40,
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
        height: 160,
    },
  });
export default AboutUs;
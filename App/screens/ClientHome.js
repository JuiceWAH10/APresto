import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ClientHome(props) {

    const showAlert = () =>{
        Alert.alert("Under development ^_^")
     }

    return (
        <ImageBackground
          style={styles.BGImage}
          source={require('../assets/Store-Blur.png')}>

              <View style={styles.HomeContainer}>
                    <View style={styles.shopInfo}>
                        <Image 
                        style={styles.Logo}
                        source={require("../assets/Client-Profile.png")}/>
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 25,}}>STORE NAME</Text>
                            <View style={styles.LikesElement}>
                                <Image style={styles.LogoTiny} source={require('../assets/Like-B.png')}></Image>
                                <View style={styles.toCenter}>
                                    <Text style={{color:'#1c2b59',fontSize: 10,}}>Likes:</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.topBorder1}></View>

                    <TouchableOpacity style={styles.wrapValues} onPress={() => props.navigation.navigate('myProducts')}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Products-B.png")}/>  
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 18,}}>My Products</Text>
                        </View>   
                        <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wrapValues} onPress={() => props.navigation.navigate('clientAddProduct')}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Add-B.png")}/>  
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 18,}}>Add Products</Text>
                        </View>   
                        <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                    </TouchableOpacity>

                    <View style={styles.topBorder}></View>

                    <TouchableOpacity style={styles.wrapValues} onPress={() => props.navigation.navigate('myRewards')}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Rewards-B.png")}/>  
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 18,}}>Rewards</Text>
                        </View>   
                        <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wrapValues} onPress={() => props.navigation.navigate('clientAddReward')}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Add-B.png")}/>  
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 18,}}>Add Rewards</Text>
                        </View>   
                        <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                    </TouchableOpacity>

                    <View style={styles.topBorder}></View>

                    <TouchableOpacity style={styles.wrapValues} onPress={() => props.navigation.navigate('mySuki')}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Suki-B.png")}/>  
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 18,}}>My Suki</Text>
                        </View>   
                        <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                    </TouchableOpacity>

                    <View style={styles.topBorder}></View>

                    <TouchableOpacity style={styles.wrapValues} onPress={showAlert}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/QR-B.png")}/>  
                        <View style={styles.toCenter}>
                            <Text style={{color:'#1c2b59',fontSize: 18,}}>Scan QR Code</Text>
                        </View>   
                        <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                    </TouchableOpacity>
              </View>
 
        </ImageBackground>       
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'flex-start',
    },
    BGImage: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    Footer: {
        width: '80%',
        //height: 50,
        top: 315,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Header:{
        flex: 0.2,
    },
    LikesElement: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    LogInButton: {
      width: '80%',
      height: 50,
      backgroundColor: '#fd4140',
      borderRadius: 30,
      top: 320,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Logo:{
      height: 80,
      width: 80,
    },
    LogoSmall:{
        height: 50,
        width: 50
    },
    LogoTiny:{
        height: 20,
        width: 20,
    },
    LogoContainer:{
        position: "absolute",
        top: 110,
        alignItems: "center",
        alignSelf: "center",
    },
    HeaderContainer:{   
      position: "absolute",
      width: '100%',
      top: 0
      //alignContent: 'center',
    },
    HomeContainer:{
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        //justifyContent: 'space-around',      
        width: '90%',
        height: 640, 
        top: 80,

    },
    SignUpButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#fd4140',
        borderRadius: 30,
        top: 300,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SignUpContainer: {
      width: '80%',
      height: 360,
      backgroundColor: '#fff',
      borderRadius: 30,
      borderColor: '#fd4140',
      borderWidth: 2,
      //alignItems: 'center',
      alignSelf: 'center',
      //justifyContent: 'center',
      top: 280,
    },
    SignUpTop: {
      backgroundColor: '#fd4140',
      width: '100%',
      height: 60,
      alignSelf: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    shopInfo: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 20,
        bottom: 20,
        width: '75%'
    },
    textStyle: {
      width: '80%',
      height: 40,
      borderColor: '#1c2b59',
      top: 20
    },
    textView: {
        padding: 6,
        width: '100%',
        alignItems: 'center'
    },
    toCenter: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    topBorder:{
        borderColor: '#fd4140',
        borderTopWidth: 2,
        width: '85%',
        top: 60,
        
    },  
    topBorder1:{
        borderColor: '#fd4140',
        borderTopWidth: 2,
        top: 40,
        bottom: 40,
        width: '85%'
    },
    wrapValues:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 60,
        bottom: 20,
        width: '80%'
    }
  });

export default ClientHome;
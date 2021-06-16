import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function SplashScreen(props) {
    return (
          <ImageBackground
            style={styles.BGImage}
            source={require('../assets/Store-Blur.png')}>
              
            <View style={styles.LogoContainer}>
              <Image style={styles.Logo}
                source={require('../assets/Logo-AP-name.png')}></Image>
                <Text style={{color: '#fff', fontSize: 12}}>Loyalty and Rewards on your Hands</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
              <View style={styles.SignUpButton}>
                <Text style={{color: '#29312e', fontSize: 16}}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
              <View style={styles.LogInButton}>
                <Text style={{color: '#fff', fontSize: 16}}>Log In</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
            
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    BGImage: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    LogInButton: {
      width: '90%',
      height: 50,
      backgroundColor: '#fd4140',
      borderRadius: 30,
      bottom: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Logo:{
      height: 220,
      width: 220,
    },
    LogoContainer:{
      position: "absolute",
      top: 70,
      alignItems: "center",
      alignSelf: "center"
    },
    SignUpButton: {
      width: '90%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 30,
      bottom: 20,
      alignSelf: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default SplashScreen;
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function SplashScreen(props) {
    return (
        <ImageBackground
            style={styles.BGImage}
            source={require('../assets/Store-Blur.png')}>
          <SafeAreaView style={styles.droidSafeArea}>
            <TouchableOpacity onPress={() => props.navigation.navigate('signupCustomer')}>
              <View style={styles.SignUpButton}>
                <Text style={{color: '#29312e', fontSize: 16}}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
              <View style={styles.LogInButton}>
                <Text style={{color: '#fff', fontSize: 16}}>Log In</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.LogoContainer}>
              <Image style={styles.Logo}
                source={require('../assets/Logo-AP-name.png')}></Image>
                <Text style={{color: '#fff', fontSize: 12}}>Loyalty and Rewards on your Hands</Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
            
    );
}

const styles = StyleSheet.create({
    BGImage: {
      flex: 1,
      justifyContent: 'flex-end',   
    },
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 32 : 0,
      flexDirection: "column-reverse"
    },
    Logo:{
      width: wp('25%'),
      height: hp('25%'),
      borderWidth: 1
    },
    LogoContainer:{
      width: wp('100%'),
      height: hp('30%'),
      marginBottom: hp('35%'),
      alignItems: "center",
      alignSelf: "center",
    },
    LogInButton: {
      width: wp('90%'),
      height: hp('6%'),
      backgroundColor: '#fd4140',
      borderRadius: 30,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 4
    },
    SignUpButton: {
      width: wp('90%'),
      height: hp('6%'),
      backgroundColor: '#fff',
      borderRadius: 30,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 4,
      marginBottom: 10
    }
  });

export default SplashScreen;
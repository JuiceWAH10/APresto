import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDimensions }  from '@react-native-community/hooks';
import { TextInput } from 'react-native-paper';


function LogIn(props) {
    const [userName, setTextUN] = React.useState('');
    const [passWord, setTextPW] = React.useState('');
    return (
        <ImageBackground
          style={styles.BGImage}
          source={require('../assets/Store-Blur.png')}>
            <View style={styles.LogoContainer}>
              <Image style={styles.Logo}
                source={require('../assets/Logo-AP-name.png')}></Image>
                <Text style={{color: '#fff', fontSize: 12}}>Loyalty and Rewards on your Hands</Text>
            </View>
            <View style={styles.Back}>
                <TouchableOpacity onPress={()=>console.log("Pressed Back")}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>
              <View style={styles.LogInContainer}>
                <Text style={{color: '#fd4140', fontSize: 13, top: 30}}>Log In now to see your account</Text>
                <TextInput
                    style={styles.textUserName}
                    placeholder="UserName"
                    value={userName}
                    onChangeText={text => setTextUN(text)}
                />
                <TextInput
                    style={styles.textPassword}
                    secureTextEntry={true}
                    placeholder="Password"
                    value={passWord}
                    onChangeText={text => setTextPW(text)}
                />
              </View>
            <TouchableOpacity onPress={() => props.navigation.push('clientHome')}>
                <View style={styles.LogInButton}>
                    <Text style={{color: '#fff', fontSize: 16}}>Log In</Text>
                </View></TouchableOpacity>
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
    Back: {
      position: "absolute",
      top: 30,
      padding: 10
  },
  BackLogo: {
      height: 30,
      width: 30,
  },
    BGImage: {
      flex: 1,
      justifyContent: 'flex-start',
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
      height: 150,
      width: 150,
    },
    LogoContainer:{
      position: "absolute",
      top: 70,
      alignItems: "center",
      alignSelf: "center",
    },
    LogInContainer: {
      width: '80%',
      height: 260,
      backgroundColor: '#fff',
      borderRadius: 30,
      alignItems: 'center',
      alignSelf: 'center',
      //justifyContent: 'center',
      top: 300,
    },
    textUserName: {
      width: '80%',
      height: 50,
      borderColor: '#1c2b59',
      top: 60
    },
    textPassword: {
        width: '80%',
        height: 50,
        borderColor: '#1c2b59',
        top: 80
      },
  });


export default LogIn;
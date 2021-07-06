import React, { useState } from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import validator from "validator";

const validateFields = (email, password) => {
  const isValid = {
      email: validator.isEmail(email),
      password: validator.isStrongPassword(password, {minLength: 8, minNumbers: 1})
  }
  return isValid;
}

const login = (email, password) => {};

function LogIn(props) {
    //const [userName] = React.useState('');
    //const [passWord, setTextPW] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState({check: false});

    //Email variables
    const [emailField, setEmailField] = useState({
      text: "", 
      errorMessage: "",
    });

    //Password variables
    const [passwordField, setPasswordField] = useState({
      text: "", 
      errorMessage: "",
    });

    function handleCheck(){
      setToggleCheckBox({check: !toggleCheckBox.check});
    }
    
    function checkboxLogin(){
      if(toggleCheckBox.check == true)
        props.navigation.navigate('clientHomepage');
      else
        props.navigation.navigate('customerShops');
    } 

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
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>
              <View style={styles.LogInContainer}>
                <Text style={{color: '#fd4140', fontSize: 13, top: 30}}>Log In now to see your account</Text>
                <TextInput
                    //Email input
                    style={styles.textEmail}
                    placeholder="Email"
                    text={emailField.text}
                    onChangeText={(text) => {setEmailField({text});}}
                    errorMessage={emailField.errorMessage}
                    autoCompleteType="email"
                />
                <TextInput
                    //Password input
                    style={styles.textPassword}
                    secureTextEntry={true}
                    placeholder="Password"
                    text={passwordField.text}
                    onChangeText={(text) => {setPasswordField({text});}}
                    errorMessage={passwordField.errorMessage}
                    autoCompleteType="password"
                />
                <View style={styles.checkbox}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox.check}
                    onChange={()=>handleCheck()}
                    checked={setToggleCheckBox}
                  />
                  <Text> Log in as store owner. </Text>
                </View>
              </View>
              
                <TouchableOpacity style={styles.LogInButton} onPress={() => {
                  const isValid = validateFields(emailField.text, passwordField.text);

                  let isAllValid = true;
                  if(!isValid.email){
                    emailField.errorMessage = "Please enter a valid email";
                    setEmailField({...emailField})
                    isAllValid = false;
                  }

                  if(!isValid.password){
                    passwordField.errorMessage = "Password must be at least 8 long characters with numbers";
                    setPasswordField({...passwordField})
                    isAllValid = false;
                  }

                  if(isAllValid){
                    login(emailField.text, passwordField.text);
                  }

                }}>
                    <Text style={{color: '#fff', fontSize: 16}}>Log In</Text>
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
    width: wp('80%'),
    height: hp('6%'),
    backgroundColor: '#fd4140',
    borderRadius: 30,
    top:  hp('45%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Logo:{
    width: wp('20%'),
    height: hp('20%'),
  },
  LogoContainer:{
    position: "absolute",
    width: wp('100%'),
    height: hp('25%'),
    top: hp('15%'),
    alignItems: "center",
    alignSelf: "center"
  },
  LogInContainer: {
    width: wp('80%'),
    height: hp('40%'),
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    //justifyContent: 'center',
    top: hp('40%'),
  },
  textEmail: {
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

  checkbox: {
    flex: 1,
    flexDirection: 'row',
    height: 36,
    width: '80%',
    borderColor: '#1c2b59',
    top: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default LogIn;
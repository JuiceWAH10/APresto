import React, { useState } from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


function LogIn(props) {
    const [userName, setTextUN] = React.useState('');
    const [passWord, setTextPW] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState({check: false});
    const navigation = useNavigation();

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
        <SafeAreaView style={styles.droidSafeArea}>
        
            {/* Top Navigation */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon2 name="left" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            {/* End of Top Navigation */}

            <View style={styles.LogoContainer}>
              <Image style={styles.Logo}
                source={require('../assets/Logo-AP-name.png')}></Image>
                <Text style={{color: '#fff', fontSize: 12}}>Loyalty and Rewards on your Hands</Text>
            </View>
            {/* <View style={styles.title}>
              <Text style={{color: '#fe1100', fontSize: 45}}>APresto</Text>
              <Text style={{color: '#fe1100', fontSize: 12}}>Loyalty and Rewards on your Hands</Text>
              <Text style={{color: '#fe1100', fontSize: 12}}>Loyalty and Rewards on your Hands</Text>
            </View>   */}
              <View style={styles.LogInContainer}>
                <Text style={{color: '#fd4140', fontSize: 13, marginVertical: 15}}>Log In now to see your account</Text>
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
              
                <TouchableOpacity onPress={checkboxLogin} style={styles.LogInButton}>
                    <Text style={{color: '#fff', fontSize: 16}}>Log In</Text>
                </TouchableOpacity>
        </SafeAreaView> 
      </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 32 : 0
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    width: wp('100%'),
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  title:{
    alignItems: "center",
    marginVertical: hp('5%')
  },
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
    // top:  hp('45%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  Logo:{
    width: wp('20%'),
    height: hp('20%'),
  },
  LogoContainer:{
    // position: "absolute",
    width: wp('100%'),
    height: hp('25%'),
    // paddingTop: hp('15%'),
    alignItems: "center",
    alignSelf: "center",

  },
  LogInContainer: {
    width: wp('80%'),
    height: hp('40%'),
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    //justifyContent: 'center',
    // top: hp('40%'),
  },
  textUserName: {
    width: '80%',
    height: 50,
    borderColor: '#1c2b59',
    marginVertical: 10
    // top: 60
  },
  textPassword: {
    width: '80%',
    height: 50,
    borderColor: '#1c2b59',
    marginVertical: 10
    // top: 80
  },

  checkbox: {
    flex: 1,
    flexDirection: 'row',
    height: 36,
    width: '80%',
    borderColor: '#1c2b59',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default LogIn;
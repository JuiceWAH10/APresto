import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function SignUp(props) {
    const [firstName, setTextFN] = React.useState('');
    const [lastName, setTextLN] = React.useState('');
    const [address, setTextA] = React.useState('');
    const [contactNo, setTextCN] = React.useState('');
    const [userName, setTextUN] = React.useState('');
    const [email, setTextE] = React.useState('');
    const [passWord, setTextPW] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.HeaderContainer} source={require('../assets/Header.png')}>   
            </Image>    
            <View style={styles.LogoContainer}>
                <Image style={styles.Logo}
                    source={require('../assets/Logo-Circle.png')}></Image>
                    <Text style={{color: '#29312e', fontSize: 26,}}>Welcome to A Presto</Text>
                    <Text style={{color: '#29312e', fontSize: 11,}}>Find stores with just one tap</Text>
            </View>

            <View style={styles.Back}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>  

            <View style={styles.SignUpContainer}>
                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={text => setTextFN(text)}
                    />
                </View>

                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={text => setTextLN(text)}
                    />
                </View>

                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Contact Number"
                        value={contactNo}
                        onChangeText={text => setTextCN(text)}
                    />
                </View>

                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Address"
                        value={address}
                        onChangeText={text => setTextA(text)}
                    />
                </View>

                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setTextE(text)}
                    />
                </View>

                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="User Name"
                        value={userName}
                        onChangeText={text => setTextUN(text)}
                    />
                </View>

                <View style={styles.textView}>
                    <TextInput
                        style={styles.textStyle}
                        placeholder="Password"
                        value={passWord}
                        onChangeText={text => setTextPW(text)}
                    />
                </View>

            </View>
            <TouchableOpacity style={styles.SignUpButton} onPress={() => props.navigation.navigate('login')} >
              <Text style={{color: '#fff', fontSize: 16}}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.Footer}>
              <Text style={{color: '#29312e', fontSize: 8,}}>By continuing, you agree to A Presto's Terms of Service,</Text>
              <Text style={{color: '#29312e', fontSize: 8,}}> Privacy policy.</Text>
              <Text style={{color: '#29312e', fontSize: 8,}}>Already a Member? Log In.</Text>
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
    Footer: {
        width: wp('80%'),
        height: hp('17%'),
        top: hp('32%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Header:{
        flex: 0.2,
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
    LogoContainer:{
        position: "absolute",
        top: hp('15%'),
        height: hp('20%'),
        width: wp('100%'),
        alignItems: "center",
        alignSelf: "center",
    },
    HeaderContainer:{   
      position: "absolute",
      width: wp('100%'),
      height: hp('20%'),
      top: 0
      //alignContent: 'center',
  },
    SignUpButton: {
        width: '80%',
        height: hp('6%'),
        backgroundColor: '#fd4140',
        borderRadius: 30,
        top: hp('37%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SignUpContainer: {
        width: wp('80%'),
        height: hp('49%'),
      backgroundColor: '#fff',
      borderRadius: 30,
      borderColor: '#fd4140',
      borderWidth: 2,
      //alignItems: 'center',
      alignSelf: 'center',
      //justifyContent: 'center',
      top: hp('35%'),
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
    textStyle: {
      width: '80%',
      height: hp('5%'),
      borderColor: '#1c2b59',
      top: hp('2%')
    },
    textView: {
        paddingTop: hp('1%'),
        width: '100%',
        alignItems: 'center'
      },
  });


export default SignUp;
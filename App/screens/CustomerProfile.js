import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CustomerProfile(props) {
    const [firstName, setTextFN] = React.useState('');
    const [lastName, setTextLN] = React.useState('');
    const [address, setTextA] = React.useState('');
    const [contactNo, setTextCN] = React.useState('');
    const [userName, setTextUN] = React.useState('');
    const [email, setTextE] = React.useState('');
    const [passWord, setTextPW] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}> 
                <Image style={styles.HeaderContainer} source={require('../assets/Header.png')}>   
                </Image>           
            </View>

            <View style={styles.ProfileContainer}>
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
                        placeholder="Password"
                        value={passWord}
                        onChangeText={text => setTextPW(text)}
                    />
                </View>

                <View style={styles.ButtonsCon}>
                    <TouchableOpacity style={styles.PButton} onPress={() => props.navigation.popToTop()}>
                        <Text style={{color: '#fff', fontSize: 16}}>Edit Profile</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.PButton} onPress={() => props.navigation.popToTop()}>
                        <Text style={{color: '#fff', fontSize: 16}}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
            <View style={styles.ProfilePicContainer}>
                <Image style={styles.ProfileStyle}
                    source={require('../assets/Customer-Profile.png')}></Image>
                    <Text style={{color: '#29312e', fontSize: 26,}}>User Name</Text>
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
    BG: {
      flex: 0.9,
      justifyContent: 'flex-start',
    },
    ButtonsCon: {
        width: wp('100%'),
        height: hp('11%'),
        top: hp('2%'),
        justifyContent: 'space-between'
    },
    PButton: {
        width: wp('80%'),
        height: hp('5%'),
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
        width: wp('100%'),
        height: hp('20%'),
        alignContent: 'center',
        position: 'absolute',
        top: 0
    },
    HeaderStyle:{
        width: wp('100%'),
        height: hp('20%'),
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
        width: wp('100%'),
        height: hp('44%'),
        top: hp('35%'),
        backgroundColor: '#fff',
        //borderRadius: 30,
        //borderColor: '#fd4140',
        //borderWidth: 2,
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        position: "absolute",
        
    },
    ProfilePicContainer:{
        width: wp('100%'),
        height: hp('15%'),
        top: hp('10%'),
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
      height: hp('5%'),
      borderColor: '#1c2b59',
      top: hp('1%'),
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: hp('1%'),
        width: '100%',
    },
    toCenter: {
      flexDirection: 'column',
      alignSelf: 'center',

    },
    topContainer:{
        position: "absolute",
        top: 0,
        width: wp('100%'),
        height: hp('21%'),
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#fd4140',
        
    },
  });
export default CustomerProfile;
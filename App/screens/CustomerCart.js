import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { connect } from 'react-redux';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { products } from './Dummy_Data.js';
import CustomerIndivCart from './CustomerIndivCart.js';
import { ScrollView } from 'react-native-gesture-handler';

function CustomerCart(props) {
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
            <View style={styles.CartContainer}>
                <View style={styles.CartName}>
                    <Text style={{color: '#29312e', fontSize: 24,}}>My Cart</Text>
                    <Text style={{color: '#29312e', fontSize: 14,}}>Store Name</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('customerProdQRCode')}>
                        <View style={styles.GenerateQR}>
                            <View style={styles.ElementsTop}>
                                <Image style={styles.LogoTiny} source={require('../assets/QR-W.png')}></Image>
                                <View style={styles.toCenter}>
                                    <Text style={{color: '#fff', fontSize: 16}}>Generate QR Code</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> 
                </View>
                <View style={{height: hp('60%'),width: wp('90%'),}} >
                    <ScrollView style={styles.container}>
                        {props.cartItems.length > 0 ?
                            <CustomerIndivCart
                                onPress={props.removeItem}
                                products={props.cartItems} />
                            : <View style={styles.EmptyCart}><Image style={styles.LogoTiny}
                            source={require('../assets/About-B.png')}></Image>
                            <Text style={{alignSelf: 'center',alignItems: 'center', justifyContent: 'center'}}>No items in your cart</Text>
                            </View>
                        }
                </ScrollView>
                </View>
            </View>

            <View style={styles.LogoContainer}>
                <Image style={styles.Logo}
                    source={require('../assets/Cart-Icon-Red.png')}></Image>
            </View>
        </ImageBackground>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCart);

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

    container: {
        top: 40,
        
        
        
    },
    CartContainer: {
        width: wp('90%'),
        height: hp('80%'),
        top: hp('15%'),
        backgroundColor: '#fff',
        borderRadius: 30,
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
    },
    CartName: {
        top: 35,
        alignItems: 'center',
        alignSelf: 'center',
    },
    ElementsTop:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    EmptyCart:{
        //justifyContent: 'space-around',
        flexDirection: 'row',
        alignSelf:'center'

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
      top: 10,
      marginBottom: 10
    },
    Logo:{
        height: 80,
        width: 80,
    },
    LogoTiny:{
        height: 30,
        width: 30,
    },
    LogoContainer:{
        position: "absolute",
        width: wp('90%'),
        height: hp('10%'),
        top: hp('10%'),
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
  });
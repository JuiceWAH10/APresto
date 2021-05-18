import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class CustomerIndivCart extends Component{
    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
               <View style={styles.Elements}>
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <View style={styles.wrapstore}>
                            <Image style={styles.Store}
                                fadeDuration={1000}
                                source={require('../assets/Shop-Icon.png')}></Image>
                            </View>
                    </TouchableOpacity>
                        <View style={styles.wrapwords}>
                            <View style={styles.toCenter}>
                            <View style={styles.wrapwordsinside}>
                                <Text style={{color: '#29312e', fontSize: 18}}>{item.product_name}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={styles.Price} source={require('../assets/Price-B.png')}></Image>
                                    <View style={styles.toCenter}>
                                        <Text style={{color: '#29312e', fontSize: 12}}>{item.price}</Text>
                                    </View>
                                </View>
                                </View>    
                            </View>
                        </View>
                        <View styles={styles.wrapcart}>  
                            <TouchableOpacity onPress={() => this.props.onPress(item)} style={styles.toCenter} >
                            <Image style={styles.Cart}
                                fadeDuration={1000}
                                source={require('../assets/Delete-B.png')}>                        
                            </Image>
                            </TouchableOpacity>
                        </View>    
                </View> 
            )
        })
    }
    
    render(){
        return (
            <View>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }    
}

export default CustomerIndivCart;

const styles = StyleSheet.create({
    Cart:{
        height: 50,
        width: 50,
    },
    Elements:{
        //borderWidth: 1,
        width: wp('90%'),
        height:75,
        borderBottomWidth: 1.5,
        borderColor: "#8c8c8c",
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        top: 10
    },
    Price: {
        height: 20,
        width: 20
    },
    Store:{
        height: 60,
        width: 60
    },
    toCenter: {
        flexDirection: 'column',
        alignSelf: 'center',
      },
      wrapstore:{
        width: wp('10%'),
    },  
    wrapamount:{
        width: wp('15%'),
    },  
    wrapwords:{
        width: wp('75%'),
    },  
    wrapwordsinside:{
        width: wp('80%'),
        left: wp('15%'),
        flexDirection: 'column',
        alignSelf: 'center',
    },
    wrapwordsprice:{
        width: wp('50%'),
        left: wp('20%'),
        //flexDirection: 'column',
        //alignSelf: 'center',
    } 
})
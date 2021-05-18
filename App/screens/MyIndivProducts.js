import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function MyIndivProducts(props) {
    return (
        <View style={styles.wrapValuesAll}>
                  <View style={styles.itemDetail}>
                    <Image 
                    style={styles.Logo}
                    source={require("../assets/adaptive-icon.png")}/>
                    <View style={styles.toCenter}>
                      <Text style={{color:'#1c2b59',fontSize: 20,}}>Product Name</Text>
                      <Text style={{color:'#1c2b59',fontSize: 12,}}>Price: </Text>
                    </View>
                  </View>

                  <View style={styles.wrapValues}>
                    <View style={styles.wrapValuesSmall}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Cart-B.png")}/>
                        <View style={styles.toCenter}>
                          <Text style={{color:'#1c2b59',fontSize: 12,}}>Stock:</Text>
                        </View>
                    </View>
                    <View style={styles.wrapValuesSmall}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Price-B.png")}/>
                        <View style={styles.toCenter}>
                          <Text style={{color:'#1c2b59',fontSize: 12,}}>Sold:</Text>
                        </View>
                    </View>
                  </View>
                  <View style={styles.wrapValues}>
                    <View style={styles.wrapValuesSmall}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Like-B.png")}/>
                        <View style={styles.toCenter}>
                          <Text style={{color:'#1c2b59',fontSize: 12,}}>Likes:</Text>
                        </View>
                    </View>
                    <View style={styles.wrapValuesSmall}>
                        <Image 
                        style={styles.LogoSmall}
                        source={require("../assets/Views-B.png")}/>
                        <View style={styles.toCenter}>
                          <Text style={{color:'#1c2b59',fontSize: 12,}}>Views:</Text>
                        </View>
                    </View>
                  </View>
                  <View style={styles.wrapButtons}>
                    <Button color="#fd4140" title="Delist"/>
                    <Button color="#fd4140" title="Edit"/>
                  </View>
                </View>
    );
}

const styles = StyleSheet.create({
    LogoSmall: {
        height: 20,
        width: 20
    },
    Logo:{
        height: 50,
        width: 50,
    },
    Elements:{
        //borderWidth: 1,
        borderBottomWidth: 1.5,
        borderColor: "#8c8c8c",
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        top: 10,
        
    },
    itemDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 10,
        width: '80%'
    },
    Store:{
        height: 60,
        width: 60
    },
    toCenter: {
        flexDirection: 'column',
        alignSelf: 'center',
    },
    wrapButtons:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 45,
        width: '40%'
    },
    wrapValues:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 20,
        bottom: 20,
        width: '80%'
    },
    wrapValuesAll:{
        borderColor: '#1c2b59',
        borderTopWidth: 2,
        top: 40,
        bottom: 20,
        height: '15%',
    },
    wrapValuesSmall:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 10,
        bottom: 20,
        width: '35%'
    },
})

export default MyIndivProducts;
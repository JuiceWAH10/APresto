import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDimensions }  from '@react-native-community/hooks';
import { TextInput } from 'react-native-paper';


function CustomerIndivRewards(props) {
    return (
        <View style={styles.Elements}>
            <TouchableOpacity onPress={()=>console.log("Pressed")}>
                <Image style={styles.Store}
                    fadeDuration={1000}
                    source={require('../assets/Shop-Icon.png')}></Image>
            </TouchableOpacity>
                <View style={styles.toCenter}>
                    <Text style={{color: '#29312e', fontSize: 18}}>Store Name</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.Address} source={require('../assets/Map-B.png')}></Image>
                        <View style={styles.toCenter}>
                            <Text style={{color: '#29312e', fontSize: 12}}>Address</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.toCenter}>
                    <TouchableOpacity onPress={()=>console.log("Pressed")}>
                        <Image style={styles.Cart}
                            fadeDuration={1000}
                            source={require('../assets/Cart-B.png')}></Image>
                    </TouchableOpacity>
                </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    Address: {
        height: 20,
        width: 20
    },
    Cart:{
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
        top: 10
    },
    Store:{
        height: 60,
        width: 60
    },
    toCenter: {
        flexDirection: 'column',
        alignSelf: 'center',
      },
})
export default CustomerIndivRewards;
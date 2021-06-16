import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDimensions }  from '@react-native-community/hooks';
import { TextInput } from 'react-native-paper';

function MyIndivSuki(props) {
    return (
        <View style={styles.wrapValuesAll}>
        <View style={styles.itemDetail}>
          <Image 
          style={styles.Logo}
          source={require("../assets/Customer-Profile.png")}/>
          <View style={styles.toCenter}>
            <Text style={{color:'#29312e',fontSize: 20,}}>Suki Name</Text>
            <Text style={{color:'#fd4140',fontSize: 12,}}>Available Points 00 </Text>
          </View>
        </View>

        <View style={styles.wrapButtons}>
          <Button color="#1c2b59" title="Message"/>
          <Button color="#800000" title="Delete Account"/>
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
        height: 80,
        width: 80,
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
        left: 35,
        padding: 15,
        width: '70%'
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


export default MyIndivSuki;
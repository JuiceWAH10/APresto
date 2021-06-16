import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CustomerIndivRewards(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        style={styles.Elements}
        onPress={() => {
            navigation.navigate("customerRewardItem", {
                name: props.name,
                address: props.address
            })
        }} >
                <Image style={styles.Store}
                    fadeDuration={1000}
                    source={require('../assets/Shop-Icon.png')}></Image>
                <View style={styles.toCenter}>
                    <Text style={{color: '#29312e', fontSize: 18}}>{props.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.Address} source={require('../assets/Map-B.png')}></Image>
                        <View style={styles.toCenter}>
                            <Text style={{color: '#29312e', fontSize: 12}}>{props.address}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.toCenter}>
                    <Image style={styles.Cart}
                        fadeDuration={1000}
                        source={require('../assets/Cart-B.png')}></Image>
                </View> 
        </TouchableOpacity>
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
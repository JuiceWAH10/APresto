import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDimensions }  from '@react-native-community/hooks';
import { TextInput } from 'react-native-paper';


function CustomerIndivShopItems(props) {
    const [itemcount, setTextIC] = React.useState('');
    return (
        <View style={styles.Elements}>
            <TouchableOpacity onPress={()=>console.log("Pressed")}>
                <Image style={styles.Store}
                    fadeDuration={1000}
                    source={require('../assets/Shop-Icon.png')}></Image>
            </TouchableOpacity>
                <View style={styles.toCenter}>
                    <Text style={{color: '#29312e', fontSize: 18}}>Product Name</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.Price} source={require('../assets/Price-B.png')}></Image>
                        <View style={styles.toCenter}>
                            <Text style={{color: '#29312e', fontSize: 12}}>Price</Text>
                        </View>
                    </View>
                </View>
                <TextInput
                        placeholder="00"
                        value={itemcount}
                        onChangeText={text => setTextIC(text)}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    Elements:{
        //borderWidth: 1,
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
})

export default CustomerIndivShopItems;
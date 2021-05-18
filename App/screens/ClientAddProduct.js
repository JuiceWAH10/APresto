import React from 'react';
import { Button, Image, ImageBackground, Input, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function ClientAddProduct(props) {
    const [prodName, setTextPN] = React.useState('');
    const [prodPrice, setTextPP] = React.useState('');
    const [prodStock, setTextPS] = React.useState('');
    return (
        <ImageBackground
        style={styles.BGImage}
        source={require('../assets/Store-Blur.png')}>
            <View style={styles.Back}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.BackLogo} source={require('../assets/Back.png')}>      
                    </Image> 
                </TouchableOpacity>    
            </View>
            <View style={styles.LogoContainer}>   
                    <Text style={{color: '#fff', fontSize: 22,}}>Add Product</Text>
            </View>
            <View style={styles.AddProdBG}>
                <View style={styles.shopInfo}>
                <Image 
                style={styles.Logo}
                source={require("../assets/icon.png")}/>
                </View>

                <View style={styles.topBorder1}></View>

                <Text style={{color:'#fd4140',fontSize: 16,}}>Product Name*</Text>

                <TextInput
                    style={styles.textInputs}
                    placeholder="Enter Product Name"
                    value={prodName}
                    onChangeText={text => setTextPN(text)}
                />

                <View style={styles.topBorder1}></View>
                <View style={styles.wrapValues}>
                    <Image 
                        style={styles.tinyLogo}
                        source={require("../assets/About-B.png")}/>  
                <View style={styles.toCenter}>
                    <Text style={{color:'#fd4140',fontSize: 16,}}>Product Category</Text>
                </View>   
                    <Text style={{color:'#fd4140',fontSize: 40,}}>&gt;</Text>
                </View>                

                <View style={styles.topBorder1}></View>

                <View style={styles.wrapValues}>
                    <Image 
                        style={styles.tinyLogo}
                        source={require("../assets/Price-B.png")}/>  
                <View style={styles.toCenter}>
                    <Text style={{color:'#fd4140',fontSize: 16,}}>Price</Text>
                </View>   
                <TextInput
                    style={styles.textInputsSmall}
                    placeholder="Set Price"
                    value={prodPrice}
                    onChangeText={text => setTextPP(text)}
                />
                </View>    

                <View style={styles.wrapValues}>
                    <Image 
                        style={styles.tinyLogo}
                        source={require("../assets/Products-B.png")}/>  
                <View style={styles.toCenter}>
                    <Text style={{color:'#fd4140',fontSize: 16,}}>Stock</Text>
                </View>   
                <TextInput
                    style={styles.textInputsSmall}
                    placeholder="Set Stock"
                    value={prodStock}
                    onChangeText={text => setTextPS(text)}
                />
                </View>        
                <View style={styles.topBorder2}></View>           
                </View>

                <View style={styles.buttons}>
                <TouchableOpacity>
                <View style={styles.indivButtons}>
                    <Text style={{color: '#fff', fontSize: 16}}>Save</Text>
                </View></TouchableOpacity> 
                <TouchableOpacity>
                <View style={styles.indivButtons}>
                    <Text style={{color: '#fff', fontSize: 16}}>Publish</Text>
                </View></TouchableOpacity>   
                </View>   
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    AddProdBG: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'space-around',      
        width: wp('90%'),
        height: hp('70%'),
        top: 110,
    },  
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
        top: 135,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'

    },
    indivButtons: {
        width: '100%',
        height: 50,
        backgroundColor: '#fd4140',
        borderRadius: 30,
        bottom: 10,
        //alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
  
      },
    ElementsTop:{
        flexDirection: 'row',
        justifyContent: 'space-around',
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
      top: 10
    },
    Logo:{
        height: 80,
        width: 80,
    },
    LogoQR:{
        height: 240,
        width: 240,
    },
    LogoContainer:{
        position: "absolute",
        top: 60,
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
    Container: {
        width: '90%',
        height: 450,
        backgroundColor: '#fff',
        borderRadius: 30,
        //alignItems: 'center',
        alignSelf: 'center',
        //justifyContent: 'center',
        top: 180
    },
    Elements: {
        top: 35,
        alignItems: 'center',
        alignSelf: 'center',
    },
    shopInfo: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 10,
        bottom: 20,
        width: '65%'
      },
    textInputs: {
        //borderWidth: 2,
        width: '80%',
        height: 50,
        borderColor: '#1c2b59',
    },
    textInputsSmall: {
        borderWidth: 1,
        width: '35%',
        height: 50,
        borderColor: '#1c2b59',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    topBorder1:{
        borderColor: '#1c2b59',
        borderTopWidth: 2,
        //top: 20,
        //bottom: 40,
        width: '85%'
    },
    topBorder2:{
          //borderColor: '#fff1c232',
          //borderTopWidth: 2,
          top: 20,
          bottom: 40,
          width: '85%'
    },
    wrapValues:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 20,
        bottom: 20,
        width: '80%'
      },
      wrapButtons:{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 60,
          bottom: 20,
          width: '50%'
        }
  });
export default ClientAddProduct;
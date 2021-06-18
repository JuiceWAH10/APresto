import React from 'react';
import { 
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function clientProductAdd(props) {
    const [prodName, setTextProdName] = React.useState('');
    const [prodDes, setTextProdDes] = React.useState('');
    const [prodPrice, setTextProdPrice] = React.useState('');
    const [prodQty, setTextProdQty] = React.useState('');

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => "pressed"} >
                    <Icon name="left" size={30} color="#fd4140" />
                </TouchableOpacity>
                <Text style={styles.title}>Add Product</Text>
            </View>         
            <ScrollView style={styles.container}>
                <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../../assets/banner5.jpg')}>
                    <View style={styles.bannerDarken}>
                        <Text style={styles.bannerLabel}>Publish products for your customers to love!</Text>
                        <Text style={styles.bannerLabelSmall}>Provide all the necessary information you want to share.</Text>
                    </View>    
                </ImageBackground>

                <Text style={styles.formTitles}>Enter Product Name</Text>
                <View style={styles.textView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Product Name"
                        onChangeText={text => setTextProdName(text)}
                        value={prodName}
                    />
                </View>
                <Text style={styles.formTitles}>Enter Product Description</Text>
                <View style={styles.textView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Product Description"
                        onChangeText={text => setTextProdDes(text)}
                        value={prodDes}
                    />
                </View>

                <View style={styles.textViewDual}>
                    <View>
                        <Text style={styles.formTitlesDual}>Enter Price</Text>
                            <TextInput
                                style={styles.inputDual}
                                placeholder="Product Price"
                                onChangeText={text => setTextProdPrice(text)}
                                value={prodPrice}
                            />
                    </View>

                    <View>
                        <Text style={styles.formTitlesDual}>Enter Quantity</Text>
                        <TextInput
                            style={styles.inputDual}
                            placeholder="Product Quantity"
                            onChangeText={text => setTextProdQty(text)}
                            value={prodQty}
                        />
                    </View>
                </View>

                <Text style={styles.formTitles}>Upload Image</Text>

                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('rewardItemsQR')} >
                    <Text style={styles.buttonLabel}>Add Product</Text>
                </TouchableOpacity>
                
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bannerBgImage: {
        alignSelf: "center",
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 10,
        height: 150,
        width: wp('90%'),
    },
    bannerDarken:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderRadius: 30,
    },
    bannerLabel: {
        textAlign: "center",
        marginTop: 35,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    bannerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#fff",
        fontSize: 12,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    button: {
        backgroundColor: '#fd4140',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 10,
        width: '80%',
        height: hp('6%'),
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16
    },
    container:{
        flex:1,
        alignSelf: "center",
        // borderWidth: 1,
        // borderColor: "red",
        width: wp('90%')
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0,
        borderWidth: 1
    },
    formTitles: {
        marginLeft: wp('5%'),
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    formTitlesDual: {
        marginLeft: 5,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold"
    },
    input: {
        height: 50,
        width: wp('80%'),
        borderWidth: 1,
        backgroundColor: "#fff",
    },
    inputDual: {
        alignSelf: "center",
        height: 50,
        width: wp('35%'),
        borderWidth: 1,
        backgroundColor: "#fff",
        marginLeft: 5,
        marginRight: 5
    },
    subtitle: {
        textAlign: "center",
        marginBottom: hp('5%'),
        fontSize: 12,
    },
    textView: {
        padding: 6,
        alignItems: 'center'
    },
    textViewDual: {
        padding: 6,
        alignSelf: "center",
        width: wp('85%'),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        // flexDirection: "row",
        textAlign: "center",
        // marginBottom: 10,
        // color: "#fd4140",
        fontSize: 24,
        fontWeight: "bold"
    },
    topNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        // width: wp('100%'),
        paddingLeft: 10,
        paddingRight: wp('5%'),
        paddingTop: 5,
    },
})
export default clientProductAdd;
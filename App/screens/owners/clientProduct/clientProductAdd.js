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
import { Input } from 'react-native-elements';

function clientProductAdd(props) {
    const [prodName, setTextProdName] = React.useState('');
    const [prodDes, setTextProdDes] = React.useState('');
    const [prodPrice, setTextProdPrice] = React.useState('');
    const [prodQty, setTextProdQty] = React.useState('');

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            {/* Top Navigation */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name="left" size={30} color="#ee4b43" />
                </TouchableOpacity>
                <Text style={styles.title}>Add Product</Text>   
            </View>  
            {/* End of Top Navigation */}

            <ScrollView style={styles.container}>

                <Text style={styles.textInfo}>Do you like your products to be known by customers? 
                Upload an image of your product for them to see it.</Text>

                <View style={styles.shadowContainer}>
                    <Text style={styles.formTitles}>Upload Image</Text>
                    {/* Display the selected Image*/}
                    

                    {/* Button for Image Picker */}
                    <TouchableOpacity style={styles.imageButton} onPress={()=>console.log("Pressed")} >
                        <Text style={styles.imageButtonLabel}>Upload Image</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textInfo}>Provide all the necessary informations for them to know what you 
                can offer.</Text>

                {/* Form */}
                <View style={styles.shadowContainer}>
                    <Text style={styles.formTitles}>Enter Product Name</Text>
                    <View style={styles.textView}>
                        <Input
                            style={styles.input}
                            leftIcon={{ type: 'font-awesome', name: 'archive' }}
                            placeholder="Product Name"
                            onChangeText={text => setTextProdName(text)}
                            value={prodName}
                        />
                    </View>
                </View>

                <View style={styles.shadowContainer}>
                    <Text style={styles.formTitles}>Enter Product Description</Text>
                    <View style={styles.textView}>
                        <Input
                            style={styles.inputArea}
                            leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
                            multiline={true}
                            placeholder="Product Description"
                            onChangeText={text => setTextProdDes(text)}
                            scrollEnabled={true}
                            value={prodDes}
                        />
                    </View>
                </View>
                
                <View style={styles.shadowContainer}>
                    <View style={styles.textViewDual}>
                        <View>
                            <Text style={styles.formTitlesDual}>Enter Price</Text>
                                <Input
                                    style={styles.inputDual}
                                    leftIcon={{ type: 'font-awesome-5', name: 'coins' }}
                                    placeholder="Product Price"
                                    onChangeText={text => setTextProdPrice(text)}
                                    keyboardType="numeric"
                                    value={prodPrice}
                                />
                        </View>
                        <View>
                            <Text style={styles.formTitlesDual}>Enter Quantity</Text>
                            <Input
                                style={styles.inputDual}
                                leftIcon={{ type: 'font-awesome-5', name: 'box' }}
                                placeholder="Product Quantity"
                                onChangeText={text => setTextProdQty(text)}
                                keyboardType="numeric"
                                value={prodQty}
                            />
                        </View>
                    </View>
                </View>

                {/* End of Form */}
            </ScrollView>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("Pressed")} >
                    <Text style={styles.buttonLabel}>Add Product</Text>
                </TouchableOpacity>
            </View>      
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
        backgroundColor: '#071964',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        width: '80%',
        height: hp('6%'),
    },
    buttonContainer: {
        paddingTop: 10,
        paddingBottom: 10,

        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
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
        width: wp('100%')
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 32 : 0,
        // borderWidth: 1,
        backgroundColor: "#fff"
    },
    formTitles: {
        marginLeft: wp('5%'),
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    formTitlesDual: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 5,
        width: wp('40%'),
        fontSize: 16,
        fontWeight: "bold"
    },
    imageButton:{
        backgroundColor: '#ee4b43',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        width: 150,
        height: hp('6%'),
        marginTop: 5,
        marginBottom: 10
    },
    imageButtonLabel: {
        color: "#fff",
        fontSize: 14
    },
    imageUpload: {
        alignSelf: "center",
        width: 150,
        height: 200,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "#ee4b43"
    },
    input: {
        height: 50,
        width: wp('80%'),
        marginLeft: 10,
        fontSize: 16

    },
    inputArea: {
        height: 50,
        width: wp('80%'),
        marginLeft: 10,
        fontSize: 16
    },
    inputDual: {
        alignSelf: "center",
        height: 50,
        width: wp('100%'),
        // borderWidth: 1,
        // backgroundColor: "#fff",
        marginLeft: 10,
        // marginRight: 10,
        fontSize: 16
    },
    shadowContainer: {
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 10,

        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    subtitle: {
        textAlign: "center",
        marginBottom: hp('5%'),
        fontSize: 12,
    },
    textInfo: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
        opacity: .5,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    textView: {
        padding: 6,
        alignItems: 'center'
    },
    textViewDual: {
        // padding: 6,
        alignSelf: "center",
        width: wp('85%'),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        color: "#ee4b43",
        textAlign: "center",
        marginBottom: 5,
        marginTop: 5,
        fontSize: 20,
        fontWeight: "bold"
    },
    topNav: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,

        backgroundColor: 'white',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
})
export default clientProductAdd;
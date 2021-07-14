import React from 'react';
import { 
    Alert,
    Image,
    ImageBackground,
    LogBox,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from "firebase";
import uuid from 'react-native-uuid';

LogBox.ignoreLogs(['Setting a timer']);// To ignore the warning on uploading

function clientProductAdd(props) {
    const [prodName, setTextProdName] = React.useState('');
    const [prodDes, setTextProdDes] = React.useState('');
    const [prodPrice, setTextProdPrice] = React.useState('');
    const [prodQty, setTextProdQty] = React.useState('');

    const [image, setImage] = React.useState(null);
    
    var imageUUID = uuid.v4(); // generates UUID (Universally Unique Identifier)

    const navigation = useNavigation();
        
        // Code for Image Picker and Uploading to Firebase storage
        pickImage = async () => {
            //For choosing photo in the library and crop the photo
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [3, 4],
              quality: 1,
            });
        
            console.log(result); // To Display the information of image on the console
        
            if (!result.cancelled) {
                this.uploadImage(result.uri, imageUUID)
                  .then(() => {
                    Alert.alert("Image Uploaded");
                    setImage(result.uri);
                  })
                  .catch((error) => {
                    Alert.alert(error);
                  });
              }
        };

        //Function to upload to Firebase storage
        uploadImage = async (uri, imageName) => {
            const response = await fetch(uri);
            const blob = await response.blob();
        
            var ref = firebase.storage().ref().child("images/" + imageName);
            return ref.put(blob);
        }

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            {/* Top Naviagation */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name="left" size={30} color="#ee4b43" />
                </TouchableOpacity>   
            </View>  
            {/* End of Top Navigation */}

            <Text style={styles.title}>Add Product</Text>   
            <ScrollView style={styles.container}>

                {/* Banner */}
                <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../../assets/bannerImages/banner_Product.jpg')}>
                    <View style={styles.bannerDarken}>
                        <Text style={styles.bannerLabel}>Publish products for your customers to love!</Text>
                        <Text style={styles.bannerLabelSmall}>Provide all the necessary information you want to share.</Text>
                    </View>    
                </ImageBackground>
                {/* End of Banner */}

                {/* Form */}
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

                <View style={styles.textViewDual}>
                    <View>
                        <Text style={styles.formTitlesDual}>Enter Price</Text>
                            <Input
                                style={styles.inputDual}
                                leftIcon={{ type: 'font-awesome-5', name: 'coins' }}
                                placeholder="Product Price"
                                onChangeText={text => setTextProdPrice(text)}
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
                            value={prodQty}
                        />
                    </View>
                </View>

                <Text style={styles.formTitles}>Upload Image</Text>

                    {/* Button for Image Picker */}
                    <TouchableOpacity style={styles.imageButton} onPress={this.pickImage} >
                        <Text style={styles.imageButtonLabel}>Upload Image</Text>
                    </TouchableOpacity>

                    {/* Display the selected Image*/}
                    {image && <Image source={{ uri: image }} style={styles.imageUpload} />}  


                {/* End of Form */}
                
                <TouchableOpacity style={styles.button} onPress={() => "pressed"} >
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
        backgroundColor: '#071964',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 20,
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
        marginTop: 20,
        width: 150,
        height: hp('6%'),
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
        // padding: 6,
        alignSelf: "center",
        width: wp('85%'),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        textAlign: "center",
        marginBottom: 5,
        marginTop: 5,
        fontSize: 20,
        fontWeight: "bold"
    },
    topNav: {
        paddingLeft: 10,
    },
})
export default clientProductAdd;
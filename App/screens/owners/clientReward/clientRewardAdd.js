import React from 'react';
import { 
    Alert,
    Image,
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
import { showMessage } from "react-native-flash-message";
import Toast from 'react-native-toast-message';

LogBox.ignoreLogs(['Setting a timer']);// To ignore the warning on uploading

function clientRewardAdd(props) {
    const [rewName, setTextRewName] = React.useState('');
    const [rewDes, setTextRewDes] = React.useState('');
    const [rewPrice, setTextRewPrice] = React.useState('');
    const [rewQty, setTextRewQty] = React.useState('');

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
            showMessage({
                message: "Uploading Image",
                backgroundColor: "#ee4b43",
                color: "#fff",
                position: "top",
                floating: "true",
                icon: { icon: "info", position: "left" },
                autoHide:"true", 
                duration: 1000,
            });
            this.uploadImage(result.uri, imageUUID)
                .then(() => {
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
        
            var ref = firebase.storage().ref().child("images_Reward/" + imageName);
            return ref.put(blob);
        }

        //Display flash message 
        successAdded = () => {
            showMessage({
                message: "Reward Added Successfully",
                type: "success",
                color: "#fff",
                position: "top",
                floating: "true",
                icon: { icon: "info", position: "left" },
                autoHide:"true", 
                duration: 2500,
            })
        }

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            {/* Top Navigation */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name="left" size={30} color="#ee4b43" />
                </TouchableOpacity>
                <Text style={styles.title}>Add Reward</Text>   
            </View>  
            {/* End of Top Navigation */}

            <ScrollView style={styles.container}>

                <Text style={styles.textInfo}>Do you like your products to be known by customers? 
                    Upload an image of your product for them to see it.</Text>

                <View style={styles.shadowContainer}>
                    <Text style={styles.formTitles}>Upload Image</Text>
                    {/* Display the selected Image*/}
                    {image && <Image source={{ uri: image }} style={styles.imageUpload} />} 

                    {/* Button for Image Picker */}
                    <TouchableOpacity style={styles.imageButton} onPress={this.pickImage} >
                        <Text style={styles.imageButtonLabel}>Upload Image</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.textInfo}>Provide all the necessary informations for them to know what you 
                can offer.</Text>

                {/* Form */}
                <View style={styles.shadowContainer}>
                    <Text style={styles.formTitles}>Enter Reward Name</Text>
                    <View style={styles.textView}>
                        <Input
                            style={styles.input}
                            leftIcon={{ type: 'font-awesome', name: 'archive' }}
                            placeholder="Reward Name"
                            onChangeText={text => setTextRewName(text)}
                            value={rewName}
                        />
                    </View>
                </View>
                
                <View style={styles.shadowContainer}>
                    <Text style={styles.formTitles}>Enter Reward Description</Text>
                    <View style={styles.textView}>
                        <Input
                            style={styles.inputArea}
                            leftIcon={{ type: 'font-awesome', name: 'list-alt' }}
                            multiline={true}
                            placeholder="Reward Description"
                            onChangeText={text => setTextRewDes(text)}
                            scrollEnabled={true}
                            value={rewDes}
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
                                    placeholder="Reward Price"
                                    onChangeText={text => setTextRewPrice(text)}
                                    keyboardType="numeric"
                                    value={rewPrice}
                                />
                        </View>
                        <View>
                            <Text style={styles.formTitlesDual}>Enter Quantity</Text>
                            <Input
                                style={styles.inputDual}
                                leftIcon={{ type: 'font-awesome-5', name: 'box' }}
                                placeholder="Reward Quantity"
                                onChangeText={text => setTextRewQty(text)}
                                keyboardType="numeric"
                                value={rewQty}
                            />
                        </View>
                    </View>
                </View>    

                {/* End of Form */}        
            </ScrollView>

            <Toast ref={Toast.setRef} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => Toast.show({
                        type: 'success',
                        position: 'top',
                        text1: 'Reward Have been Added',
                        visibilityTime: 1000,
                        autoHide: true,
                        topOffset: 100,
                        bottomOffset: 40,
                        })}>
                    <Text style={styles.buttonLabel}>Add Reward</Text>
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

export default clientRewardAdd;
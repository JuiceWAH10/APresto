import React from 'react';
import { 
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

function clientRewardAdd(props) {
    const [rewName, setTextRewName] = React.useState('');
    const [rewDes, setTextRewDes] = React.useState('');
    const [rewPrice, setTextRewPrice] = React.useState('');
    const [rewQty, setTextRewQty] = React.useState('');

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.droidSafeArea}>
            {/* Top Navigation */}
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Icon name="left" size={30} color="#aacfdd" />
                </TouchableOpacity>   
            </View>
            {/* End of Top Navigation */}

            <Text style={styles.title}>Add Reward</Text>   
            <ScrollView style={styles.container}>

                {/* Banner */}
                <ImageBackground style={styles.bannerBgImage}
                    imageStyle={{ borderRadius: 30}}
                    source={require('../../../assets/bannerLightBlue.jpg')}>
                    <View style={styles.bannerDarken}>
                        <Text style={styles.bannerLabel}>Publish rewards for your customers to love!</Text>
                        <Text style={styles.bannerLabelSmall}>Provide all the necessary information you want to share.</Text>
                    </View>    
                </ImageBackground>
                {/* End of Banner */}

                {/* Form */}
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

                <View style={styles.textViewDual}>
                    <View>
                        <Text style={styles.formTitlesDual}>Enter Price</Text>
                            <Input
                                style={styles.inputDual}
                                leftIcon={{ type: 'font-awesome-5', name: 'coins' }}
                                placeholder="Reward Price"
                                onChangeText={text => setTextRewPrice(text)}
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
                            value={rewQty}
                        />
                    </View>
                </View>

                <Text style={styles.formTitles}>Upload Image</Text>
                    {/* Add Code for Uploading Image here */}

                {/* End of Form */}

                <TouchableOpacity style={styles.button} onPress={() => "pressed"} >
                    <Text style={styles.buttonLabel}>Add Reward</Text>
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
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.15)',
        // borderRadius: 30,
    },
    bannerLabel: {
        textAlign: "center",
        marginTop: 35,
        color: "#29312e",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
    },
    bannerLabelSmall: {
        textAlign: "center",
        marginTop: 2,
        color: "#29312e",
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
        width: wp('40%'),
        fontSize: 16,
        fontWeight: "bold"
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

export default clientRewardAdd;
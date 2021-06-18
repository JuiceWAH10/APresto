import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function signupCustomer(props) {
    const [firstName, setTextFN] = React.useState('');
    const [lastName, setTextLN] = React.useState('');
    const [address, setTextA] = React.useState('');
    const [contactNo, setTextCN] = React.useState('');
    const [userName, setTextUN] = React.useState('');
    const [email, setTextE] = React.useState('');
    const [password, setTextPW] = React.useState('');
    const [retypePassword, setTextRPW] = React.useState('');

    return (
        <SafeAreaView style={styles.droidSafeArea}>       
            <View style={[styles.topContainer, {flex:1}]}>
                <Icon name="left" size={30} color="#fd4140" />
            </View>
            <View style={[styles.formContainer, {flex:15}]}>          
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>Provide the needed information to continue.</Text>
                <ScrollView>
                    <Text style={styles.formTitles}>Basic Information</Text>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            onChangeText={text => setTextFN(text)}
                            value={firstName}
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            onChangeText={text => setTextLN(text)}
                            value={lastName}
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Address"
                            onChangeText={text => setTextA(text)}
                            value={address}
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Contact Number"
                            onChangeText={text => setTextCN(text)}
                            value={contactNo}
                            keyboardType="numeric"
                        />
                    </View>
                    <Text style={styles.formTitles}>Account Information</Text>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="UserName"
                            onChangeText={text => setTextUN(text)}
                            value={userName}
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            onChangeText={text => setTextE(text)}
                            value={email}
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={text => setTextPW(text)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Retype Password"
                            onChangeText={text => setTextRPW(text)}
                            value={retypePassword}
                            secureTextEntry={true}
                        />
                    </View>
                    
                </ScrollView>
                {/* Navigation isn't final */}
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('login')} >
                    <Text style={styles.buttonLabel}>Continue</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fd4140',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '80%',
        height: hp('6%'),
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16
    },
    droidSafeArea: {
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === 'android' ? 32 : 0
    },
    formContainer: {
        alignItems: "center",
        borderRadius: 4,
        flex: 1,
        padding: 20,
    },
    formTitles: {
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    input: {
        height: 50,
        width: wp('80%'),
        borderWidth: 1,
        backgroundColor: "#fff",
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
    title: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "bold"
    },
    topContainer: {
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        height: hp('10%'),
        width: wp('95%'),
    },
})

export default signupCustomer;
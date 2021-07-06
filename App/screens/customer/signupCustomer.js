import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import validator from "validator";
import { auth } from "firebase";

//validation function of email
const validateFields = (email, password) => {
    const isValid = {
        email: validator.isEmail(email),
        password: validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        }),
    };
    return isValid;
};

//sign up function to create user/ CREATE ACCOUNT FUNCTION
const createAccount = (email, password) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            console.log("Creating user...");
        });
};


function signupCustomer(props) {
    //below statements are not used
    const [firstName, setTextFN] = React.useState('');
    const [lastName, setTextLN] = React.useState('');
    const [address, setTextA] = React.useState('');
    const [contactNo, setTextCN] = React.useState('');
    const [userName, setTextUN] = React.useState('');
    //const [email, setTextE] = React.useState('');
    //const [password, setTextPW] = React.useState('');
    //const [retypePassword, setTextRPW] = React.useState('');

    //Email variables
    const [emailField, setEmailField] = useState({
        text: "", 
        errorMessage: "",
    });

    //Password variables
    const [passwordField, setPasswordField] = useState({
        text: "", 
        errorMessage: "",
    });

    //Re-enter password variables
    const [passwordReentryField, setPasswordReentryField] = useState({
        text: "", 
        errorMessage: "",
    });

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
                            //Email input
                            style={styles.input}
                            placeholder="Email"
                            text={emailField.text}
                            onChangeText={(text) => {setEmailField({text});}}
                            errorMessage={emailField.errorMessage}
                            autoCompleteType="email"
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            //Password input
                            style={styles.input}
                            //secureTextEntry={true}
                            placeholder="Password"
                            text={passwordField.text}
                            onChangeText={(text) => {setPasswordField({text});}}
                            errorMessage={passwordField.errorMessage}
                            autoCompleteType="password"
                        />
                    </View>
                    <View style={styles.textView}>
                        <TextInput
                            //Re-enter password input
                            style={styles.input}
                            //secureTextEntry={true}
                            placeholder="Re-enter Password"
                            text={passwordReentryField.text}
                            onChangeText={(text) => {setPasswordReentryField({text});}}
                            errorMessage={passwordReentryField.errorMessage}
                        />
                    </View>
                    
                </ScrollView>
                {/* Navigation isn't final */}
                
                {/*CONTINUE BUTTON AND ERROR MESSAGES*/}
                <TouchableOpacity style={styles.button} onPress={() => {
                    const isValid = validateFields(emailField.text, passwordField.text);

                    let isAllValid = true;
                    if(!isValid.email){
                        console.log("Please enter a valid email...")
                        //emailField.errorMessage = "Please enter a valid email";
                        setEmailField({...emailField});
                        isAllValid = false;
                    }
                    
                    if(!isValid.password){
                        console.log("Password must be at least 8 long characters with numbers")
                        //passwordField.errorMessage = "Password must be at least 8 long characters with numbers";
                        setPasswordField({...passwordField});
                        isAllValid = false;
                    }

                    if(passwordReentryField.text != passwordField.text){
                        console.log("Passwords do not match")
                        //passwordReentryField.errorMessage="Passwords do not match"
                        setPasswordReentryField({...passwordReentryField});
                        isAllValid = false;
                    }

                    //IF ALL INPUTS ARE VALID THIS IS WILL CREATE ACCOUNT FUNCTION 
                    if(isAllValid){
                        createAccount(emailField.text, passwordField.text);                        
                    }

                }}>
                    <Text style={styles.buttonLabel}>Continue</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>

    );
}

{/*props.navigation.navigate('login')  --- NOT USED*/}

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
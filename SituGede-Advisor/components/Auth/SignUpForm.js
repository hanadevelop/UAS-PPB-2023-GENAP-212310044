import React, { useState } from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Pressable, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [isOpenPass, setOpenPass] = useState(true);
    
    const handlerSignIn = () => {
        const errors = validateSignIn(email, password);
        if (errors) {
          console.log(errors);
          return;
        }
    };
    
    const handlerValidMail = (value) => {
        if(!value) {
            setValidEmail("Email harus diisi");
        } else {
            let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regEmail.test(value)) {
                setValidEmail("Email tidak sesuai");
            } else {
                setValidEmail("");
            }
        }
        setEmail(value); 
    };

    const handlerValidPassword = (value) => {
        setPassword(value);
        if (!value) {
          setValidPassword("Password harus diisi");
        } else {
          setValidPassword("");
        }
      };
    
    const handlerOpenPassword = () => {
        switch (!isOpenPass) {
            case true:
                setOpenPass(true);
                break;
            default: 
                setOpenPass(false);
                break;
        }
    };

    const validateSignIn = (email, password) => {
        const errors = {};
        // Validasi email
        if (!email) {
          errors.email = "Email harus diisi";
        } else if (validEmail !== "" && validEmail !== "Invalid Email Address") {
          errors.email = validEmail;
        }
        // Validasi password
        if (!password) {
          errors.password = "Password harus diisi";
        } else if (password.length < 6) {
          errors.password = "Password minimal 6 karakter";
        } else if (validPassword !== "" && validPassword !== "Invalid Password") {
            errors.password = validPassword;
        }   
        return Object.keys(errors).length > 0 ? errors : null;
    };
    return (
        <View>
            <KeyboardAvoidingView>
                <View style={styles.InputLyt}>
                    <Text style={styles.Text}>Email Address</Text>
                    <TextInput
                    style={styles.InputText}
                    placeholder='Email Address' />
                </View>
                <View style={styles.InputLyt}>
                <Text style={styles.Text}>Password</Text>
                    <View style={styles.PasswordLyt}>
                        <TextInput
                            secureTextEntry={isOpenPass}
                            style={styles.InputPassword}
                            placeholder='Input Your Password'
                            autoCorrect= {false}
                            onChangeText={(text) => handlerValidPassword(text)} />
                        <Pressable onPress={(value) => handlerOpenPassword(value)}>
                            <FontAwesome5 name={(!isOpenPass) ? 'eye':'eye-slash'} size={20} color={'#053247'} />
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.error}>{validPassword}</Text>
                <View style={styles.InputLyt}>
                    <Text style={styles.Text}>Confirm Password</Text>
                    <View style={styles.PasswordLyt}>
                        <TextInput
                            secureTextEntry={isOpenPass}
                            style={styles.InputPassword}
                            placeholder='Input Your Password'
                            autoCorrect= {false}
                            onChangeText={(text) => handlerValidPassword(text)} />
                        <Pressable onPress={(value) => handlerOpenPassword(value)}>
                            <FontAwesome5 name={(!isOpenPass) ? 'eye':'eye-slash'} size={20} color={'#053247'} />
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.error}>{validPassword}</Text>
            </KeyboardAvoidingView>
            <View style={{marginHorizontal: 40}}>
            </View>
            <TouchableOpacity 
                onPress={() => (navigation.navigate('SignIn'))}
                Title="Home"
                style={styles.SignInButton} >
                <Text style={styles.Btn_Text}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.Line}></View>
                <Text style={{...styles.Text,justifyContent:'center'}}>Or</Text>
                <View style={styles.Line}></View>
            </View>
            <TouchableOpacity
                Title="Google Sign In"
                style={styles.SignInButton} >
                <Image
                    style={styles.logo}
                    source={require('../../assets/google.png')} />
                <Text style={styles.Btn_Text} >Google</Text>
            </TouchableOpacity>
            <View style={{...styles.SignUpButton,flexDirection:'row'}}>
                <Text style={styles.Text}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => (navigation.navigate('SignIn'))}
                    Title="Sign In" >
                    <Text style={{...styles.Text,marginLeft:10, color:"#3A835F"}}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Image: {
        height: "100%",
        resizeMode:'cover',
        justifyContent: 'center',
        opacity: 1
    },
    Text: {
        fontSize: 14,
        fontWeight: 600,
        color: '#053247',
    },
    Btn_Text: {
        fontSize: 14,
        fontWeight: 600,
        color: '#F5F5F5'
    },
    InputText: {
        height: 40,
        borderBottomWidth: 1,
        padding: 10,
        borderRadius: 3,
        color: '#40513B',
        borderColor: '#40513B'
    },
    InputLyt: {
        marginHorizontal: 40,
        marginVertical:10,
    },
    Line: {
        width:"40%",
        borderWidth: 2,
        margin:10,
        borderRadius:2,
        borderColor: '#3A835F',
    },
    SignInButton: {
        height: 40,
        marginHorizontal:"30%",
        marginVertical:10,
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#3A835F',
        flexDirection: 'row',
        alignItems: 'center',
    },
    SignUpButton: {
        justifyContent: 'center',
        marginVertical:10,
        height: 20
    },
    logo: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    PasswordLyt: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderRadius: 3,
        borderColor: '#3A835F',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
})

export default SignUpForm;

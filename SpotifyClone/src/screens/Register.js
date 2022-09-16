import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../../config'

const Register = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    let registerUser = async (email, password, firstName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'spotify-clone-f5ba8.firebaseapp.com',
            })
            .then(() => {
                alert('Verification email sent')
            }).catch((error) => {
                alert(error.message)
            })
            .then(() => {
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName,
                    lastName,
                    email,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <View style= {styles.container}>
            <Image
                source={require("../../assets/spotifyLogo.png")}
                style={styles.logoStyle}
            />
            <View style= {styles.containerTextInput}>
                <TextInput
                    style= {styles.textInput}
                    placeholder= "First Name"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    autoCorrect= {false}
                />
                <TextInput
                    style= {styles.textInput}
                    placeholder= "Last Name"
                    onChangeText={(lastName) => setLastName(lastName)}
                    autoCorrect= {false}
                />
                <TextInput
                    style= {styles.textInput}
                    placeholder= "Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCorrect= {false}
                    keyboardType="email-adress"
                />
                <TextInput
                    style= {styles.textInput}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize= "none"
                    autoCorrect= {false}
                    secureTextEntry = {true}
                />
            </View>
            <TouchableOpacity
                onPress ={() => registerUser(email, password, firstName, lastName)}
                style= {styles.registerButton}
            >
                <Text style= {styles.registerText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.labelStyle}>Already have an account?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 10,
    },
    logoStyle: {
      width: 270,
      height: 80,
      alignSelf: "center",
      marginTop: 70,
      marginBottom: 10
    },
    containerTextInput: {
      marginTop: 30, 
      alignItems: "center"
    },
    textInput: {
      paddingHorizontal: 10,
      width: 275,
      height: 60,
      fontSize: 20,
      borderTopColor: "#19ac68",
      borderTopWidth: 1,
      marginBottom: 10,
      textAlign: "center",
      backgroundColor: "#f7f7f7",
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.44,
      shadowRadius: 4,
      elevation: 5,
    },
    registerButton: {
      marginTop: 30,
      height: 60,
      width: 160,
      backgroundColor: "#19ac68",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.41,
      shadowRadius: 3,
      elevation: 4,
    },
    registerText: {
      fontWeight: "bold",
      fontSize: 26,
      color: "white",
    },
    labelStyle: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#19ac68",
      marginTop: 40,
    },
    loginButton: {
      marginTop: 10,
      height: 40,
      width: 120,
      backgroundColor: "#191414",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.21,
      shadowRadius: 5,
      elevation: 8,
    },
    loginText: {
      fontWeight: "700",
      fontSize: 16,
      color: "white",
    },
  });
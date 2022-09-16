import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/spotifyLogo.png")}
        style={styles.logoStyle}
      />
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.labelStyle}>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
    marginVertical: 70,
  },
  containerTextInput: {
    marginTop: 40, 
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
    shadowRadius: 3,
    elevation: 5,
  },
  loginButton: {
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
      height: 3,
    },
    shadowOpacity: 0.41,
    shadowRadius: 5,
    elevation: 6,
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
  },
  labelStyle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#19ac68",
    marginTop: 80,
  },
  registerButton: {
    marginTop: 10,
    height: 40,
    width: 120,
    backgroundColor: "#191414",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.21,
    shadowRadius: 5,
    elevation: 6,
  },
  registerText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },
});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

import { firebase } from "../../config";

import { ThemeContext } from "../context/theme";

const Profile = () => {
  const {theme} = useContext(ThemeContext);
  const [name, setName] = useState("");
  const { navigate } = useNavigation();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <SafeAreaView style= {[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <View style= {styles.containerTop}>
        <Image source={require("../../assets/geralt.jpg")} style= {styles.pp}/>
        <Text style={[styles.userInfo, {color: theme.color}]}>
            Hello, {name.firstName}
        </Text>
        <Pressable  onPress={() => navigate("Edit")}>
          <Ionicons name= "settings" size= {40} style={styles.settingsIcon}/>
        </Pressable>
      </View>
      <Text style={[styles.likedText, {color: theme.color}]}>Liked Songs</Text>
      <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    flexDirection: "row", 
    justifyContent: "space-around", 
    marginTop: 30
  },
  userInfo: {
    fontSize: 32, 
    fontWeight: "bold", 
    marginTop: 20, 
    marginRight: 15 
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#191414',
    marginTop: 350,
    alignSelf: 'center',
    borderRadius: 25
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: "bold",
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 3
  },
  likedText:{
    fontSize: 26, 
    fontWeight: "bold", 
    marginTop: 10, 
    marginLeft: 15 
  },
  settingsIcon: {
    marginTop: 15, 
    marginRight: 15, 
    color: "#19ac68"
  },
  pp: {
    width: 75, 
    height: 75, 
    borderRadius: 50
  }
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from '../context/theme';
//User Settings needs to be develop.
const ProfileScreen = () => {
  const { navigate } = useNavigation();
  //For theme change.
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Image
        style={styles.imageStyle}
        source={require("../../assets/geralt.jpg")}
      />
      <View style={styles.editContainer}>
        {/* Navigates when press */}
        <Pressable
          onPress={() => navigate("EditScreen")}
          style={styles.editButtonStyle}
        >
          <Text style={styles.editTextStyle}>Edit Profile</Text>
        </Pressable>
        <Pressable
          onPress={() => navigate("ThemeEditScreen")}
          style={styles.themeButtonStyle}
        >
          <Text style={styles.themeTextStyle}>Edit Theme</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => {
          firebase.auth().signOut();
        }}
        style={styles.button}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  imageStyle: {
    backgroundColor: "gray",
    height: 120,
    width: 120,
    borderRadius: 75,
    marginVertical: 20,
    alignSelf: "center",
  },
  textName: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "center",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 55,
    marginTop: 5,
  },
  textInfo: {
    fontSize: 16,
  },
  editButtonStyle: {
    width: 90,
    height: 35,
    backgroundColor: "#ffecb3",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 20,
  },
  editTextStyle: {
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
  },
  themeButtonStyle: {
    width: 90,
    height: 35,
    backgroundColor: "#ffecb3",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
    borderTopColor: "red",
    borderBottomColor: "#2196f3",
    borderLeftColor: "green",
    borderRightColor: "magenta",
    borderWidth: 1.5,
    borderRadius: 20,
  },
  themeTextStyle: {
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
  },
  logoutButtonStyle: {
    width: 70,
    height: 35,
    backgroundColor: "#ffc107",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 250,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 20,
  },
  logoutTextStyle: {
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 70,
  },
});

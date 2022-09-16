import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import BottomNavigation from "./src/navigation/BottomNavigation";
import Edit from "./src/screens/Edit";
import InfoEdit from "./src/screens/InfoEdit";
import ThemeEdit from "./src/screens/ThemeEdit";

const Stack = createStackNavigator();

function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  //User have to login or register for using system.
  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
  //the main system
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />
       {/* I made a critical mistake with navigations. I should create the same thing like BottomNav for Stack Navigations.But its too late now. */}
       {/* <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerShown: false,
          }}
        /> */}
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

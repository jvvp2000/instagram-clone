import React from "react";
import { StyleSheet, Text, View } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "instagram-dev-838f0.firebaseapp.com",
  projectId: "instagram-dev-838f0",
  storageBucket: "instagram-dev-838f0.appspot.com",
  messagingSenderId: "407634068545",
  appId: "1:407634068545:web:fdfb6f139d30ca9ce2f2c0",
  measurementId: "G-1XBL9FFYKV",
};

firebase.initializeApp(firebaseConfig);

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "./src/screens/auth/Landing";
import RegisterScreen from "./src/screens/auth/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

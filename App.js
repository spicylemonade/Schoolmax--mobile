import { StatusBar } from "expo-status-bar";
import React from "react";
import { enableScreens } from "react-native-screens";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
enableScreens();
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./src/screens/SignIn";
import Main from "./src/screens/mainStack/Main";

const stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <stack.Navigator screenOptions={{ gestureEnabled: true }}>
        <stack.Screen
          name="signUp"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;

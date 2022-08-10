import { StatusBar } from "expo-status-bar";
import React from "react";
import { enableScreens } from "react-native-screens";
import { SafeAreaView, StyleSheet, Text, View, LogBox } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
//import GetStarted from "./src/screens/GetStarted";
import SignIn from "./src/screens/SignIn";
import Main from "./src/screens/mainStack/Main";

///Todo! configure loding fonts
//enableScreens();
const stack = createStackNavigator();
LogBox.ignoreLogs(["expo-app-loading is deprecated"]);
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <stack.Screen
          name="SignUp"
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

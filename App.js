import { StatusBar } from "expo-status-bar";
import React from "react";
import WavyBackground from "react-native-wavy-background";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignIn from "./src/screens/SignIn";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;

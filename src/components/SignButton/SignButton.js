import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const SignButton = ({ Pressed }) => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={Pressed}>
      <Text style={styles.text}>GO</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#293241",
    width: "100%",
    padding: 0,
    marginVertical: 5,

    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
  },
});
export default SignButton;

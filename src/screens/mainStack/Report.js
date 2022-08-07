import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
//import Icon from "@expo/vector-icons/MaterialIcons";

import AppLoading from "expo-app-loading";

const Report = () => {
  let gpa = 1.02;
  let percentage = ((gpa - 0.0) / (4.0 - 0.0)) * 100;
  if (percentage > 100) {
    percentage = 100;
  }
  //${202 * (percentage / 100)}
  let gpa_style = function (value) {
    return {
      backgroundColor: `hsl(${202 * (percentage / 100)}, 46%, 72%)`,
      height: 50,
      borderRadius: 2,
      width: value.toString() + "%",
    };
  };
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.gpa_container}>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }}>
          GPA: {gpa}
        </Text>
        <View style={gpa_style(percentage)}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    backgroundColor: "#F9FBFC",
    flex: 1,
    paddingTop: 20,
  },
  gpa_container: {
    padding: 20,
    width: "100%",
  },
});

export default Report;

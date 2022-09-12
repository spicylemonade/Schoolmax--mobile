import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const Schedule = () => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.root}>
      <Calendar />
      <View
        style={{
          alignItems: "flex-start",
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }}>
          {" "}
          Classes{" "}
        </Text>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    //alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    paddingTop: 0,
  },
});
export default Schedule;

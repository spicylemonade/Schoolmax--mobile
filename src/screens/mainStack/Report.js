import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import HorizontalScrollMenu, {
  RouteProps,
} from "@nyashanziramasanga/react-native-horizontal-scroll-menu/src";
import { useState } from "react";
//import Icon from "@expo/vector-icons/MaterialIcons";

import AppLoading from "expo-app-loading";
import reports from "../../logic/report.json";
const Report = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  let gpa = 3.22;
  let percentage = ((gpa - 0.0) / (4.0 - 0.0)) * 100;
  if (percentage > 100) {
    percentage = 100;
  }
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
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //let x = reports.classes.map(ind=>(<Text>{ind}</Text>))
  const onPress = (route) => {
    setSelectedIndex(route.id);
    console.log("Tab pressed", route);
  };

  return (
    <View style={styles.root}>
      <View style={styles.gpa_container}>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
            color: "#293241",
          }}
        >
          GPA: {gpa}
        </Text>
        <View style={gpa_style(percentage)}></View>
      </View>
      <HorizontalScrollMenu
        items={reports}
        onPress={onPress}
        selected={selectedIndex}
        scrollAreaStyle={{ height: 10 }}
        activeBackgroundColor="#293241"
        buttonStyle={{
          backgroundColor: "#F9FBFC",
          borderColor: "#293241",
          margin: 10,
          height: 40,
          width: 40,
          borderRadius: 100,
        }}
        textStyle={{
          fontFamily: "Poppins_600SemiBold",
        }}
      />
      <ScrollView style={styles.report_view}>
        {reports[selectedIndex].grades.map((kit) => (
          <View style={styles.quarter_view}>
            <Text
              style={{
                padding: 10,
                fontFamily: "Poppins_600SemiBold",
                color: "white",
              }}
            >
              {kit}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    backgroundColor: "#F9FBFC",
    flex: 1,
    paddingTop: 10,
  },
  gpa_container: {
    padding: 20,
    width: "100%",
  },
  report_view: {
    width: "100%",
    paddingHorizontal: 20,
  },
  grade_view: {
    backgroundColor: "#F2F3F4",
    padding: 15,
    borderRadius: 5,
  },
  quarter_view: {
    backgroundColor: "#293241",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
});

export default Report;

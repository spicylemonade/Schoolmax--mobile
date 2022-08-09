import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
//import Icon from "@expo/vector-icons/MaterialIcons";

import AppLoading from "expo-app-loading";
import reports from "../../logic/report.json";
const Report = () => {
  let gpa = 1.02;
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
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //let x = reports.classes.map(ind=>(<Text>{ind}</Text>))

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
      <ScrollView style={styles.report_view}>
        {reports.map((item) => {
          const x = item.grades.map((kit) => <Text>{kit}</Text>);
          return (
            <View style={{ flex: 1 }}>
              <View style={styles.quarter_view}>
                <Text style={{ color: "white" }} key={item.Q}>
                  {item.Q}
                </Text>
              </View>

              {x}
            </View>
          );
        })}
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
    padding: 20,
  },
  grade_view: {},
  quarter_view: {
    backgroundColor: "#293241",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    color: "white",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { height: 15, width: 15 },
  },
});

export default Report;

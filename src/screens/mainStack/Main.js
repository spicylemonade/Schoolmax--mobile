import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Report from "./Report";
import Schedule from "./Schedule";

const tab = createBottomTabNavigator();
const Main = () => {
  return (
    <tab.Navigator>
      <tab.Screen name="Schedule" component={Schedule} />
      <tab.Screen name="Home" component={Home} />
      <tab.Screen name="Report" component={Report} />
    </tab.Navigator>
  );
};

export default Main;

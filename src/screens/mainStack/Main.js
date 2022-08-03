import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Report from "./Report";
import Schedule from "./Schedule";
import Icon from "@expo/vector-icons/MaterialIcons";

import { Ionicons } from "@expo/vector-icons";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";

const tab = createBottomTabNavigator();
const Main = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={{
        tabBarInactiveTintColor: "#293241",
        tabBarActiveTintColor: "#67bacb",
        headerTintColor: "#293241",
        headerTitleStyle: { fontFamily: "Poppins_600SemiBold" },
        headerRight: () => (
          <Ionicons
            name="person-circle"
            size={40}
            color={"#293241"}
            onPress={() => navigation.navigate("SignUp")}
            style={{ paddingRight: 10 }}
          />
        ),
      }}
    >
      <tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="schedule" color={color} size={30} />
          ),
        }}
      />
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="assistant" color={color} size={30} />
          ),
          tabBarBadge: 2,
        }}
      />
    </tab.Navigator>
  );
};

export default Main;

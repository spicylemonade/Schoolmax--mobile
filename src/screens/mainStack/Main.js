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

  async function trav() {
    navigation.navigate("SignUp");
  }
  return (
    <tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: "#293241",
        tabBarActiveTintColor: "#98c1d9",
        headerTintColor: "#293241",
        headerTitleStyle: { fontFamily: "Poppins_600SemiBold" },
        headerRight: () => (
          <Ionicons
            name="person-circle"
            size={40}
            color={"#293241"}
            onPress={trav}
            style={{ paddingRight: 10 }}
          />
        ),
        tabBarShowLabel: false,
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
          tabBarBadge: 1,
        }}
      />
    </tab.Navigator>
  );
};

export default Main;

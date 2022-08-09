import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
//import Icon from "@expo/vector-icons/MaterialIcons";
import classes from "../../logic/classes.json";
import AppLoading from "expo-app-loading";
const Home = () => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.greet_container}>
        <Text style={styles.greet}>Hello Geby</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/* maps over elemnts in json */}
        {classes.map((item) => (
          <View key={item.class} style={styles.item_container}>
            <Text style={styles.item}>
              {item.class} {item.grade}
            </Text>
            <Text style={styles.item}>{item.teacher}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F9FBFC",
  },
  greet_container: {
    width: "100%",
    paddingRight: "50%",
  },
  greet: {
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  item: {
    paddingHorizontal: 20,
    fontSize: 24,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
  },
  item_container: {
    width: "95%",
    backgroundColor: "#293241",
    marginTop: 15,
    borderRadius: 15,
    paddingVertical: 50,
  },
});

function class_box() {
  return <View></View>;
}
export default Home;

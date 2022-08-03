//undecided

import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

function GetStarted({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.Title}> Schoolmax+ </Text>
      </View>
      <View style={styles.info}>
        <Text
          style={{
            color: "black",
            fontFamily: "Poppins_400Regular",
            fontSize: 25,
          }}
        >
          App info
        </Text>
      </View>
      <TouchableOpacity
        title="Get Started"
        onPress={() => navigation.navigate("SignUp")}
        style={styles.Start}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins_700Bold",
            fontSize: 20,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    alignItems: "center",
  },
  Title: {
    color: "#F9FBFC",
    fontFamily: "Poppins_700Bold",
    fontSize: 45,
  },
  info: {
    marginTop: "20%",
  },
  header: {
    backgroundColor: "#293241",
    paddingTop: 70,
    top: 0,
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
  },
  Start: {
    position: "absolute",
    backgroundColor: "#293241",
    width: "90%",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    bottom: "2%",
  },
});

export default GetStarted;

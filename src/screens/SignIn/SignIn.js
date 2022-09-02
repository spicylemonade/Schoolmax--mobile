import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import Logo from "../../../assets/images/logo.png";
import SignInput from "../../components/SignInput";
import SignButton from "../../components/SignButton";
import WavyBackground from "react-native-wavy-background";

import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = ({ navigation }) => {
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      console.log("sign:", value);
      if (value !== null) {
        //await AsyncStorage.clear();
        navigation.navigate("Main");
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };
  useEffect(() => {
    readData();
  }, []);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  async function save() {
    //  if (Username === "" || Password === "") {
    //   alert("Must fill in username and password");
    // } else {
    await AsyncStorage.setItem("username", Username);
    await AsyncStorage.setItem("password", Password);
    navigation.navigate("Main");
    //  }
  }
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //console.log(height);
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        paddingTop: height * 0.12,
        backgroundColor: "#F9FBFC",
      }}
    >
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.Text}>Schoolmax+</Text>
      <View style={styles.Input}>
        <SignInput
          placeholder="Username"
          value={Username}
          setValue={(e) => setUsername(e)}
          textEntry={false}
          iconName={"person-outline"}
        />
        <SignInput
          placeholder="Password"
          value={Password}
          setValue={(e) => setPassword(e)}
          textEntry={true}
          iconName={"lock-open"}
        />
        <SignButton Pressed={save} />
      </View>
      <View
        style={{
          bottom: "0%",
          left: 0,
          right: 0,
          width: "100%",
          position: "absolute",
          zIndex: 0, // works on ios
          elevation: 0, // works on android
        }}
      >
        <WavyBackground
          height={height * 0.59}
          width={1100}
          amplitude={25}
          frequency={1}
          offset={170}
          color="#293241"
          bottom
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#F9FBFC",
  },
  logo: {
    width: "40%",
    maxWidth: 300,
    maxHeight: 200,
  },
  Input: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    width: "100%",
  },
  Text: {
    fontSize: 40,
    color: "#293241",
    fontFamily: "Poppins_700Bold",
  },
  Initial: {
    backgroundColor: "#293241",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignIn;

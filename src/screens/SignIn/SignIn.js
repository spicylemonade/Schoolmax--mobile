import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/Logo2.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import WavyBackground from "react-native-wavy-background";

import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const SignIn = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  function bPressed() {
    alert("button pressed");
  }
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.Text}>Schoolmax+</Text>
      <View style={styles.Input}>
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={(e) => setUsername(e)}
          textEntry={false}
          iconName={"person-outline"}
        />
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={(e) => setPassword(e)}
          textEntry={true}
          iconName={"lock-open"}
        />
        <CustomButton Pressed={bPressed} />
      </View>
      <View
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
        }}
      >
        <WavyBackground
          height={300}
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
});
export default SignIn;

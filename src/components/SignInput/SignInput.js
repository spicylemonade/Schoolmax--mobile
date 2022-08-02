import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

import Icon from "@expo/vector-icons/MaterialIcons";
import AppLoading from "expo-app-loading";

const SignButton = ({ value, setValue, placeholder, textEntry, iconName }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={30} color="#293241" />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={textEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 0.5,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical: 10,

    marginVertical: 10,

    flexDirection: "row",

    alignItems: "center",
  },
  input: {
    paddingLeft: 20,
    flex: 1,
    fontFamily: "Poppins_400Regular",
  },
});
export default SignButton;

import React from "react";
import { enableScreens } from "react-native-screens";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
//import Icon from "@expo/vector-icons/MaterialIcons";
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
      <Text style={styles.greet}>Hello Geby</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 30
  },
  greet:{
    fontFamily: 'Poppins_600SemiBold'
  }
})

function class_box(){
  
  return(
    <View>

    </View>
  )
}
export default Home;


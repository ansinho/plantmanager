import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie suas plantas de forma fácil</Text>

      <Image source={wateringImg} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
    textAlign: "center",
    marginTop: 30,
    color: colors.heading,
  },

  subtitle: {
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.heading,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    // paddingHorizontal: 15,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});

export default Welcome;

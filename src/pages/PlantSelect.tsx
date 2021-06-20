import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

import Header from "../components/Header";

import colors from "../styles/colors";

function PlantSelect() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

export default PlantSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

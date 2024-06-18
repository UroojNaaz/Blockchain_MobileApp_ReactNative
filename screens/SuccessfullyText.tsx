import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SuccessfullyText = () => {
  return <Text style={styles.successfully}>Successfully</Text>;
};

const styles = StyleSheet.create({
  successfully: {
    fontSize: FontSize.size_9xl,
    textDecoration: "underline",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGainsboro_100,
    textAlign: "center",
    width: 171,
    height: 40,
  },
});

export default SuccessfullyText;

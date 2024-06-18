import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TitleText = () => {
  return <Text style={styles.title}>Maroc</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_200,
    textAlign: "left",
    width: 249,
  },
});

export default TitleText;

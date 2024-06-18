import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Log in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
    width: 251,
  },
  view: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
  },
});

export default Frame;

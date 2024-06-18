import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const WithdrawText = () => {
  return <Text style={styles.withdraw}>Withdraw</Text>;
};

const styles = StyleSheet.create({
  withdraw: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
  },
});

export default WithdrawText;

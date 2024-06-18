import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RecentTransactionText = () => {
  return <Text style={styles.recentTransaction}>Recent transaction</Text>;
};

const styles = StyleSheet.create({
  recentTransaction: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
  },
});

export default RecentTransactionText;

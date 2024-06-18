import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type ComponentType = {
  title?: string;

  /** Style props */
  propBottom?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = ({ title, propBottom, propLeft }: ComponentType) => {
  const viewStyle = useMemo(() => {
    return {
      ...getStyleValue("bottom", propBottom),
      ...getStyleValue("left", propLeft),
    };
  }, [propBottom, propLeft]);

  return (
    <View style={[styles.view, viewStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.max}>MAX</Text>
      <Text style={styles.max}>USD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_200,
    textAlign: "left",
    width: 175,
  },
  max: {
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    marginLeft: 10,
  },
  view: {
    position: "absolute",
    bottom: 393,
    left: 41,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorSilver_200,
    borderWidth: 1,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
  },
});

export default Component;
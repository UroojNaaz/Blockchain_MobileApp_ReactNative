import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Confirm2 = () => {
  return (
    <View style={styles.confirm}>
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.viewBorder]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Text style={[styles.pleaseCheckYour, styles.viewPosition]}>
        Please check your inbox to reset your password.
      </Text>
      <View style={[styles.view, styles.viewPosition]}>
        <Text style={[styles.title, styles.timeClr]}>Log in</Text>
      </View>
      <Image
        style={styles.email21}
        contentFit="cover"
        source={require("../assets/email-2-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  viewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  viewPosition: {
    left: 48,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    top: "50%",
    position: "absolute",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorWhite,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorWhite,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.7,
    right: 20,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  systemLightStatusBar: {
    top: 0,
    left: 0,
    height: 44,
    display: "none",
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  pleaseCheckYour: {
    top: 300,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_100,
    width: 264,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 251,
    textAlign: "center",
  },
  view: {
    bottom: 322,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGray_300,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    borderWidth: 1,
    borderStyle: "solid",
  },
  email21: {
    top: 122,
    left: 130,
    width: 100,
    height: 100,
    position: "absolute",
  },
  confirm: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Confirm2;

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Confirm1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.confirm}
      onPress={() => navigation.navigate("ForgetPassword")}
    >
      <View style={[styles.systemLightStatusBar, styles.capIconPosition]}>
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.viewBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
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
      <Text style={[styles.registrationSuccessful, styles.timeClr]}>
        Registration Successful
      </Text>
      <Image
        style={styles.check1Icon}
        contentFit="cover"
        source={require("../assets/check-1.png")}
      />
      <Text style={[styles.pleaseCheckYour, styles.timePosition]}>
        Please check your inbox for your PIN
      </Text>
      <View style={[styles.view, styles.viewBorder]}>
        <Text style={[styles.title, styles.timeClr]}>Log in</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  viewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  timePosition: {
    letterSpacing: 0,
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
    position: "absolute",
    fontSize: FontSize.size_mini,
    top: "50%",
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
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: "50%",
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorWhite,
    width: 18,
    height: 7,
    top: "50%",
    position: "absolute",
  },
  battery: {
    marginTop: -4.7,
    right: 20,
    width: 24,
    height: 11,
    top: "50%",
    position: "absolute",
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
    backgroundColor: Color.colorDarkslategray_200,
  },
  registrationSuccessful: {
    top: 314,
    left: 67,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.itimRegular,
    width: 226,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  check1Icon: {
    top: 122,
    left: 130,
    width: 100,
    height: 100,
    position: "absolute",
  },
  pleaseCheckYour: {
    top: 452,
    left: 47,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_100,
    width: 264,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 251,
    textAlign: "center",
  },
  view: {
    bottom: 216,
    left: 38,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorGray_300,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
  },
  confirm: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Confirm1;

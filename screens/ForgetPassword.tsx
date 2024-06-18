import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const ForgetPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.forgetpassword}
      onPress={() => navigation.navigate("Confirm2")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.batteryPosition]} />
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
      <Text style={[styles.forgotPassword, styles.timePosition]}>
        Forgot password
      </Text>
      <Text style={styles.regainAccessTo}>
        Regain access to your account securely
      </Text>
      <View style={[styles.view, styles.viewBorder]}>
        <Text style={[styles.title, styles.titleTypo]}>Email</Text>
      </View>
      <View style={[styles.view1, styles.viewBorder]}>
        <Text style={[styles.title1, styles.titleTypo]}>Send</Text>
      </View>
      <Image
        style={styles.forgot1Icon}
        contentFit="cover"
        source={require("../assets/forgot-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    textAlign: "center",
    letterSpacing: 0,
    left: 21,
    color: Color.colorWhite,
    position: "absolute",
  },
  batteryPosition: {
    top: "50%",
    position: "absolute",
  },
  viewBorder: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderColor: Color.colorGray_300,
    width: 283,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  time: {
    marginTop: -8,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    left: 21,
    top: "50%",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorWhite,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
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
    width: 18,
    height: 7,
    backgroundColor: Color.colorWhite,
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
  forgotPassword: {
    top: 219,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.itimRegular,
    width: 319,
    textAlign: "center",
    letterSpacing: 0,
    left: 21,
  },
  regainAccessTo: {
    top: 279,
    left: 39,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_100,
    width: 283,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  title: {
    color: Color.black,
    width: 43,
  },
  view: {
    bottom: 400,
    left: 38,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  title1: {
    width: 251,
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  view1: {
    bottom: 317,
    left: 37,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
  },
  forgot1Icon: {
    top: 68,
    left: 139,
    width: 100,
    height: 100,
    position: "absolute",
  },
  forgetpassword: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default ForgetPassword;

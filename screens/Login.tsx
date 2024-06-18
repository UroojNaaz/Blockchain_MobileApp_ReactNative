import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.login}
      onPress={() => navigation.navigate("SignUp")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
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
      <Text style={[styles.welcome, styles.timeFlexBox]}>Welcome</Text>
      <Text style={[styles.getStartedWith, styles.enter1IconPosition]}>
        Get started with us
      </Text>
      <View style={[styles.view, styles.viewBorder]}>
        <Text style={[styles.title, styles.titleTypo]}>Pin</Text>
      </View>
      <View style={[styles.view1, styles.viewBorder]}>
        <Text style={[styles.title1, styles.titleTypo]}>Password</Text>
      </View>
      <View style={[styles.view2, styles.viewBorder]}>
        <Text style={[styles.title2, styles.title2Typo]}>Sign in</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.signUpTypo]}>
        Forgot password
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <View style={styles.loginChild} />
      <Text style={[styles.doNotHaveContainer, styles.title2Typo1]}>
        <Text style={styles.title2Typo}>{`Do not have an account? `}</Text>
        <Text style={styles.signUpTypo}>Sign up</Text>
      </Text>
      <Image
        style={[styles.enter1Icon, styles.enter1IconPosition]}
        contentFit="cover"
        source={require("../assets/enter-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  batteryPosition: {
    top: "50%",
    position: "absolute",
  },
  enter1IconPosition: {
    left: 112,
    position: "absolute",
  },
  viewBorder: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderColor: Color.colorGray_300,
    left: 38,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  titleTypo: {
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  title2Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  signUpTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_xs,
    top: 580,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  title2Typo1: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  time: {
    marginTop: -8,
    left: 21,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    fontSize: FontSize.size_mini,
    top: "50%",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderColor: Color.colorWhite,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
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
    top: "50%",
    position: "absolute",
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
  welcome: {
    top: 282,
    left: 104,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  getStartedWith: {
    top: 350,
    color: Color.colorGainsboro_100,
    width: 137,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    letterSpacing: 0,
    left: 112,
    fontSize: FontSize.size_mini,
  },
  title: {
    width: 28,
  },
  view: {
    bottom: 309,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderColor: Color.colorGray_300,
    left: 38,
    backgroundColor: Color.colorWhite,
  },
  title1: {
    width: 71,
  },
  view1: {
    bottom: 234,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderColor: Color.colorGray_300,
    left: 38,
    backgroundColor: Color.colorWhite,
  },
  title2: {
    width: 251,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view2: {
    bottom: 96,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderColor: Color.colorGray_300,
    left: 38,
  },
  forgotPassword: {
    left: 222,
    fontSize: FontSize.size_xs,
    top: 580,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  rememberMe: {
    left: 56,
    fontFamily: FontFamily.interRegular,
  },
  loginChild: {
    top: 581,
    left: 39,
    backgroundColor: Color.colorGainsboro_200,
    width: 14,
    height: 14,
    borderRadius: 3,
    position: "absolute",
  },
  doNotHaveContainer: {
    top: 718,
    left: 69,
    position: "absolute",
  },
  enter1Icon: {
    top: 113,
    width: 100,
    height: 100,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Login;

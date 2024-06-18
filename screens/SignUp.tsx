import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.signup}
      onPress={() => navigation.navigate("Confirm1")}
    >
      <View style={[styles.systemLightStatusBar, styles.capIconPosition]}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={styles.border} />
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
      <Text style={[styles.registration, styles.timeFlexBox]}>
        Registration
      </Text>
      <Text style={[styles.createYourAccount, styles.timeFlexBox]}>
        Create your account today
      </Text>
      <View style={[styles.view, styles.viewBorder1]}>
        <Text style={[styles.title, styles.titleTypo]}>Email</Text>
      </View>
      <View style={[styles.view1, styles.viewBorder]}>
        <Text style={[styles.title1, styles.titleTypo]}>Full Name</Text>
      </View>
      <View style={[styles.view2, styles.viewBorder]}>
        <Text style={[styles.title2, styles.titleTypo]}>Gender</Text>
      </View>
      <View style={[styles.view3, styles.viewBorder1]}>
        <Text style={[styles.title3, styles.titleTypo]}>Password</Text>
      </View>
      <View style={[styles.view4, styles.viewBorder1]}>
        <Text style={[styles.title4, styles.textTypo]}>Get started</Text>
      </View>
      <Text style={[styles.vousAvezUnContainer, styles.title4Typo]}>
        <Text style={styles.vousAvezUnTypo}>Vous avez un compte</Text>
        <Text style={styles.textTypo}>{` ? `}</Text>
        <Text style={styles.connectezVous}>connectez-vous.</Text>
      </Text>
      <Text style={[styles.bySigningUp, styles.vousAvezUnTypo]}>
        By signing up, you agree to the application's terms and conditions.
      </Text>
      <Image
        style={styles.addUser1Icon}
        contentFit="cover"
        source={require("../assets/adduser-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  viewBorder1: {
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
  viewBorder: {
    left: 36,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderColor: Color.colorGray_300,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  title4Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  vousAvezUnTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
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
    top: "50%",
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
  registration: {
    top: 219,
    left: 83,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorWhite,
  },
  createYourAccount: {
    top: 285,
    left: 57,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGainsboro_100,
    width: 264,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
  },
  title: {
    width: 40,
  },
  view: {
    bottom: 337,
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
    width: 68,
  },
  view1: {
    bottom: 400,
  },
  title2: {
    width: 51,
  },
  view2: {
    bottom: 274,
  },
  title3: {
    width: 71,
  },
  view3: {
    bottom: 211,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderColor: Color.colorGray_300,
    left: 38,
    backgroundColor: Color.colorWhite,
  },
  title4: {
    width: 251,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view4: {
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
  connectezVous: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  vousAvezUnContainer: {
    top: 718,
    left: 43,
    position: "absolute",
  },
  bySigningUp: {
    top: 602,
    left: 44,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    width: 275,
    color: Color.colorWhite,
    position: "absolute",
  },
  addUser1Icon: {
    top: 68,
    left: 130,
    width: 100,
    height: 100,
    position: "absolute",
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default SignUp;

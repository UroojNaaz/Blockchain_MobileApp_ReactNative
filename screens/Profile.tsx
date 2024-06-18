import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.profile}
      onPress={() => navigation.navigate("Profile1")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.profileBorder]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
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
      <View style={[styles.profileChild, styles.profilePosition]} />
      <Image
        style={[styles.wallet22, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/wallet-2-1.png")}
      />
      <Image
        style={[styles.avatar2Icon, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile1, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
      <View style={[styles.profileItem, styles.profilePosition]} />
      <View style={[styles.view, styles.viewLayout]}>
        <Text style={[styles.title, styles.titleTypo]}>Logout</Text>
      </View>
      <View style={[styles.profileInner, styles.viewLayout]} />
      <Text style={[styles.uroojNaz, styles.uroojNazPosition]}>Urooj Naz</Text>
      <Text style={[styles.id67236827, styles.uroojNazPosition]}>
        ID: 67236827
      </Text>
      <Text
        style={[styles.editProfile, styles.changeTypo]}
      >{`Edit profile `}</Text>
      <Image
        style={[styles.rightArrow2Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Image
        style={styles.rightArrow7Icon}
        contentFit="cover"
        source={require("../assets/rightarrow-71.png")}
      />
      <Text
        style={[styles.version10, styles.changeTypo]}
      >{`Version 1.0 `}</Text>
      <Text style={[styles.contactUs, styles.changeTypo]}>Contact US</Text>
      <Image
        style={[styles.rightArrow8Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Text style={[styles.faq, styles.changeTypo]}>FAQ</Text>
      <Image
        style={[styles.rightArrow11Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Text style={[styles.languages, styles.languagesPosition]}>
        Languages
      </Text>
      <Image
        style={[styles.rightArrow10Icon, styles.languagesPosition]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Text style={[styles.changeYourPassword, styles.changeTypo]}>
        Change your password
      </Text>
      <Image
        style={[styles.rightArrow3Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Text style={[styles.referral, styles.changeTypo]}>Referral</Text>
      <Image
        style={[styles.rightArrow6Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Text style={[styles.changePin, styles.changeTypo]}>Change PIN</Text>
      <Image
        style={[styles.rightArrow9Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Text style={[styles.currency, styles.currencyPosition]}>Currency</Text>
      <View style={[styles.rectangleView, styles.profilePosition]} />
      <Text style={[styles.profile2, styles.walletTypo]}>Profile</Text>
      <View style={[styles.rectangleView, styles.profilePosition]} />
      <Text style={[styles.profile2, styles.walletTypo]}>Profile</Text>
      <View style={[styles.profileChild2, styles.currencyPosition]} />
      <Text style={[styles.fcfa, styles.changeTypo]}>FCFA</Text>
      <Image
        style={[styles.downArrow15, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/downarrow-1-5.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  profileBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  profilePosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  wallet22Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  walletTypo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  flashTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  settingsTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  viewLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  uroojNazPosition: {
    color: Color.colorDarkslategray_100,
    left: 91,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  changeTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
  },
  rightIconLayout: {
    height: 16,
    width: 16,
    left: 322,
  },
  languagesPosition: {
    top: 446,
    position: "absolute",
  },
  currencyPosition: {
    top: 409,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: 21,
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
    top: "50%",
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
    height: 44,
    display: "none",
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  profileChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  wallet22: {
    left: 26,
  },
  avatar2Icon: {
    left: 300,
  },
  wallet: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    top: 776,
    left: 26,
  },
  flash: {
    left: 166,
    top: 776,
  },
  profile1: {
    top: 775,
    left: 299,
  },
  bitcoin32: {
    left: 164,
  },
  settings: {
    top: 62,
    left: 30,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  profileItem: {
    top: 102,
    height: 621,
    backgroundColor: Color.colorWhite,
  },
  title: {
    width: 251,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view: {
    bottom: 169,
    left: 43,
    backgroundColor: "#f5002c",
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
  },
  profileInner: {
    top: 132,
    borderColor: Color.colorGray_100,
    width: 60,
    height: 60,
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderStyle: "solid",
    left: 21,
  },
  uroojNaz: {
    top: 162,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  id67236827: {
    top: 147,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  editProfile: {
    left: 23,
    top: 258,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  rightArrow2Icon: {
    top: 258,
    position: "absolute",
  },
  rightArrow7Icon: {
    top: 155,
    left: 317,
    width: 20,
    height: 20,
    position: "absolute",
  },
  version10: {
    top: 684,
    left: 145,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  contactUs: {
    top: 487,
    fontSize: FontSize.size_sm,
    left: 21,
    position: "absolute",
  },
  rightArrow8Icon: {
    top: 488,
    position: "absolute",
  },
  faq: {
    top: 521,
    fontSize: FontSize.size_sm,
    left: 21,
    position: "absolute",
  },
  rightArrow11Icon: {
    top: 522,
    position: "absolute",
  },
  languages: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 21,
  },
  rightArrow10Icon: {
    height: 16,
    width: 16,
    left: 322,
  },
  changeYourPassword: {
    top: 294,
    fontSize: FontSize.size_sm,
    left: 21,
    position: "absolute",
  },
  rightArrow3Icon: {
    top: 295,
    position: "absolute",
  },
  referral: {
    top: 334,
    fontSize: FontSize.size_sm,
    left: 21,
    position: "absolute",
  },
  rightArrow6Icon: {
    top: 333,
    position: "absolute",
  },
  changePin: {
    top: 369,
    fontSize: FontSize.size_sm,
    left: 21,
    position: "absolute",
  },
  rightArrow9Icon: {
    top: 370,
    position: "absolute",
  },
  currency: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 21,
  },
  rectangleView: {
    top: 210,
    backgroundColor: Color.colorGainsboro_300,
    height: 30,
  },
  profile2: {
    top: 216,
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    left: 21,
  },
  profileChild2: {
    left: 295,
    borderRadius: 4,
    width: 50,
    height: 22,
    backgroundColor: Color.colorGainsboro_200,
  },
  fcfa: {
    top: 414,
    left: 297,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  downArrow15: {
    top: 412,
    position: "absolute",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Profile;

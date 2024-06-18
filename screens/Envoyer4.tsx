import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Envoyer4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.envoyer}
      onPress={() => navigation.navigate("Recevoir")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderBorder]} />
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
      <View style={[styles.envoyerChild, styles.envoyerPosition]} />
      <View style={[styles.envoyerItem, styles.envoyerPosition]} />
      <Text style={[styles.paste, styles.maxTypo]}>PASTE</Text>
      <Image
        style={styles.qrCodeScan12}
        contentFit="cover"
        source={require("../assets/qrcodescan-1-1.png")}
      />
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
      <Text style={[styles.wallet, styles.maxTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.sendToAPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.sendToA, styles.sendToAPosition]}>
        Send to a User
      </Text>
      <Text style={[styles.newBeneficiary, styles.sendToATypo]}>
        New Beneficiary
      </Text>
      <Text style={styles.pleaseEnterThe}>
        Please enter the beneficiary's ID.
      </Text>
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>Address BTC</Text>
      </View>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={[styles.title1, styles.titleTypo]}>Amount BTC</Text>
        <Text style={[styles.max, styles.maxTypo]}>MAX</Text>
        <Text style={[styles.max, styles.maxTypo]}>USD</Text>
      </View>
      <View style={[styles.view2, styles.viewSpaceBlock]}>
        <Text style={[styles.addressWallet, styles.idTypo]}>
          Address Wallet
        </Text>
      </View>
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <View style={[styles.view3, styles.viewSpaceBlock]}>
        <Text style={[styles.title2, styles.titleTypo]}>USDT</Text>
      </View>
      <Image
        style={styles.downArrow15}
        contentFit="cover"
        source={require("../assets/downarrow-1-2.png")}
      />
      <View style={[styles.envoyerInner, styles.envoyerPosition]} />
      <Text style={[styles.successfully, styles.sendToATypo]}>
        Successfully
      </Text>
      <Image
        style={styles.check2Icon}
        contentFit="cover"
        source={require("../assets/check-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  envoyerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  maxTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  wallet22Layout: {
    height: 35,
    width: 35,
    top: 737,
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
  sendToAPosition: {
    top: 66,
    position: "absolute",
  },
  sendToATypo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_200,
  },
  idTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
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
  envoyerChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  envoyerItem: {
    top: 102,
    height: 621,
    backgroundColor: Color.colorWhite,
  },
  paste: {
    top: 374,
    left: 231,
    position: "absolute",
  },
  qrCodeScan12: {
    top: 372,
    left: 283,
    height: 20,
    width: 20,
    position: "absolute",
  },
  wallet22: {
    left: 26,
  },
  avatar2Icon: {
    left: 300,
  },
  wallet: {
    top: 776,
    left: 26,
    position: "absolute",
  },
  flash: {
    left: 166,
    top: 776,
  },
  profile: {
    top: 775,
    left: 299,
  },
  bitcoin32: {
    left: 164,
  },
  leftArrow1Icon: {
    left: 7,
    height: 18,
    width: 20,
  },
  sendToA: {
    left: 51,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  newBeneficiary: {
    top: 143,
    left: 102,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  pleaseEnterThe: {
    top: 176,
    left: 88,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_600,
    width: 215,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    position: "absolute",
  },
  title: {
    width: 99,
    color: Color.colorDimgray_200,
    textAlign: "center",
  },
  view: {
    bottom: 397,
    width: 283,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    left: 37,
  },
  title1: {
    width: 175,
    color: Color.colorDimgray_200,
    textAlign: "left",
  },
  max: {
    marginLeft: 10,
  },
  view1: {
    bottom: 320,
    left: 39,
    width: 283,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  addressWallet: {
    width: 115,
    height: 10,
    color: Color.colorWhite,
  },
  view2: {
    bottom: 544,
    left: 145,
    borderRadius: Border.br_81xl,
    width: 150,
    height: 36,
    backgroundColor: Color.colorDarkslategray_200,
  },
  id: {
    top: 229,
    left: 84,
    width: 46,
    color: Color.colorDimgray_200,
    position: "absolute",
  },
  title2: {
    width: 62,
    color: Color.colorDimgray_200,
    textAlign: "center",
  },
  view3: {
    bottom: 471,
    width: 283,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    left: 37,
  },
  downArrow15: {
    top: 291,
    left: 275,
    width: 25,
    height: 25,
    position: "absolute",
  },
  envoyerInner: {
    top: 624,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen,
    height: 99,
  },
  successfully: {
    top: 654,
    left: 130,
    fontSize: FontSize.size_9xl,
    textDecoration: "underline",
    color: Color.colorGainsboro_100,
    width: 171,
    height: 40,
    position: "absolute",
  },
  check2Icon: {
    top: 649,
    left: 54,
    width: 50,
    height: 50,
    position: "absolute",
  },
  envoyer: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Envoyer4;

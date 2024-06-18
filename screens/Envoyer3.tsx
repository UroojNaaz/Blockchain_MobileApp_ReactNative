import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Envoyer3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.envoyer}
      onPress={() => navigation.navigate("Recevoir3")}
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
        Send to a user
      </Text>
      <Text style={[styles.newBeneficiary, styles.sendToATypo]}>
        New Beneficiary
      </Text>
      <Text style={styles.pleaseEnterThe}>
        Please enter the beneficiary's ID.
      </Text>
      <View style={[styles.view, styles.viewBorder]}>
        <Text style={[styles.title, styles.titleTypo]}>Address BTC</Text>
      </View>
      <View style={[styles.view1, styles.viewPosition]}>
        <Text style={[styles.title1, styles.titleTypo]}>Amount BTC</Text>
        <Text style={[styles.max, styles.maxTypo]}>MAX</Text>
        <Text style={[styles.max, styles.maxTypo]}>USD</Text>
      </View>
      <View style={[styles.view2, styles.viewSpaceBlock]}>
        <Text style={[styles.title2, styles.titleTypo]}>Send</Text>
      </View>
      <View style={[styles.view3, styles.viewSpaceBlock]}>
        <Text style={[styles.addressWallet, styles.idTypo]}>
          Address Wallet
        </Text>
      </View>
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <View style={[styles.view4, styles.viewBorder]}>
        <Text style={[styles.title3, styles.titleTypo]}>USDT</Text>
      </View>
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
    backgroundColor: Color.colorWhite,
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
  viewBorder: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  viewPosition: {
    left: 39,
    width: 283,
  },
  viewSpaceBlock: {
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
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
    borderWidth: 1,
    borderStyle: "solid",
  },
  envoyerItem: {
    top: 102,
    height: 621,
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
    left: 44,
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
    left: 37,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
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
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    left: 39,
  },
  title2: {
    width: 251,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view2: {
    bottom: 229,
    left: 39,
    width: 283,
  },
  addressWallet: {
    width: 115,
    height: 10,
    color: Color.colorWhite,
  },
  view3: {
    bottom: 544,
    left: 145,
    width: 150,
    height: 36,
  },
  id: {
    top: 229,
    left: 84,
    width: 46,
    color: Color.colorDimgray_200,
    position: "absolute",
  },
  title3: {
    width: 62,
    color: Color.colorDimgray_200,
    textAlign: "center",
  },
  view4: {
    bottom: 471,
    width: 283,
    left: 37,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
  },
  envoyer: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Envoyer3;

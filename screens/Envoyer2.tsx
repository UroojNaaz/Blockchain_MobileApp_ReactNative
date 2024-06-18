import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Envoyer2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.envoyer}
      onPress={() => navigation.navigate("Envoyer1")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
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
      <Text style={[styles.wallet, styles.pasteTypo]}>Wallet</Text>
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
        Please enter the beneficiary's ID
      </Text>
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>ID</Text>
        <Text style={[styles.paste, styles.pasteTypo]}>PASTE</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <Text style={[styles.title1, styles.titleTypo]}>Send</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]} />
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <Text style={[styles.adresseWallet, styles.idTypo]}>Adresse Wallet</Text>
      <View style={[styles.view3, styles.viewSpaceBlock]}>
        <Text style={[styles.title2, styles.titleTypo]}>Amount BTC</Text>
        <Text style={[styles.paste, styles.pasteTypo]}>MAX</Text>
        <Text style={[styles.paste, styles.pasteTypo]}>USD</Text>
      </View>
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
  wallet22Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  pasteTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
    width: 283,
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  viewLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  idTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: 229,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
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
    width: 20,
    height: 18,
  },
  sendToA: {
    left: 40,
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
    width: 196,
    color: Color.colorDimgray_200,
    textAlign: "left",
  },
  paste: {
    marginLeft: 10,
  },
  view: {
    bottom: 470,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    left: 39,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  title1: {
    width: 251,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view1: {
    bottom: 306,
    left: 37,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
  },
  view2: {
    bottom: 544,
    left: 62,
    width: 100,
    height: 36,
  },
  id: {
    left: 89,
    width: 46,
    color: Color.colorWhite,
  },
  adresseWallet: {
    left: 182,
    width: 110,
    color: Color.colorDimgray_200,
  },
  title2: {
    width: 175,
    color: Color.colorDimgray_200,
    textAlign: "left",
  },
  view3: {
    bottom: 396,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    left: 39,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
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

export default Envoyer2;

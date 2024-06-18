import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SendBTC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.sendBtc}
      onPress={() => navigation.navigate("ConfirmBTC")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
      <View style={[styles.sendBtcChild, styles.sendPosition]} />
      <View style={[styles.sendBtcItem, styles.sendPosition]} />
      <Image
        style={styles.qrCodeScan11}
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
      <Text style={[styles.wallet, styles.pasteTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.nextPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.sendBtc1, styles.nextPosition]}>Send BTC</Text>
      <Text style={[styles.next, styles.nextPosition]}>Next</Text>
      <Text style={[styles.recipientsAddress, styles.timeTypo]}>
        Recipient's address
      </Text>
      <Image
        style={[styles.sendBtcInner, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Text style={[styles.addressBtc, styles.btcTypo]}>Address BTC</Text>
      <Text style={[styles.paste, styles.pasteTypo]}>Paste</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Text style={[styles.amountBtc, styles.btcTypo]}>Amount BTC</Text>
      <Text style={[styles.max, styles.maxTypo]}>MAX</Text>
      <Text style={[styles.usd, styles.maxTypo]}>USD</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  sendPosition: {
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
    fontSize: FontSize.size_xs,
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
  nextPosition: {
    top: 66,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 320,
    left: 15,
    position: "absolute",
  },
  btcTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  maxTypo: {
    top: 248,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhite,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
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
  sendBtcChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  sendBtcItem: {
    top: 102,
    height: 621,
  },
  qrCodeScan11: {
    top: 182,
    left: 315,
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
  sendBtc1: {
    left: 62,
    fontFamily: FontFamily.interSemiBold,
    top: 66,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  next: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    left: 300,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
  },
  recipientsAddress: {
    top: 149,
    left: 12,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    width: 135,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  sendBtcInner: {
    top: 206,
  },
  addressBtc: {
    top: 187,
    left: 15,
    color: Color.colorGray_600,
  },
  paste: {
    top: 184,
    left: 268,
  },
  lineIcon: {
    top: 270,
  },
  amountBtc: {
    top: 251,
    left: 16,
  },
  max: {
    left: 270,
  },
  usd: {
    left: 310,
  },
  sendBtc: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default SendBTC;

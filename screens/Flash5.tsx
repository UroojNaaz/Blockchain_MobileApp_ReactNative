import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Flash5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.flash}
      onPress={() => navigation.navigate("DetailTransaction")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconLayout]}
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
      <View style={[styles.flashChild, styles.flashPosition]} />
      <Image
        style={[styles.wallet23, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/wallet-2-1.png")}
      />
      <Image
        style={[styles.avatar3Icon, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Text style={[styles.wallet, styles.textClr]}>Wallet</Text>
      <Text style={[styles.flash1, styles.flash1Typo]}>Flash</Text>
      <Text style={[styles.profile, styles.flash1Typo]}>Profile</Text>
      <Image
        style={[styles.bitcoin33, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <View style={[styles.flashItem, styles.flashPosition]} />
      <Text style={[styles.flash2, styles.text1Typo]}>Flash</Text>
      <View style={[styles.flashInner, styles.flashInnerLayout]} />
      <Text style={[styles.receive, styles.sendClr]}>Receive</Text>
      <View style={[styles.rectangleView, styles.flashInnerLayout]} />
      <Text style={[styles.send, styles.sendClr]}>Send</Text>
      <Text style={[styles.recentTransaction, styles.sendClr]}>
        Recent Transaction
      </Text>
      <Text style={[styles.text, styles.textClr]}>{`100,000 $ `}</Text>
      <View style={[styles.flashChild1, styles.flashChildPosition]} />
      <View style={[styles.flashChild2, styles.flashChildPosition]} />
      <Text style={[styles.bitcoinReceived, styles.bitcoinTypo]}>
        Bitcoin Received
      </Text>
      <Text style={[styles.btc, styles.btcTypo]}>0,1584 BTC</Text>
      <Text style={[styles.zkuwqo43nm8120, styles.zkuwqo43nmTypo]}>
        ZKuwqo43Nm8120...
      </Text>
      <Text style={[styles.sept, styles.septTypo]}>24 Sept</Text>
      <Text style={[styles.successful, styles.text1Typo]}>successful</Text>
      <Text style={[styles.btc, styles.btcTypo]}>0,1584 BTC</Text>
      <Text style={[styles.bitcoinSent, styles.bitcoinTypo]}>Bitcoin Sent</Text>
      <Text style={[styles.zkuwqo43nm81201, styles.zkuwqo43nmTypo]}>
        ZKuwqo43Nm8120...
      </Text>
      <Text style={[styles.sept1, styles.septTypo]}>24 Sept</Text>
      <Text style={[styles.failed, styles.text1Typo]}>failed</Text>
      <Text style={[styles.btc2, styles.btcTypo]}>0,1584 BTC</Text>
      <Text style={[styles.text1, styles.sendClr]}>{` `}</Text>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.import1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/import-1.png")}
      />
      <Image
        style={[styles.export1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/export-1.png")}
      />
      <Text style={[styles.flashPanel, styles.flashTypo]}>Flash panel</Text>
      <Text style={[styles.flashWallet, styles.flashTypo]}>Flash Wallet</Text>
      <View style={[styles.lineView, styles.capIconLayout]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capIconLayout: {
    height: 4,
    position: "absolute",
  },
  flashPosition: {
    width: 360,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  wallet23Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    position: "absolute",
  },
  flash1Typo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  flashInnerLayout: {
    height: 36,
    width: 149,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_81xl,
    top: 266,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  sendClr: {
    color: Color.colorDimgray_200,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  flashChildPosition: {
    backgroundColor: Color.colorGainsboro_200,
    width: 360,
    left: 0,
    position: "absolute",
  },
  bitcoinTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  btcTypo: {
    left: 258,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  zkuwqo43nmTypo: {
    fontFamily: FontFamily.interRegular,
    left: 82,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  septTypo: {
    left: 296,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    left: 23,
    position: "absolute",
  },
  flashTypo: {
    top: 130,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
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
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    top: "50%",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    borderColor: Color.colorWhite,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    opacity: 0.4,
    top: "50%",
    height: 4,
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
    height: 44,
    display: "none",
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  flashChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  wallet23: {
    left: 26,
  },
  avatar3Icon: {
    left: 300,
  },
  wallet: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 776,
    left: 26,
    letterSpacing: 0,
    color: Color.colorDarkslategray_200,
  },
  flash1: {
    left: 166,
    top: 776,
  },
  profile: {
    top: 775,
    left: 299,
  },
  bitcoin33: {
    left: 164,
  },
  flashItem: {
    top: 159,
    height: 565,
  },
  flash2: {
    top: 62,
    left: 154,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    color: Color.colorWhite,
  },
  flashInner: {
    left: 195,
  },
  receive: {
    left: 243,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_200,
    top: 275,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  rectangleView: {
    left: 16,
  },
  send: {
    left: 68,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_200,
    top: 275,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  recentTransaction: {
    top: 351,
    left: 22,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_200,
  },
  text: {
    top: 184,
    left: 89,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.itimRegular,
  },
  flashChild1: {
    top: 331,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 392,
  },
  flashChild2: {
    top: 376,
    height: 347,
  },
  bitcoinReceived: {
    top: 413,
    left: 82,
    color: Color.colorDarkslategray_100,
  },
  btc: {
    top: 411,
  },
  zkuwqo43nm8120: {
    top: 430,
  },
  sept: {
    top: 426,
  },
  successful: {
    top: 441,
    left: 278,
    color: Color.colorMediumspringgreen,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bitcoinSent: {
    top: 494,
    left: 81,
  },
  zkuwqo43nm81201: {
    top: 511,
  },
  sept1: {
    top: 507,
  },
  failed: {
    top: 521,
    left: 309,
    color: Color.colorCrimson_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  btc2: {
    top: 492,
  },
  text1: {
    top: 432,
    left: 123,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  lineIcon: {
    top: 470,
    left: 31,
    width: 306,
    height: 1,
    position: "absolute",
  },
  import1Icon: {
    top: 497,
  },
  export1Icon: {
    top: 417,
  },
  flashPanel: {
    left: 54,
    color: Color.colorSilver_200,
  },
  flashWallet: {
    left: 231,
    color: Color.colorWhite,
  },
  lineView: {
    top: 157,
    left: 223,
    borderTopWidth: 4,
    width: 96,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: 4,
  },
  flash: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Flash5;

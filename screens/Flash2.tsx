import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Flash2 = () => {
  return (
    <View style={styles.flash}>
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
      <Text style={[styles.wallet, styles.collerTypo]}>Wallet</Text>
      <Text style={[styles.marche, styles.marcheTypo]}>Marche</Text>
      <Text style={[styles.profil, styles.marcheTypo]}>Profil</Text>
      <Image
        style={[styles.bitcoin33, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.coller, styles.collerTypo]}>COLLER</Text>
      <Image
        style={[styles.qrCodeScan12, styles.codeLayout]}
        contentFit="cover"
        source={require("../assets/qrcodescan-1-2.png")}
      />
      <Image
        style={[styles.qrCodeScan121, styles.codeLayout]}
        contentFit="cover"
        source={require("../assets/qrcodescan-1-1.png")}
      />
      <View style={[styles.flashItem, styles.flashPosition]} />
      <Text style={[styles.flash1, styles.flash1Typo]}>Flash</Text>
      <View style={styles.view}>
        <Text style={styles.title}>Send</Text>
      </View>
      <View style={[styles.flashInner, styles.flashPosition]} />
      <Text style={[styles.successfully, styles.successfullyClr]}>
        Successfully
      </Text>
      <Text style={[styles.loremIpsumIs, styles.successfullyClr]}>
        Lorem Ipsum is simply dummy text.
      </Text>
      <Image
        style={styles.check2Icon}
        contentFit="cover"
        source={require("../assets/check-2.png")}
      />
      <Text style={[styles.flashPavel, styles.flashTypo]}>Flash pavel</Text>
      <Text style={[styles.flashWallet, styles.flashTypo]}>Flash Wallet</Text>
      <View style={[styles.lineView, styles.capIconLayout]} />
      <View style={[styles.view1, styles.viewBorder]}>
        <Text style={[styles.title1, styles.titleTypo]}>Fees</Text>
      </View>
      <Image
        style={styles.downArrow13}
        contentFit="cover"
        source={require("../assets/downarrow-1-1.png")}
      />
      <Image
        style={styles.downArrow13}
        contentFit="cover"
        source={require("../assets/downarrow-1-1.png")}
      />
      <View style={[styles.view2, styles.viewBorder]}>
        <Text style={[styles.title1, styles.titleTypo]}>ID</Text>
      </View>
      <Text style={[styles.coller1, styles.collerTypo]}>COLLER</Text>
      <Text style={[styles.max, styles.maxTypo]}>MAX</Text>
      <Text style={[styles.usd, styles.maxTypo]}>USD</Text>
      <View style={[styles.view3, styles.viewBorder]}>
        <Text style={[styles.title3, styles.titleTypo]}>Amount</Text>
      </View>
      <View style={[styles.view4, styles.viewBorder]}>
        <Text style={[styles.title1, styles.titleTypo]}>Crypto</Text>
      </View>
      <Image
        style={styles.downArrow141}
        contentFit="cover"
        source={require("../assets/downarrow-1-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorWhite,
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
    left: 0,
    position: "absolute",
  },
  wallet23Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  collerTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  marcheTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  codeLayout: {
    height: 20,
    position: "absolute",
  },
  flash1Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  successfullyClr: {
    color: Color.colorGainsboro_100,
    textAlign: "center",
    letterSpacing: 0,
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
  viewBorder: {
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  titleTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  maxTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 361,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
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
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  flashChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    backgroundColor: Color.colorWhite,
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
    top: 776,
    left: 26,
  },
  marche: {
    left: 160,
    top: 776,
  },
  profil: {
    top: 775,
    left: 303,
  },
  bitcoin33: {
    left: 164,
  },
  coller: {
    left: 53,
    width: 52,
    top: 282,
  },
  qrCodeScan12: {
    left: 115,
    width: 23,
    top: 282,
  },
  qrCodeScan121: {
    top: 279,
    left: 289,
    width: 20,
  },
  flashItem: {
    top: 159,
    height: 564,
    backgroundColor: Color.colorWhite,
  },
  flash1: {
    top: 62,
    left: 154,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorWhite,
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
  },
  title: {
    width: 251,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view: {
    bottom: 240,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    left: 38,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  flashInner: {
    top: 624,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen,
    height: 99,
  },
  successfully: {
    left: 146,
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    width: 124,
    top: 645,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  loremIpsumIs: {
    top: 676,
    left: 88,
    fontFamily: FontFamily.interRegular,
    width: 264,
    fontSize: FontSize.size_xs,
    color: Color.colorGainsboro_100,
  },
  check2Icon: {
    left: 28,
    width: 50,
    height: 50,
    top: 645,
    position: "absolute",
  },
  flashPavel: {
    left: 49,
    color: Color.colorWhite,
    top: 130,
  },
  flashWallet: {
    left: 225,
    color: Color.colorSilver_200,
  },
  lineView: {
    top: 157,
    left: 36,
    borderTopWidth: 4,
    width: 96,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: 4,
  },
  title1: {
    width: 93,
  },
  view1: {
    bottom: 334,
    left: 38,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
  },
  downArrow13: {
    top: 429,
    left: 276,
    width: 28,
    height: 28,
    position: "absolute",
  },
  view2: {
    bottom: 484,
    left: 38,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
  },
  coller1: {
    top: 289,
    left: 258,
  },
  max: {
    left: 246,
  },
  usd: {
    left: 284,
  },
  title3: {
    width: 110,
  },
  view3: {
    bottom: 409,
    left: 38,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
  },
  view4: {
    bottom: 557,
    left: 34,
  },
  downArrow141: {
    top: 205,
    left: 272,
    width: 25,
    height: 25,
    position: "absolute",
  },
  flash: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Flash2;

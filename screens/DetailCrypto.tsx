import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const DetailCrypto = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.detailCrypto}
      onPress={() => navigation.navigate("SendBTC")}
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
      <View style={[styles.detailCryptoChild, styles.detailPosition]} />
      <View style={[styles.detailCryptoItem, styles.detailPosition]} />
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
      <Text style={[styles.wallet, styles.ethTypo1]}>Wallet</Text>
      <Text style={[styles.flash, styles.ethTypo1]}>Flash</Text>
      <Text style={[styles.profile, styles.ethTypo1]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.ethereumPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={styles.return}>Return</Text>
      <Text style={[styles.coin, styles.ethTypo]}>COIN</Text>
      <Text style={[styles.us2041, styles.ethTypo]}>= US$20.41</Text>
      <Text style={[styles.eth, styles.ethTypo]}>0.1196837 ETH</Text>
      <Text style={[styles.eth1, styles.ethTypo1]}>+0.0811598 ETH</Text>
      <Text style={[styles.us17057106, styles.ethTypo]}>
        <Text style={styles.us17057}>{`US$170.57  `}</Text>
        <Text style={styles.text}>+1.06%</Text>
      </Text>
      <Text style={[styles.ethereum, styles.ethereumPosition]}>Ethereum</Text>
      <View style={styles.detailCryptoInner} />
      <Image
        style={styles.imagesRemovebgPreview2Icon}
        contentFit="cover"
        source={require("../assets/imagesremovebgpreview-2.png")}
      />
      <View style={[styles.rectangleView, styles.detailChildLayout1]} />
      <View style={[styles.detailCryptoChild1, styles.detailChildLayout1]} />
      <View style={[styles.detailCryptoChild2, styles.detailChildLayout1]} />
      <Image
        style={[styles.upArrow12, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/uparrow-1-2.png")}
      />
      <Text style={[styles.send, styles.sendTypo]}>Send</Text>
      <Text style={styles.receive}>Receive</Text>
      <Text style={[styles.copy, styles.copyPosition]}>Copy</Text>
      <Image
        style={[styles.downArrow2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/downarrow-2.png")}
      />
      <Image
        style={[styles.copy2Icon, styles.copyPosition]}
        contentFit="cover"
        source={require("../assets/copy-2.png")}
      />
      <Text style={[styles.sep302020, styles.sepTypo]}>Sep 30, 2020</Text>
      <Text style={[styles.received, styles.sentTypo]}>Received</Text>
      <Text
        style={[styles.from0x52653236273726, styles.to0x52653236273726Typo]}
      >
        From: 0x526532....36273726
      </Text>
      <Image
        style={[styles.wallet13, styles.walletLayout]}
        contentFit="cover"
        source={require("../assets/wallet-1-3.png")}
      />
      <Image
        style={styles.lineChart1Icon}
        contentFit="cover"
        source={require("../assets/linechart-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.detailCryptoChild3, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.eth2, styles.ethTypo1]}>-0.13 ETH</Text>
      <Text style={[styles.sep282020, styles.sepTypo]}>Sep 28, 2020</Text>
      <Text style={[styles.sent, styles.sentTypo]}>Sent</Text>
      <Text style={[styles.to0x52653236273726, styles.to0x52653236273726Typo]}>
        To: 0x526532....36273726
      </Text>
      <Image
        style={[styles.wallet14, styles.walletLayout]}
        contentFit="cover"
        source={require("../assets/wallet-1-3.png")}
      />
      <Image
        style={[styles.detailCryptoChild4, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
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
  detailPosition: {
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
  ethTypo1: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  ethereumPosition: {
    top: 66,
    position: "absolute",
  },
  ethTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  detailChildLayout1: {
    height: 80,
    width: 80,
    borderRadius: Border.br_3xs,
    top: 335,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  iconLayout: {
    top: 348,
    height: 35,
    width: 35,
  },
  sendTypo: {
    fontSize: FontSize.size_sm,
    top: 388,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
  },
  copyPosition: {
    left: 277,
    position: "absolute",
  },
  sepTypo: {
    color: Color.colorDimgray_200,
    left: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  sentTypo: {
    width: 135,
    textAlign: "left",
    left: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  to0x52653236273726Typo: {
    color: Color.colorGray_600,
    left: 64,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  walletLayout: {
    width: 30,
    height: 30,
    left: 21,
    position: "absolute",
  },
  detailChildLayout: {
    height: 1,
    width: 306,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 21,
    color: Color.colorWhite,
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
  detailCryptoChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  detailCryptoItem: {
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
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
    top: 776,
    left: 26,
  },
  flash: {
    left: 166,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
    top: 776,
  },
  profile: {
    top: 775,
    left: 299,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  bitcoin32: {
    left: 164,
  },
  leftArrow1Icon: {
    left: 7,
    width: 20,
    height: 18,
  },
  return: {
    left: 35,
    fontFamily: FontFamily.interRegular,
    top: 66,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  coin: {
    left: 16,
    top: 117,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.colorDimgray_100,
  },
  us2041: {
    top: 289,
    left: 134,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
  },
  eth: {
    top: 254,
    left: 87,
    fontSize: 25,
    color: "#454545",
  },
  eth1: {
    top: 510,
    left: 245,
    color: Color.colorMediumspringgreen,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  us17057: {
    color: Color.colorDimgray_100,
  },
  text: {
    color: Color.colorMediumspringgreen,
  },
  us17057106: {
    left: 202,
    top: 117,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  ethereum: {
    left: 145,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    top: 66,
    fontSize: FontSize.size_mini,
  },
  detailCryptoInner: {
    top: 61,
    left: 296,
    borderRadius: Border.br_xl,
    backgroundColor: "#3180ad",
    width: 50,
    height: 30,
    position: "absolute",
  },
  imagesRemovebgPreview2Icon: {
    top: 168,
    width: 70,
    height: 70,
    left: 140,
    position: "absolute",
  },
  rectangleView: {
    left: 26,
  },
  detailCryptoChild1: {
    left: 140,
  },
  detailCryptoChild2: {
    left: 255,
  },
  upArrow12: {
    left: 46,
    position: "absolute",
  },
  send: {
    left: 48,
    position: "absolute",
  },
  receive: {
    left: 155,
    top: 388,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  copy: {
    fontSize: FontSize.size_sm,
    top: 388,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
  },
  downArrow2Icon: {
    left: 160,
    position: "absolute",
  },
  copy2Icon: {
    top: 348,
    height: 35,
    width: 35,
  },
  sep302020: {
    top: 460,
  },
  received: {
    top: 500,
  },
  from0x52653236273726: {
    top: 518,
  },
  wallet13: {
    top: 503,
  },
  lineChart1Icon: {
    top: 63,
    left: 308,
    width: 25,
    height: 25,
    position: "absolute",
  },
  lineIcon: {
    top: 547,
    left: 36,
    height: 1,
    width: 306,
  },
  detailCryptoChild3: {
    top: 445,
    left: 30,
  },
  eth2: {
    top: 613,
    left: 281,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  sep282020: {
    top: 562,
  },
  sent: {
    top: 602,
  },
  to0x52653236273726: {
    top: 620,
  },
  wallet14: {
    top: 605,
  },
  detailCryptoChild4: {
    top: 649,
    left: 36,
    height: 1,
    width: 306,
  },
  detailCrypto: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default DetailCrypto;

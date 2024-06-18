import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PaymentMethods = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.paymentMethods}
      onPress={() => navigation.navigate("PaymentMethods3")}
    >
      <View style={[styles.systemLightStatusBar, styles.paymentPosition1]}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.viewBorder]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.viewBg]} />
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
      <View style={[styles.paymentMethodsChild, styles.paymentPosition]} />
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
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.leftArrow1IconPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.paymentMethods1, styles.leftArrow1IconPosition]}>
        Payment methods
      </Text>
      <View style={[styles.paymentMethodsItem, styles.paymentPosition]} />
      <Text style={styles.selectYourPayment}>Select Your Payment Currency</Text>
      <Image
        style={[styles.paymentMethodsInner, styles.paymentLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.bitcoin, styles.bitcoinTypo]}>Bitcoin</Text>
      <Text style={[styles.btc, styles.btcTypo]}>0.000355734 BTC</Text>
      <Image
        style={[styles.lineIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.paymentMethodsChild1, styles.paymentLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.binance, styles.bitcoinTypo]}>Binance</Text>
      <Text style={[styles.btc1, styles.btcTypo]}>0.000355734 BTC</Text>
      <View style={[styles.view, styles.viewBg]}>
        <Image
          style={styles.search1Icon}
          contentFit="cover"
          source={require("../assets/search-1.png")}
        />
        <Text style={styles.title}>Search for currency</Text>
      </View>
      <Image
        style={styles.bitcoin3Icon}
        contentFit="cover"
        source={require("../assets/bitcoin-1.png")}
      />
      <Image
        style={[styles.bnb62193881280RemovebgPrevIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bnb6219388-1280removebgpreview-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  paymentPosition1: {
    left: 0,
    position: "absolute",
  },
  viewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  viewBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  paymentPosition: {
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
  walletTypo: {
    fontFamily: FontFamily.interSemiBold,
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
  leftArrow1IconPosition: {
    top: 66,
    position: "absolute",
  },
  paymentLayout: {
    height: 1,
    width: 360,
  },
  bitcoinTypo: {
    width: 183,
    color: Color.colorDarkslategray_100,
    left: 99,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  btcTypo: {
    width: 243,
    fontFamily: FontFamily.interRegular,
    left: 100,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 351,
    left: 0,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
    top: "50%",
    right: 0,
    position: "absolute",
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: "50%",
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
    right: 0,
    backgroundColor: Color.colorDarkslategray_200,
  },
  paymentMethodsChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  wallet22: {
    left: 26,
    width: 35,
    top: 737,
  },
  avatar2Icon: {
    left: 300,
    width: 35,
    top: 737,
  },
  wallet: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    top: 776,
    left: 26,
    position: "absolute",
  },
  flash: {
    left: 166,
    top: 776,
    color: Color.colorDimgray_100,
  },
  profile: {
    top: 775,
    left: 299,
  },
  bitcoin32: {
    left: 164,
    width: 35,
    top: 737,
  },
  leftArrow1Icon: {
    left: 7,
    height: 18,
    width: 20,
  },
  paymentMethods1: {
    left: 33,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  paymentMethodsItem: {
    top: 102,
    height: 621,
  },
  selectYourPayment: {
    top: 133,
    left: 48,
    fontSize: 22,
    width: 264,
    color: Color.colorGray_600,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  paymentMethodsInner: {
    top: 273,
    left: 0,
    position: "absolute",
  },
  bitcoin: {
    top: 290,
  },
  btc: {
    top: 314,
  },
  lineIcon: {
    height: 1,
    width: 360,
  },
  paymentMethodsChild1: {
    top: 428,
    left: 0,
    position: "absolute",
  },
  binance: {
    top: 368,
  },
  btc1: {
    top: 392,
  },
  search1Icon: {
    height: 20,
    width: 20,
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorSilver_200,
    width: 133,
    marginLeft: 10,
    textAlign: "left",
  },
  view: {
    bottom: 552,
    left: 38,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorSilver_200,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    borderWidth: 1,
    borderStyle: "solid",
  },
  bitcoin3Icon: {
    top: 288,
    left: 17,
    width: 50,
    height: 50,
    position: "absolute",
  },
  bnb62193881280RemovebgPrevIcon: {
    width: 80,
    height: 80,
  },
  paymentMethods: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default PaymentMethods;

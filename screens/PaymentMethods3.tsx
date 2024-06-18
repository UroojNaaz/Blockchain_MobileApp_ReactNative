import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PaymentMethods3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.paymentMethods}
      onPress={() => navigation.navigate("PaymentMethods1")}
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
      <View style={[styles.paymentMethodsChild, styles.paymentPosition]} />
      <View style={[styles.paymentMethodsItem, styles.paymentPosition]} />
      <Image
        style={[styles.wallet22, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/wallet-2-1.png")}
      />
      <Image
        style={[styles.avatar2Icon, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Text style={styles.wallet}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={styles.leftArrow1Icon}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.payForYour, styles.viewPosition]}>
        Pay For Your Order
      </Text>
      <Image
        style={[styles.share31, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/share-3-1.png")}
      />
      <Image
        style={styles.qrCode21}
        contentFit="cover"
        source={require("../assets/qrcode-2-11.png")}
      />
      <Text style={styles.copier}>Copier</Text>
      <View style={[styles.view, styles.viewPosition]}>
        <Text style={styles.title}>Pay in wallet</Text>
      </View>
      <Image
        style={[styles.paymentMethodsInner, styles.paymentLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.lineIcon, styles.paymentLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.amount, styles.amountTypo]}>Amount</Text>
      <Text style={[styles.btc, styles.btcTypo]}>0.00368728719 BTC</Text>
      <Image
        style={[styles.paymentMethodsChild1, styles.paymentLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.address, styles.amountTypo]}>Address</Text>
      <Text style={[styles.x990dd7skjdedda7v62653, styles.btcTypo]}>
        0x990DD7skjdEDda7V6265 (....) 362772
      </Text>
      <Image
        style={[styles.copy14, styles.copy14Layout]}
        contentFit="cover"
        source={require("../assets/copy-1-1.png")}
      />
      <Image
        style={[styles.qrCodeScan14, styles.copy14Layout]}
        contentFit="cover"
        source={require("../assets/qrcodescan-1-1.png")}
      />
      <Image
        style={[styles.copy15, styles.copy15Position]}
        contentFit="cover"
        source={require("../assets/copy-1-1.png")}
      />
      <Image
        style={[styles.qrCodeScan15, styles.copy15Position]}
        contentFit="cover"
        source={require("../assets/qrcodescan-1-1.png")}
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
  paymentPosition: {
    width: 360,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  share31Layout: {
    height: 35,
    width: 35,
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
  viewPosition: {
    left: 38,
    position: "absolute",
  },
  paymentLayout: {
    height: 1,
    width: 360,
    left: 0,
    position: "absolute",
  },
  amountTypo: {
    width: 61,
    color: Color.colorDarkslategray_100,
    left: 17,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  btcTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  copy14Layout: {
    height: 20,
    top: 447,
    width: 20,
    position: "absolute",
  },
  copy15Position: {
    top: 532,
    height: 20,
    width: 20,
    position: "absolute",
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
  paymentMethodsChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  paymentMethodsItem: {
    top: 102,
    height: 621,
  },
  wallet22: {
    left: 26,
    width: 35,
    top: 737,
  },
  avatar2Icon: {
    left: 300,
    top: 737,
    width: 35,
  },
  wallet: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    top: 776,
    left: 26,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
    top: 737,
    width: 35,
  },
  leftArrow1Icon: {
    left: 7,
    height: 18,
    width: 20,
    top: 66,
    position: "absolute",
  },
  payForYour: {
    top: 66,
    left: 38,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  share31: {
    top: 55,
    left: 310,
  },
  qrCode21: {
    top: 201,
    left: 90,
    width: 180,
    height: 180,
    position: "absolute",
  },
  copier: {
    top: 641,
    left: 101,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  title: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 251,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view: {
    bottom: 617,
    borderRadius: Border.br_81xl,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.colorDarkslategray_200,
  },
  paymentMethodsInner: {
    top: 413,
  },
  lineIcon: {
    top: 499,
  },
  amount: {
    top: 440,
  },
  btc: {
    top: 458,
    left: 17,
    color: Color.colorGray_600,
  },
  paymentMethodsChild1: {
    top: 585,
  },
  address: {
    top: 526,
  },
  x990dd7skjdedda7v62653: {
    top: 544,
    left: 18,
    width: 224,
  },
  copy14: {
    left: 289,
  },
  qrCodeScan14: {
    left: 322,
  },
  copy15: {
    left: 289,
  },
  qrCodeScan15: {
    left: 322,
  },
  paymentMethods: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default PaymentMethods3;

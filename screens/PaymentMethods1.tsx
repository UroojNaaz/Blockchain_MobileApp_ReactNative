import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PaymentMethods1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.paymentMethods}
      onPress={() => navigation.navigate("PaymentMethods2")}
    >
      <View style={[styles.systemLightStatusBar, styles.capIconPosition]}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
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
      <View style={[styles.paymentMethodsChild, styles.capacityBg]} />
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
      <Text style={[styles.wallet, styles.paymentTypo]}>Wallet</Text>
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
      <Text style={[styles.paymentSuccessful, styles.leftArrow1IconPosition]}>
        Payment successful
      </Text>
      <Text style={[styles.text, styles.timeFlexBox]}>1/8</Text>
      <Image
        style={styles.loading1Icon}
        contentFit="cover"
        source={require("../assets/loading-1.png")}
      />
      <Text
        style={[styles.paymentConfirmationProcess, styles.paymentTypo]}
      >{`Payment 
Confirmation Process`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
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
  capacityBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  wallet22Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  paymentTypo: {
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
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    top: "50%",
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
    left: 0,
    backgroundColor: Color.colorDarkslategray_200,
  },
  paymentMethodsChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    width: 360,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
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
  },
  leftArrow1Icon: {
    left: 7,
    width: 20,
    height: 18,
  },
  paymentSuccessful: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 26,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  text: {
    top: 314,
    left: 148,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    letterSpacing: 0,
  },
  loading1Icon: {
    top: 125,
    left: 107,
    width: 150,
    height: 150,
    position: "absolute",
  },
  paymentConfirmationProcess: {
    top: 400,
    left: 28,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    position: "absolute",
  },
  paymentMethods: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default PaymentMethods1;

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BuyLicence = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.buyLicence}
      onPress={() => navigation.navigate("PaymentMethods")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
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
      <View style={[styles.buyLicenceChild, styles.buyPosition1]} />
      <View style={[styles.buyLicenceItem, styles.buyPosition1]} />
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
      <Text style={styles.wallet}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={styles.leftArrow1Icon}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={styles.buyLicence1}>Buy licence</Text>
      <View style={[styles.buyLicenceInner, styles.buyChildLayout3]} />
      <Text style={[styles.months, styles.monthsTypo]}>3 Months</Text>
      <Text
        style={[styles.enjoyPremiumFeatures, styles.diveDeeperIntoTypo]}
      >{`Enjoy premium features.
Updates during the subscription period.
Ideal for short-term projects.`}</Text>
      <View style={[styles.rectangleView, styles.buyChildLayout2]} />
      <Text style={[styles.buyNow, styles.buyTypo]}>Buy now</Text>
      <View style={[styles.buyLicenceChild1, styles.buyChildLayout]} />
      <Text style={[styles.plus, styles.plusTypo]}>Plus</Text>
      <View style={[styles.buyLicenceChild2, styles.buyChildLayout3]} />
      <Text style={[styles.months1, styles.monthsTypo]}>6 Months</Text>
      <Text
        style={[styles.diveDeeperInto, styles.diveDeeperIntoTypo]}
      >{`Dive deeper into 6-month subscription.
Benefit from advanced functionalities.
Perfect for mid-term projects.`}</Text>
      <View style={[styles.buyLicenceChild3, styles.buyChildLayout2]} />
      <Text style={[styles.buyNow1, styles.buyTypo]}>Buy now</Text>
      <View style={[styles.buyLicenceChild4, styles.buyChildLayout]} />
      <Text style={[styles.plus1, styles.plusTypo]}>Plus</Text>
      <View style={[styles.buyLicenceChild5, styles.buyChildLayout3]} />
      <Text style={[styles.years, styles.monthsTypo]}>1 Years</Text>
      <Text
        style={[styles.maximizeYourExperience, styles.buyLicenceChild6Position]}
      >{`Maximize your experience with our subscription.
Unlock exclusive features, support & updates.
Ideal for long-term projects.`}</Text>
      <View
        style={[styles.buyLicenceChild6, styles.buyLicenceChild6Position]}
      />
      <Text style={[styles.buyNow2, styles.buyTypo]}>Buy now</Text>
      <View style={[styles.buyLicenceChild7, styles.buyChildLayout]} />
      <Text style={[styles.plus2, styles.plusTypo]}>Plus</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  batteryPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  buyPosition1: {
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
  flashTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  buyChildLayout3: {
    height: 166,
    width: 319,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  monthsTypo: {
    fontSize: FontSize.size_xl,
    left: 43,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  diveDeeperIntoTypo: {
    textAlign: "left",
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
  },
  buyChildLayout2: {
    height: 33,
    width: 247,
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  buyTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  buyChildLayout: {
    width: 36,
    borderRadius: Border.br_8xs,
    height: 18,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  plusTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  buyLicenceChild6Position: {
    left: 52,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: 21,
    top: "50%",
    position: "absolute",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
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
    position: "absolute",
    right: 0,
    backgroundColor: Color.colorDarkslategray_200,
  },
  buyLicenceChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
    width: 360,
  },
  buyLicenceItem: {
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
    width: 35,
    top: 737,
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
    width: 35,
    top: 737,
  },
  leftArrow1Icon: {
    left: 7,
    width: 20,
    height: 18,
    top: 66,
    position: "absolute",
  },
  buyLicence1: {
    left: 38,
    top: 66,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  buyLicenceInner: {
    top: 123,
    left: 21,
    height: 166,
    width: 319,
    borderRadius: Border.br_xl,
  },
  months: {
    top: 139,
  },
  enjoyPremiumFeatures: {
    top: 163,
    left: 53,
    position: "absolute",
  },
  rectangleView: {
    top: 249,
    left: 53,
    position: "absolute",
  },
  buyNow: {
    top: 257,
    left: 150,
    fontSize: FontSize.size_sm,
  },
  buyLicenceChild1: {
    top: 222,
    left: 61,
    width: 36,
    borderRadius: Border.br_8xs,
  },
  plus: {
    top: 225,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  buyLicenceChild2: {
    top: 302,
    left: 21,
    height: 166,
    width: 319,
    borderRadius: Border.br_xl,
  },
  months1: {
    top: 318,
  },
  diveDeeperInto: {
    top: 342,
    left: 53,
    position: "absolute",
  },
  buyLicenceChild3: {
    top: 428,
    left: 53,
    position: "absolute",
  },
  buyNow1: {
    top: 436,
    left: 150,
    fontSize: FontSize.size_sm,
  },
  buyLicenceChild4: {
    top: 401,
    left: 61,
    width: 36,
    borderRadius: Border.br_8xs,
  },
  plus1: {
    top: 404,
    left: 68,
    fontSize: FontSize.size_3xs,
  },
  buyLicenceChild5: {
    top: 488,
    left: 20,
  },
  years: {
    top: 504,
  },
  maximizeYourExperience: {
    top: 528,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
  },
  buyLicenceChild6: {
    top: 614,
    height: 33,
    width: 247,
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  buyNow2: {
    top: 622,
    left: 149,
  },
  buyLicenceChild7: {
    top: 587,
    left: 60,
  },
  plus2: {
    top: 590,
    left: 67,
  },
  buyLicence: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default BuyLicence;

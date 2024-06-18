import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ConfirmBTC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.confirmBtc}
      onPress={() => navigation.navigate("OngoingTransaction")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.viewBorder]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
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
      <View style={[styles.confirmBtcChild, styles.confirmPosition]} />
      <View style={[styles.confirmBtcItem, styles.confirmPosition]} />
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
      <Text style={[styles.profil, styles.flashTypo]}>Profil</Text>
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
      <Text style={styles.confirm}>Confirm</Text>
      <Text style={styles.text}>-0.000464287682772673845677657</Text>
      <Text style={[styles.us008, styles.us008Typo]}>=US$0.08</Text>
      <Image
        style={styles.setting1Icon}
        contentFit="cover"
        source={require("../assets/setting-1.png")}
      />
      <Image
        style={[styles.confirmBtcInner, styles.confirmChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.lineIcon, styles.confirmChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.from, styles.toTypo]}>From</Text>
      <Text
        style={[
          styles.zachzeV63565265323627726,
          styles.zachzeV63565265323627726Typo,
        ]}
      >
        zachze (V6356526532....3627726)
      </Text>
      <Image
        style={[styles.confirmBtcChild1, styles.confirmChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.to, styles.toTypo]}>To</Text>
      <Text
        style={[
          styles.x990dd7skjdedda7v6356526532,
          styles.zachzeV63565265323627726Typo,
        ]}
      >
        0x990DD7skjdEDda7V6356526532....3627726)
      </Text>
      <Text style={[styles.eth, styles.ethTypo]}>0.000021 ETH</Text>
      <Text style={[styles.us0003884, styles.ethTypo]}>(US$0.003884)</Text>
      <Image
        style={[styles.confirmBtcChild2, styles.confirmChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.networkFee, styles.toTypo]}>Network fee</Text>
      <View style={[styles.rectangleView, styles.confirmPosition]} />
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.us009, styles.totalTypo]}>US$0.09</Text>
      <View style={[styles.view, styles.viewBorder]}>
        <Text style={[styles.title, styles.us008Typo]}>Send</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  viewBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  confirmPosition: {
    width: 360,
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
  us008Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  confirmChildLayout: {
    height: 1,
    width: 360,
    left: 0,
    position: "absolute",
  },
  toTypo: {
    color: Color.colorDarkslategray_100,
    left: 17,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  zachzeV63565265323627726Typo: {
    color: Color.colorGray_600,
    left: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  ethTypo: {
    color: Color.colorGray_100,
    left: 242,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  totalTypo: {
    color: Color.colorDarkslategray_300,
    top: 497,
    height: 18,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
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
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
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
  confirmBtcChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  confirmBtcItem: {
    top: 102,
    height: 621,
    backgroundColor: Color.colorWhite,
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
  profil: {
    top: 775,
    left: 303,
  },
  bitcoin32: {
    left: 164,
    width: 35,
    top: 737,
  },
  leftArrow1Icon: {
    width: 20,
    height: 18,
    left: 7,
    top: 66,
    position: "absolute",
  },
  confirm: {
    left: 55,
    top: 66,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.black,
    width: 278,
    fontFamily: FontFamily.interRegular,
    top: 135,
    left: 7,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  us008: {
    left: 282,
    fontSize: 13,
    color: "#0879b8",
    width: 68,
    top: 135,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  setting1Icon: {
    top: 62,
    left: 312,
    width: 25,
    height: 25,
    position: "absolute",
  },
  confirmBtcInner: {
    top: 191,
  },
  lineIcon: {
    top: 277,
  },
  from: {
    top: 218,
    width: 40,
  },
  zachzeV63565265323627726: {
    top: 236,
  },
  confirmBtcChild1: {
    top: 363,
  },
  to: {
    top: 304,
    width: 19,
  },
  x990dd7skjdedda7v6356526532: {
    top: 322,
  },
  eth: {
    top: 376,
  },
  us0003884: {
    top: 398,
  },
  confirmBtcChild2: {
    top: 449,
  },
  networkFee: {
    top: 390,
    width: 87,
  },
  rectangleView: {
    top: 476,
    backgroundColor: Color.colorGainsboro_300,
    height: 59,
  },
  total: {
    left: 27,
    width: 40,
  },
  us009: {
    left: 274,
    width: 63,
  },
  title: {
    fontSize: FontSize.size_sm,
    width: 251,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  view: {
    bottom: 112,
    left: 47,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorDarkslategray_200,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  confirmBtc: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default ConfirmBTC;

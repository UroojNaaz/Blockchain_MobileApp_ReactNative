import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TrustWallet = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.trustWallet}
      onPress={() => navigation.navigate("Chart")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.trustBorder]} />
          <Image
            style={styles.capIcon}
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
      <View style={[styles.trustWalletChild, styles.trustPosition]} />
      <View style={[styles.trustWalletItem, styles.trustPosition]} />
      <Image
        style={[styles.wallet22, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wallet-2-1.png")}
      />
      <Image
        style={[styles.avatar2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.receiveBnbPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.receiveBnb, styles.receiveBnbPosition]}>
        Receive BNB
      </Text>
      <Image
        style={[styles.share31, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/share-3-1.png")}
      />
      <View style={[styles.trustWalletInner, styles.capacityBg]} />
      <Image
        style={styles.qrCode21}
        contentFit="cover"
        source={require("../assets/qrcode-2-1.png")}
      />
      <Text style={[styles.zachknkoxps32m42mnjsceo32nnnna, styles.walletTypo]}>
        zachKNkoxps32m42mnJScEO32NnnNAPZ
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.copy, styles.copyTypo]}>Copy</Text>
      <Image
        style={[styles.copy3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/copy-2.png")}
      />
      <View style={[styles.trustWalletChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.share, styles.copyTypo]}>Share</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  trustBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capacityBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  trustPosition: {
    width: 360,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  walletTypo: {
    fontFamily: FontFamily.interSemiBold,
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
  receiveBnbPosition: {
    top: 66,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 80,
    width: 80,
    borderRadius: Border.br_3xs,
    top: 588,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  copyTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    top: 641,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
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
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  trustWalletChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  trustWalletItem: {
    top: 102,
    height: 621,
  },
  wallet22: {
    left: 26,
    top: 737,
    width: 35,
  },
  avatar2Icon: {
    left: 300,
    top: 737,
    width: 35,
  },
  wallet: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
    top: 776,
    left: 26,
    textAlign: "center",
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
    top: 737,
    width: 35,
  },
  leftArrow1Icon: {
    left: 7,
    width: 20,
    height: 18,
  },
  receiveBnb: {
    left: 49,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  share31: {
    top: 55,
    left: 310,
  },
  trustWalletInner: {
    top: 171,
    left: 18,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    borderColor: Color.colorGray_400,
    width: 322,
    height: 331,
    borderWidth: 1,
    borderStyle: "solid",
  },
  qrCode21: {
    top: 207,
    left: 67,
    width: 225,
    height: 225,
    position: "absolute",
  },
  zachknkoxps32m42mnjsceo32nnnna: {
    top: 454,
    left: 56,
    color: Color.colorGray_600,
    textAlign: "left",
    width: 247,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  rectangleView: {
    left: 80,
  },
  copy: {
    left: 102,
  },
  copy3Icon: {
    top: 601,
    left: 102,
  },
  trustWalletChild1: {
    left: 203,
  },
  share: {
    left: 226,
  },
  trustWallet: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default TrustWallet;

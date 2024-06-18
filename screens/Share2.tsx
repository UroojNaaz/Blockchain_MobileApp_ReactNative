import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Share2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.share}
      onPress={() => navigation.navigate("Profile")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.shareBorder]} />
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
      <View style={[styles.shareChild, styles.sharePosition]} />
      <View style={[styles.shareItem, styles.sharePosition]} />
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
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.recevoirBnbPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.recevoirBnb, styles.recevoirBnbPosition]}>
        Recevoir BNB
      </Text>
      <Image
        style={[styles.share31, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/share-3-1.png")}
      />
      <View style={[styles.shareInner, styles.shareInnerPosition]} />
      <Image
        style={styles.qrCode21}
        contentFit="cover"
        source={require("../assets/qrcode-2-1.png")}
      />
      <Text style={[styles.zachknkoxps32m42mnjsceo32nnnna, styles.walletTypo]}>
        zachKNkoxps32m42mnJScEO32NnnNAPZ
      </Text>
      <View style={[styles.rectangleView, styles.shareInnerPosition]} />
      <Text style={[styles.partagerSur, styles.walletTypo]}>Partager sur</Text>
      <Image
        style={[styles.tikTok1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/tiktok-2.png")}
      />
      <Image
        style={[styles.facebook1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/facebook-2.png")}
      />
      <Image
        style={[styles.instagram1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/instagram-2.png")}
      />
      <Image
        style={[styles.snapchat1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/snapchat-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeTypo: {
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  shareBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  sharePosition: {
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
  walletTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
  recevoirBnbPosition: {
    top: 66,
    position: "absolute",
  },
  shareInnerPosition: {
    borderRadius: Border.br_xl,
    left: 18,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    color: Color.colorWhite,
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
  shareChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  shareItem: {
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
    letterSpacing: 0,
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
  recevoirBnb: {
    left: 46,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  share31: {
    top: 55,
    left: 310,
  },
  shareInner: {
    top: 171,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.colorGray_400,
    width: 322,
    height: 331,
    backgroundColor: Color.colorWhite,
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
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 301,
    width: 320,
    height: 201,
    backgroundColor: Color.colorDarkslategray_200,
  },
  partagerSur: {
    top: 337,
    left: 95,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    width: 168,
    height: 27,
    textAlign: "center",
    position: "absolute",
  },
  tikTok1Icon: {
    left: 42,
    width: 51,
    height: 50,
    top: 385,
  },
  facebook1Icon: {
    top: 384,
    left: 182,
    width: 51,
    height: 50,
  },
  instagram1Icon: {
    left: 259,
    width: 51,
    height: 50,
    top: 385,
  },
  snapchat1Icon: {
    left: 113,
    width: 50,
    top: 385,
  },
  share: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Share2;

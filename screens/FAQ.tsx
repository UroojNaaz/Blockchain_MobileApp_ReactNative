import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FAQ = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.faq} onPress={() => navigation.navigate("Flash")}>
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
      <View style={[styles.faqChild, styles.faqPosition]} />
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
      <Text style={[styles.wallet, styles.faq1Typo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.faq1, styles.faq1Typo]}>FAQ</Text>
      <View style={[styles.faqItem, styles.faqPosition]} />
      <Text style={[styles.whatsIsMyblockchain, styles.whatsTypo]}>
        Whats is myblockchain app
      </Text>
      <Image
        style={[styles.faqInner, styles.faqInnerLayout]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={styles.help1Icon}
        contentFit="cover"
        source={require("../assets/help-1.png")}
      />
      <Image
        style={[styles.downArrow15, styles.downLayout]}
        contentFit="cover"
        source={require("../assets/downarrow-1-51.png")}
      />
      <Text style={[styles.whatsIsMyblockchain1, styles.whatsTypo]}>
        Whats is myblockchain app
      </Text>
      <Image
        style={[styles.lineIcon, styles.faqInnerLayout]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Image
        style={[styles.downArrow16, styles.downLayout]}
        contentFit="cover"
        source={require("../assets/downarrow-1-51.png")}
      />
      <Text style={[styles.whatsIsMyblockchain2, styles.whatsTypo]}>
        Whats is myblockchain app
      </Text>
      <Image
        style={styles.upload11}
        contentFit="cover"
        source={require("../assets/upload-1-1.png")}
      />
      <Text style={styles.myBlockchainApp}>
        My blockchain app is a decentralized platform that securely records
        transactions using blockchain technology. It provides transparency and
        immutability while enabling efficient peer-to-peer interactions. Users
        can manage assets and execute smart contracts seamlessly.
      </Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
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
  faqPosition: {
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
  faq1Typo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
  whatsTypo: {
    width: 200,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  faqInnerLayout: {
    height: 1,
    width: 306,
    left: 27,
    position: "absolute",
  },
  downLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
  faqChild: {
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
  faq1: {
    top: 68,
    left: 146,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  faqItem: {
    top: 247,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 476,
  },
  whatsIsMyblockchain: {
    left: 27,
    width: 200,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    top: 312,
  },
  faqInner: {
    top: 335,
  },
  help1Icon: {
    top: 108,
    left: 116,
    width: 100,
    height: 100,
    position: "absolute",
  },
  downArrow15: {
    left: 313,
    top: 312,
  },
  whatsIsMyblockchain1: {
    top: 358,
    left: 27,
    width: 200,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  lineIcon: {
    top: 388,
  },
  downArrow16: {
    top: 357,
    left: 312,
  },
  whatsIsMyblockchain2: {
    top: 405,
    left: 33,
  },
  upload11: {
    top: 403,
    left: 310,
    width: 16,
    height: 16,
    position: "absolute",
  },
  myBlockchainApp: {
    top: 438,
    left: 38,
    color: "#6b6b6b",
    width: 288,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 396,
    height: 138,
    width: 306,
    left: 27,
    position: "absolute",
  },
  faq: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default FAQ;

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.home}
      onPress={() => navigation.navigate("DetailCrypto")}
    >
      <View style={[styles.systemLightStatusBar, styles.rectangleViewPosition]}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
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
      <View style={[styles.homeChild, styles.homeLayout]} />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <Text style={[styles.send, styles.sendTypo]}>Send</Text>
      <Image
        style={[styles.downArrow1Icon, styles.upArrow11Layout]}
        contentFit="cover"
        source={require("../assets/downarrow-1.png")}
      />
      <Text style={[styles.receive, styles.sendTypo]}>Receive</Text>
      <View style={[styles.homeInner, styles.capacityBg]} />
      <Text style={[styles.text, styles.sendTypo]}>$ 0</Text>
      <Image
        style={styles.iconlylightnotification}
        contentFit="cover"
        source={require("../assets/iconlylightnotification.png")}
      />
      <Image
        style={[styles.upArrow11, styles.upArrow11Layout]}
        contentFit="cover"
        source={require("../assets/uparrow-1-1.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Image
        style={[styles.wallet21, styles.wallet21Layout]}
        contentFit="cover"
        source={require("../assets/wallet-2-1.png")}
      />
      <Image
        style={[styles.avatar1Icon, styles.wallet21Layout]}
        contentFit="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Image
        style={[styles.bitcoin1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bitcoin-1.png")}
      />
      <Text style={[styles.bitcoin, styles.btcTypo]}>Bitcoin</Text>
      <Text style={[styles.btc, styles.btcTypo]}>0,1584 BTC</Text>
      <Text style={[styles.text1, styles.textTypo2]}>
        <Text style={styles.text2}>67,813,48</Text>
        <Text style={styles.text3}> 73%</Text>
      </Text>
      <Text style={[styles.text4, styles.textTypo2]}>$10,741,57</Text>
      <Image
        style={[styles.bitcoin1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bitcoin-1.png")}
      />
      <Text style={[styles.bitcoin, styles.btcTypo]}>Bitcoin</Text>
      <Text style={[styles.btc, styles.btcTypo]}>0,1584 BTC</Text>
      <Text style={[styles.text1, styles.textTypo2]}>
        <Text style={styles.text2}>67,813,48</Text>
        <Text style={styles.text3}> 73%</Text>
      </Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.binanceCoin, styles.bnbTypo]}>Binance Coin</Text>
      <Text style={[styles.bnb, styles.bnbTypo]}>33 BNB</Text>
      <Text style={[styles.text8, styles.textTypo1]}>
        <Text style={styles.text2}>643,25</Text>
        <Text style={styles.text3}> 73%</Text>
      </Text>
      <Text style={[styles.text11, styles.textTypo1]}>$21,219</Text>
      <Image
        style={[styles.homeChild1, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.bnb62193881280RemovebgPrevIcon}
        contentFit="cover"
        source={require("../assets/bnb6219388-1280removebgpreview-1.png")}
      />
      <Text style={[styles.ethereum, styles.ethTypo]}>Ethereum</Text>
      <Text style={[styles.eth, styles.ethTypo]}>1 ETH</Text>
      <Text style={[styles.text12, styles.textTypo]}>
        <Text style={styles.text2}>4,809,91</Text>
        <Text style={styles.text3}> 14%</Text>
      </Text>
      <Text style={[styles.text15, styles.textTypo]}>$4809</Text>
      <Image
        style={[styles.imagesRemovebgPreview1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/imagesremovebgpreview-1.png")}
      />
      <Text style={[styles.wallet, styles.textTypo2]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin31, styles.wallet21Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    left: 0,
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
  homeLayout: {
    height: 100,
    width: 140,
    borderRadius: Border.br_3xs,
    top: 184,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  sendTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  upArrow11Layout: {
    height: 40,
    width: 40,
    top: 199,
    position: "absolute",
  },
  wallet21Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  btcTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    top: 351,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 306,
    left: 29,
    position: "absolute",
  },
  bnbTypo: {
    top: 441,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo1: {
    top: 462,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  ethTypo: {
    top: 539,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    top: 560,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  flashTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
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
  homeChild: {
    left: 17,
  },
  homeItem: {
    left: 199,
  },
  send: {
    left: 69,
    top: 247,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  downArrow1Icon: {
    left: 249,
  },
  receive: {
    left: 245,
    top: 247,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  homeInner: {
    top: 722,
    left: -1,
    borderColor: "#3b3939",
    width: 362,
    height: 79,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 90,
    fontSize: FontSize.size_21xl,
    left: 17,
  },
  iconlylightnotification: {
    height: "3.5%",
    width: "7.78%",
    top: "12.5%",
    right: "4.72%",
    bottom: "84%",
    left: "87.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  upArrow11: {
    left: 67,
  },
  rectangleView: {
    top: 316,
    backgroundColor: Color.colorGainsboro_200,
    width: 360,
    height: 407,
  },
  wallet21: {
    left: 26,
  },
  avatar1Icon: {
    left: 300,
  },
  bitcoin1Icon: {
    top: 344,
    left: 17,
  },
  bitcoin: {
    left: 80,
  },
  btc: {
    left: 256,
  },
  text2: {
    color: Color.colorDimgray_200,
  },
  text3: {
    color: Color.colorMediumspringgreen,
  },
  text1: {
    left: 79,
    top: 372,
    fontSize: FontSize.size_xs,
  },
  text4: {
    left: 279,
    color: Color.colorDimgray_200,
    top: 372,
    fontSize: FontSize.size_xs,
  },
  lineIcon: {
    top: 410,
  },
  binanceCoin: {
    left: 79,
  },
  bnb: {
    left: 284,
  },
  text8: {
    left: 80,
  },
  text11: {
    left: 295,
    color: Color.colorDimgray_200,
  },
  homeChild1: {
    top: 500,
  },
  bnb62193881280RemovebgPrevIcon: {
    top: 419,
    left: 2,
    width: 80,
    height: 80,
    position: "absolute",
  },
  ethereum: {
    left: 79,
  },
  eth: {
    left: 295,
  },
  text12: {
    left: 78,
  },
  text15: {
    color: Color.colorDimgray_200,
    left: 300,
  },
  imagesRemovebgPreview1Icon: {
    top: 528,
    left: 18,
  },
  wallet: {
    color: Color.colorDarkslategray_200,
    top: 776,
    left: 26,
  },
  flash: {
    left: 166,
    top: 776,
  },
  profile: {
    top: 775,
    left: 299,
  },
  bitcoin31: {
    left: 164,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Home;

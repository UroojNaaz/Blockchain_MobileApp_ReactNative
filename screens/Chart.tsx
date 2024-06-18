import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Chart = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.chart}
      onPress={() => navigation.navigate("Share2")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.supplyFlexBox]}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderBorder]} />
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
      <View style={[styles.chartChild, styles.chartLayout]} />
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
      <Text style={[styles.wallet, styles.textTypo1]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.retourPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.retour, styles.retourPosition]}>Retour</Text>
      <Text style={[styles.bitcoinCash, styles.retourPosition]}>
        Bitcoin Cash
      </Text>
      <View style={[styles.chartItem, styles.chartLayout]} />
      <View style={[styles.chartInner, styles.chartInnerBorder]} />
      <Image
        style={[styles.lineIcon, styles.chartLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <View style={[styles.rectangleView, styles.chartInnerBorder]} />
      <Text style={[styles.wwwbnbchainword, styles.textTypo]}>
        www.bnbchain.word
      </Text>
      <Text style={[styles.us, styles.textTypo]}>286, 43 US$</Text>
      <Text style={[styles.siteWeb, styles.supplyClr]}>Site Web</Text>
      <Text style={[styles.h, styles.hTypo]}>24H</Text>
      <Text style={[styles.semaine, styles.hTypo]}>Semaine</Text>
      <Text style={[styles.mois, styles.hTypo]}>Mois</Text>
      <Text style={[styles.annee, styles.hTypo]}>Annee</Text>
      <Text style={[styles.allTime, styles.hTypo]}>All Time</Text>
      <Text style={[styles.text, styles.textTypo1]}>-0.65%</Text>
      <Text style={[styles.bscscancom, styles.text1Typo]}>bscscan.com</Text>
      <Text style={[styles.explorateur, styles.supplyClr]}>Explorateur</Text>
      <Text style={[styles.text1, styles.text1Typo]}>32 803 285,65 $</Text>
      <Text style={[styles.capitalisation, styles.supplyClr]}>
        Capitalisation
      </Text>
      <Text style={[styles.text2, styles.text2Position]}>218 285,65 $</Text>
      <Text style={[styles.approvisionnementTotal, styles.text2Position]}>
        Approvisionnement total
      </Text>
      <Text style={[styles.text3, styles.text3Position]}>4 285,65 $</Text>
      <Text style={[styles.volume24H, styles.text3Position]}>
        Volume (24 h)
      </Text>
      <Text style={[styles.bnb, styles.bnbTypo]}>18 803 285,65 BNB</Text>
      <Text style={[styles.supplyEnCirculation, styles.supplyClr]}>
        Supply en circulation
      </Text>
      <Text style={[styles.bnb1, styles.bnbTypo]}>13 803 285,65 BNB</Text>
      <Text style={[styles.supplyTotal, styles.supplyClr]}>Supply total</Text>
      <Text style={[styles.afficherSurCoinmarketcap, styles.supplyClr]}>
        Afficher sur CoinMarketCap
      </Text>
      <View style={styles.chartChild1} />
      <Image
        style={styles.photo202309222054561Icon}
        contentFit="cover"
        source={require("../assets/photo-20230922-205456-1.png")}
      />
      <Image
        style={[styles.rightArrow7Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-7.png")}
      />
      <Image
        style={[styles.rightArrow8Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-7.png")}
      />
      <Image
        style={[styles.rightArrow9Icon, styles.rightIconLayout]}
        contentFit="cover"
        source={require("../assets/rightarrow-7.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  supplyFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  chartLayout: {
    width: 360,
    position: "absolute",
  },
  wallet22Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  textTypo1: {
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
  retourPosition: {
    top: 66,
    position: "absolute",
  },
  chartInnerBorder: {
    borderColor: Color.colorSilver_100,
    width: 360,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  supplyClr: {
    color: Color.colorGray_600,
    left: 14,
  },
  hTypo: {
    bottom: 464,
    color: Color.colorGray_600,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  text1Typo: {
    left: 240,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  text2Position: {
    top: 510,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text3Position: {
    top: 544,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bnbTypo: {
    width: 110,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  rightIconLayout: {
    height: 12,
    width: 12,
    left: 326,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
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
  chartChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    backgroundColor: Color.colorWhite,
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
    position: "absolute",
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
  bitcoin32: {
    left: 164,
  },
  leftArrow1Icon: {
    left: 7,
    width: 20,
    height: 18,
  },
  retour: {
    left: 35,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  bitcoinCash: {
    left: 135,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  chartItem: {
    top: 102,
    backgroundColor: Color.colorWhitesmoke,
    height: 621,
    left: 0,
  },
  chartInner: {
    top: 124,
    height: 223,
  },
  lineIcon: {
    top: 307,
    left: -1,
    height: 1,
  },
  rectangleView: {
    top: 383,
    height: 308,
  },
  wwwbnbchainword: {
    top: 402,
    left: 197,
    width: 129,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
    letterSpacing: 0,
  },
  us: {
    top: 140,
    left: 101,
    fontSize: 26,
    width: 156,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  siteWeb: {
    top: 400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_600,
    left: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
    letterSpacing: 0,
  },
  h: {
    right: 312,
  },
  semaine: {
    right: 220,
  },
  mois: {
    right: 163,
  },
  annee: {
    right: 96,
  },
  allTime: {
    right: 18,
  },
  text: {
    top: 171,
    left: 159,
    color: Color.colorCrimson_100,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bscscancom: {
    top: 432,
    width: 81,
  },
  explorateur: {
    top: 434,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_600,
    left: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
    letterSpacing: 0,
  },
  text1: {
    top: 472,
    width: 100,
  },
  capitalisation: {
    top: 471,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_600,
    left: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
    letterSpacing: 0,
  },
  text2: {
    left: 261,
    width: 77,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  approvisionnementTotal: {
    color: Color.colorGray_600,
    left: 14,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text3: {
    left: 269,
    width: 71,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  volume24H: {
    color: Color.colorGray_600,
    left: 14,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  bnb: {
    left: 226,
    top: 578,
  },
  supplyEnCirculation: {
    top: 578,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_600,
    left: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
    letterSpacing: 0,
  },
  bnb1: {
    top: 612,
    left: 225,
  },
  supplyTotal: {
    top: 609,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorGray_600,
    left: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "center",
    letterSpacing: 0,
  },
  afficherSurCoinmarketcap: {
    top: 650,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_600,
    left: 14,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  chartChild1: {
    top: 316,
    left: 16,
    borderRadius: 40,
    backgroundColor: Color.colorGainsboro_200,
    width: 40,
    height: 26,
    position: "absolute",
  },
  photo202309222054561Icon: {
    top: 194,
    width: 300,
    height: 100,
    left: 26,
    position: "absolute",
  },
  rightArrow7Icon: {
    top: 404,
  },
  rightArrow8Icon: {
    top: 434,
  },
  rightArrow9Icon: {
    top: 652,
  },
  chart: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Chart;

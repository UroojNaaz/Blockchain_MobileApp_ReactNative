import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TransactionRecente = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.transactionRecente}
      onPress={() => navigation.navigate("Share1")}
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
      <View
        style={[styles.transactionRecenteChild, styles.transactionPosition]}
      />
      <View
        style={[styles.transactionRecenteItem, styles.transactionPosition]}
      />
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
      <Text style={[styles.wallet, styles.ethTypo]}>Wallet</Text>
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
      <Text style={[styles.recentTransactions, styles.leftArrow1IconPosition]}>
        Recent Transactions
      </Text>
      <Text style={[styles.eth, styles.ethTypo]}>+0.0811598 ETH</Text>
      <Text style={[styles.sep302020, styles.sepTypo]}>Sep 30, 2020</Text>
      <Text style={[styles.received, styles.sentTypo]}>Received</Text>
      <Text
        style={[styles.from0x52653236273726, styles.to0x52653236273726Typo]}
      >
        From: 0x526532....36273726
      </Text>
      <Image
        style={[styles.wallet15, styles.walletLayout]}
        contentFit="cover"
        source={require("../assets/wallet-1-3.png")}
      />
      <Image
        style={styles.transactionRecenteInner}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.eth1, styles.ethTypo]}>-0.13 ETH</Text>
      <Text style={[styles.sep282020, styles.sepTypo]}>Sep 28, 2020</Text>
      <Text style={[styles.sent, styles.sentTypo]}>Sent</Text>
      <Text style={[styles.to0x52653236273726, styles.to0x52653236273726Typo]}>
        To: 0x526532....36273726
      </Text>
      <Image
        style={[styles.wallet16, styles.walletLayout]}
        contentFit="cover"
        source={require("../assets/wallet-1-3.png")}
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
  transactionPosition: {
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
  ethTypo: {
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
  sepTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    left: 22,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  sentTypo: {
    width: 135,
    textAlign: "left",
    left: 64,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  to0x52653236273726Typo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    left: 64,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  walletLayout: {
    height: 30,
    width: 30,
    left: 21,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 21,
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
  transactionRecenteChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  transactionRecenteItem: {
    top: 102,
    height: 621,
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
  recentTransactions: {
    left: 47,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  eth: {
    top: 182,
    left: 245,
    color: Color.colorMediumspringgreen,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  sep302020: {
    top: 132,
  },
  received: {
    top: 172,
  },
  from0x52653236273726: {
    top: 190,
  },
  wallet15: {
    top: 175,
  },
  transactionRecenteInner: {
    top: 219,
    left: 36,
    width: 306,
    height: 1,
    position: "absolute",
  },
  eth1: {
    top: 285,
    left: 281,
    color: Color.colorDarkgray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  sep282020: {
    top: 234,
  },
  sent: {
    top: 274,
  },
  to0x52653236273726: {
    top: 292,
  },
  wallet16: {
    top: 277,
  },
  transactionRecente: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default TransactionRecente;

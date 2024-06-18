import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const OngoingTransaction = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.ongoingTransaction}
      onPress={() => navigation.navigate("TrustWallet")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
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
      <View style={[styles.ongoingTransactionChild, styles.ongoingPosition]} />
      <View style={[styles.ongoingTransactionItem, styles.ongoingPosition]} />
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
        style={[styles.leftArrow1Icon, styles.leftArrow1IconPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.outgoingTransaction, styles.leftArrow1IconPosition]}>
        Outgoing Transaction
      </Text>
      <Text style={[styles.eth, styles.ethTypo]}>-0.15684167 ETH</Text>
      <Text style={styles.us008}>(US$0.08)</Text>
      <Image
        style={[styles.ongoingTransactionInner, styles.ongoingChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.lineIcon, styles.ongoingChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.recipient, styles.recipientTypo]}>Recipient</Text>
      <Text style={[styles.zachzessknkoxps32m42mnjscnoo32, styles.ethTypo]}>
        zachzesSKNkoxps32m42mnJScnOO32niiANnnNAPZEmsksmllmk22Z1
      </Text>
      <Image
        style={[styles.ongoingTransactionChild1, styles.ongoingChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>500 $</Text>
      <Text style={[styles.eth1, styles.textTypo]}>0.000021 ETH</Text>
      <Image
        style={[styles.ongoingTransactionChild2, styles.ongoingChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.aujourdhuiA14h30min, styles.textTypo]}>
        Aujourd’hui a 14h30min
      </Text>
      <Text style={[styles.transactionDuration, styles.recipientTypo]}>
        Transaction Duration
      </Text>
      <Text style={[styles.amount, styles.amountTypo]}>Amount</Text>
      <Text style={[styles.networkFee, styles.amountTypo]}>Network Fee</Text>
      <Image
        style={[styles.share31, styles.share31Layout]}
        contentFit="cover"
        source={require("../assets/share-3-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  ongoingPosition: {
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
  ethTypo: {
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  ongoingChildLayout: {
    height: 1,
    width: 360,
    left: 0,
    position: "absolute",
  },
  recipientTypo: {
    color: Color.colorDarkslategray_100,
    left: 17,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  amountTypo: {
    left: 16,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 21,
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
  ongoingTransactionChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  ongoingTransactionItem: {
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
    top: 776,
    left: 26,
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
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
  outgoingTransaction: {
    left: 42,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  eth: {
    top: 138,
    left: 90,
    fontSize: FontSize.size_base,
    color: Color.black,
    width: 126,
    textAlign: "center",
  },
  us008: {
    top: 140,
    left: 214,
    fontSize: FontSize.size_3xs,
    width: 55,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDimgray_100,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  ongoingTransactionInner: {
    top: 191,
  },
  lineIcon: {
    top: 277,
  },
  recipient: {
    top: 218,
    width: 67,
  },
  zachzessknkoxps32m42mnjscnoo32: {
    top: 242,
    left: 18,
    color: Color.colorGray_600,
    textAlign: "left",
    width: 324,
    fontSize: FontSize.size_xs,
  },
  ongoingTransactionChild1: {
    top: 363,
  },
  text: {
    top: 332,
    color: Color.colorGray_100,
    left: 21,
  },
  eth1: {
    top: 412,
    color: Color.colorGray_100,
    left: 21,
  },
  ongoingTransactionChild2: {
    top: 460,
  },
  aujourdhuiA14h30min: {
    top: 509,
    left: 17,
    color: Color.colorGray_100,
  },
  transactionDuration: {
    top: 487,
    width: 150,
  },
  amount: {
    top: 312,
    width: 60,
  },
  networkFee: {
    top: 390,
    width: 89,
  },
  share31: {
    top: 55,
    left: 310,
  },
  ongoingTransaction: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default OngoingTransaction;

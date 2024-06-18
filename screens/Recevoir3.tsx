import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Recevoir3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.recevoir}
      onPress={() => navigation.navigate("Envoyer4")}
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
      <View style={[styles.recevoirChild, styles.capacityBg]} />
      <View style={styles.recevoirItem} />
      <Text style={[styles.rootrootInitialisation, styles.userTypo]}>
        [root@root~]$ initialisation........................OK
      </Text>
      <Text style={[styles.userConnect, styles.userTypo]}>
        User connect................................................OK
      </Text>
      <Text style={[styles.verification, styles.userTypo]}>
        Verification...................................................OK
      </Text>
      <Text style={[styles.idUser672836286, styles.userTypo]}>
        ID User 672836286.....................................OK
      </Text>
      <Text style={[styles.usdtAmout600, styles.userTypo]}>
        USDT amout 600 $......................................OK
      </Text>
      <Text style={[styles.cryptoEthereum, styles.ok1Typo]}>
        Crypto Ethereum.........................................OK
      </Text>
      <Text style={[styles.feesTrc20new, styles.ok1Typo]}>
        Fees Trc20New............................................OK
      </Text>
      <Text style={[styles.sendUsdtStart, styles.userTypo]}>
        Send USDT start..........................................OK
      </Text>
      <Text style={[styles.ok, styles.userTypo]}>
        0%.................................................................OK
      </Text>
      <Text style={[styles.ok1, styles.ok1Typo]}>
        20%...............................................................OK
      </Text>
      <Text style={[styles.ok2, styles.userTypo]}>
        40%...............................................................OK
      </Text>
      <Text style={[styles.ok3, styles.userTypo]}>
        60%...............................................................OK
      </Text>
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
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.flash1, styles.walletTypo]}>Flash</Text>
      <View style={[styles.recevoirInner, styles.recevoirInnerPosition]} />
      <View style={[styles.rectangleView, styles.recevoirInnerPosition]} />
      <Text style={[styles.loading60, styles.timeFlexBox]}>Loading 60 %</Text>
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
  userTypo: {
    color: Color.colorMediumspringgreen,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  ok1Typo: {
    left: 59,
    color: Color.colorMediumspringgreen,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  wallet22Layout: {
    height: 35,
    width: 35,
    top: 737,
    position: "absolute",
  },
  walletTypo: {
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
  recevoirInnerPosition: {
    height: 29,
    left: 27,
    top: 557,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
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
  recevoirChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    width: 360,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  recevoirItem: {
    top: 176,
    left: 12,
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    width: 336,
    height: 443,
    position: "absolute",
  },
  rootrootInitialisation: {
    top: 255,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  userConnect: {
    top: 300,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  verification: {
    top: 279,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  idUser672836286: {
    top: 321,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  usdtAmout600: {
    top: 344,
    left: 57,
  },
  cryptoEthereum: {
    top: 365,
  },
  feesTrc20new: {
    top: 387,
  },
  sendUsdtStart: {
    top: 408,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  ok: {
    top: 433,
    left: 60,
  },
  ok1: {
    top: 455,
  },
  ok2: {
    top: 479,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  ok3: {
    top: 504,
    left: 58,
    color: Color.colorMediumspringgreen,
  },
  wallet22: {
    left: 26,
  },
  avatar2Icon: {
    left: 300,
  },
  wallet: {
    color: Color.colorDarkslategray_200,
    top: 776,
    left: 26,
    fontSize: FontSize.size_xs,
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
  flash1: {
    top: 71,
    left: 149,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
  },
  recevoirInner: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 304,
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumspringgreen,
    width: 208,
  },
  loading60: {
    top: 564,
    left: 147,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 80,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  recevoir: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Recevoir3;

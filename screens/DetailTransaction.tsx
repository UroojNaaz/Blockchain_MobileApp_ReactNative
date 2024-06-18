import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const DetailTransaction = () => {
  return (
    <View style={styles.detailTransaction}>
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
      <View style={[styles.detailTransactionChild, styles.detailPosition]} />
      <View style={[styles.detailTransactionItem, styles.detailPosition]} />
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
      <Text style={[styles.marche, styles.marcheTypo]}>Marche</Text>
      <Text style={[styles.profil, styles.marcheTypo]}>Profil</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Image
        style={[styles.leftArrow1Icon, styles.idLayout]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.detailDeLa, styles.walletTypo]}>
        Detail de la transaction
      </Text>
      <Image
        style={[styles.detailTransactionInner, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.lineIcon, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[styles.detailTransactionChild1, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={[styles.detailTransactionChild2, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.bnficiaire, styles.idTypo]}>Bénéficiaire</Text>
      <Text
        style={[styles.zachzessknkoxps32m42mnjscnoo32, styles.bl1032983Typo]}
      >
        zachzesSKNkoxps32m42mnJScnOO32niiANnnNAPZEmsksmllmk22Z1
      </Text>
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <Text style={[styles.bl1032983, styles.montantPosition]}>BL1032983</Text>
      <Image
        style={[styles.detailTransactionChild3, styles.detailChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.eth, styles.ethTypo]}>0.000021 ETH</Text>
      <Text style={[styles.aujourdhuiA3, styles.ethTypo]}>
        Aujourd’hui a 3 mins
      </Text>
      <Text style={[styles.dureDeLa, styles.idTypo]}>
        Durée de la transaction
      </Text>
      <Text style={[styles.taxeDeReseau, styles.idTypo]}>Taxe de reseau</Text>
      <Text style={[styles.bitcoinReceived, styles.idTypo]}>
        Bitcoin Received
      </Text>
      <Text style={[styles.text, styles.ethTypo]}>500 $</Text>
      <Text style={[styles.montant, styles.montantPosition]}>Montant</Text>
    </View>
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
  detailPosition: {
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
  walletTypo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  marcheTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  idLayout: {
    width: 20,
    position: "absolute",
  },
  detailChildLayout: {
    height: 1,
    width: 360,
    position: "absolute",
  },
  idTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  bl1032983Typo: {
    width: 324,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  montantPosition: {
    left: 19,
    letterSpacing: 0,
    position: "absolute",
  },
  ethTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
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
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  detailTransactionChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  detailTransactionItem: {
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
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interSemiBold,
    top: 776,
    left: 26,
  },
  marche: {
    left: 160,
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
    height: 18,
    left: 7,
    top: 66,
  },
  detailDeLa: {
    left: 38,
    top: 66,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  detailTransactionInner: {
    top: 182,
    left: 0,
  },
  lineIcon: {
    top: 349,
    left: 0,
  },
  detailTransactionChild1: {
    top: 428,
    left: 7,
  },
  detailTransactionChild2: {
    top: 259,
    left: 0,
  },
  bnficiaire: {
    top: 276,
    width: 88,
    left: 17,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  zachzessknkoxps32m42mnjscnoo32: {
    top: 300,
    left: 18,
    letterSpacing: 0,
    position: "absolute",
  },
  id: {
    top: 199,
    left: 18,
    width: 20,
    position: "absolute",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_100,
  },
  bl1032983: {
    top: 223,
    width: 324,
    textAlign: "left",
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  detailTransactionChild3: {
    top: 500,
    left: 0,
  },
  eth: {
    top: 469,
    left: 17,
  },
  aujourdhuiA3: {
    top: 550,
    left: 18,
  },
  dureDeLa: {
    top: 527,
    width: 163,
    left: 17,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  taxeDeReseau: {
    top: 449,
    left: 16,
    width: 108,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  bitcoinReceived: {
    top: 143,
    left: 109,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    top: 389,
    left: 24,
  },
  montant: {
    top: 369,
    width: 67,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  detailTransaction: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default DetailTransaction;

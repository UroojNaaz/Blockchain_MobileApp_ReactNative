import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Envoyer = () => {
  return (
    <View style={styles.envoyer}>
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
      <View style={[styles.envoyerChild, styles.envoyerPosition]} />
      <View style={[styles.envoyerItem, styles.envoyerPosition]} />
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
        style={[styles.leftArrow1Icon, styles.envoyerAUnPosition]}
        contentFit="cover"
        source={require("../assets/leftarrow-1.png")}
      />
      <Text style={[styles.envoyerAUn, styles.envoyerAUnPosition]}>
        Envoyer a un utilisateur
      </Text>
      <Text style={[styles.nouveauBeneficiaire, styles.walletTypo]}>
        Nouveau beneficiaire
      </Text>
      <Text style={[styles.veuillezEntrerLid, styles.walletTypo1]}>
        Veuillez entrer l’ID du beneficiaire
      </Text>
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>ID</Text>
      </View>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={[styles.title1, styles.titleTypo]}>Montant</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <Text style={[styles.title2, styles.titleTypo]}>Envoyer</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]} />
      <Text style={[styles.id, styles.idTypo]}>ID</Text>
      <Text style={[styles.adresseBtc, styles.idTypo]}>Adresse BTC</Text>
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
  envoyerPosition: {
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
  envoyerAUnPosition: {
    top: 66,
    position: "absolute",
  },
  walletTypo1: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  viewLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  idTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
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
  envoyerChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  envoyerItem: {
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
    position: "absolute",
    top: 776,
    left: 26,
  },
  marche: {
    left: 160,
    top: 776,
  },
  profil: {
    top: 775,
    left: 303,
  },
  bitcoin32: {
    left: 164,
  },
  leftArrow1Icon: {
    left: 7,
    width: 20,
    height: 18,
  },
  envoyerAUn: {
    left: 37,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 66,
  },
  nouveauBeneficiaire: {
    top: 143,
    left: 79,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_100,
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
  },
  veuillezEntrerLid: {
    top: 176,
    left: 88,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_600,
    textAlign: "left",
    width: 215,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  title: {
    width: 59,
    color: Color.colorDimgray_200,
  },
  view: {
    bottom: 470,
    left: 39,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  title1: {
    width: 77,
    color: Color.colorDimgray_200,
  },
  view1: {
    bottom: 393,
    left: 41,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  title2: {
    width: 251,
    color: Color.colorWhite,
  },
  view2: {
    bottom: 256,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    left: 37,
  },
  view3: {
    bottom: 544,
    left: 62,
    width: 100,
    height: 36,
  },
  id: {
    top: 229,
    left: 89,
    width: 46,
    color: Color.colorWhite,
  },
  adresseBtc: {
    top: 226,
    left: 182,
    width: 97,
    color: Color.colorDimgray_200,
  },
  envoyer: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Envoyer;

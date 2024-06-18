import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Parrainage1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.parrainage}
      onPress={() => navigation.navigate("TransactionRecente")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.batteryPosition]}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.batteryPosition]} />
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
      <View style={[styles.parrainageChild, styles.parrainagePosition]} />
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
      <Text style={styles.wallet}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.referral, styles.referralTypo]}>Referral</Text>
      <Text style={[styles.rewardBalance0648, styles.referralTypo]}>
        Reward Balance: 0.648 BTC
      </Text>
      <View style={[styles.parrainageItem, styles.parrainagePosition]} />
      <View style={styles.view} />
      <Text style={[styles.inviteAFriend, styles.inviteAFriendTypo]}>
        Invite a friend and help them make space at their place.
      </Text>
      <Text style={[styles.gagnezUnNouveau, styles.gagnezUnNouveauPosition]}>
        Gagnez un nouveau badge
      </Text>
      <Text
        style={[styles.repetezLaMeme, styles.inviteAFriendTypo]}
      >{`Repetez la meme operation pour decouvrir
tous les avantages`}</Text>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={styles.title}>http://block.zd/23432</Text>
      </View>
      <Image
        style={styles.parrainageInner}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <View style={[styles.rectangleView, styles.warning1IconLayout]} />
      <View style={[styles.parrainageChild1, styles.gagnezUnNouveauPosition]} />
      <Image
        style={[styles.warning1Icon, styles.warning1IconLayout]}
        contentFit="cover"
        source={require("../assets/warning-1.png")}
      />
      <Text style={[styles.pleaseActivateYour, styles.title1Typo]}>
        Please activate your license to benefit from this offer.
      </Text>
      <View style={[styles.view2, styles.viewSpaceBlock]}>
        <Text style={[styles.title1, styles.title1Typo]}>Activate</Text>
      </View>
      <View style={[styles.parrainageChild2, styles.parrainageChildLayout]} />
      <Text style={[styles.recentTransaction, styles.withdrawTypo]}>
        Recent transaction
      </Text>
      <View style={[styles.parrainageChild3, styles.parrainageChildLayout]} />
      <Text style={[styles.withdraw, styles.withdrawTypo]}>Withdraw</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  batteryPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  parrainagePosition: {
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
  flashTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  referralTypo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  inviteAFriendTypo: {
    width: 308,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  gagnezUnNouveauPosition: {
    left: 13,
    position: "absolute",
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  warning1IconLayout: {
    height: 50,
    position: "absolute",
  },
  title1Typo: {
    width: 250,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
  },
  parrainageChildLayout: {
    height: 40,
    width: 153,
    top: 178,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  withdrawTypo: {
    top: 190,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    letterSpacing: 0,
    left: 21,
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
    display: "none",
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  parrainageChild: {
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
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_xs,
    top: 776,
    left: 26,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
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
  referral: {
    top: 68,
    left: 128,
    fontSize: FontSize.size_xl,
  },
  rewardBalance0648: {
    top: 129,
    left: 65,
    fontSize: FontSize.size_base,
  },
  parrainageItem: {
    top: 247,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 476,
  },
  view: {
    bottom: 265,
    left: 36,
    height: 47,
    width: 283,
    borderRadius: Border.br_81xl,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  inviteAFriend: {
    top: 275,
    left: 19,
    position: "absolute",
  },
  gagnezUnNouveau: {
    top: 332,
    width: 308,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
  },
  repetezLaMeme: {
    left: 28,
    top: 361,
    position: "absolute",
  },
  title: {
    width: 141,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  view1: {
    bottom: 352,
    left: 40,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorSilver_200,
    backgroundColor: Color.colorWhite,
  },
  parrainageInner: {
    top: 405,
    left: 261,
    width: 62,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    top: 114,
    left: 27,
    width: 296,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  parrainageChild1: {
    top: 318,
    borderRadius: Border.br_xl,
    width: 320,
    height: 275,
    backgroundColor: Color.colorDarkslategray_200,
  },
  warning1Icon: {
    left: 150,
    width: 50,
    top: 361,
  },
  pleaseActivateYour: {
    top: 444,
    left: 51,
    fontSize: FontSize.size_xs,
    width: 250,
    letterSpacing: 0,
    position: "absolute",
  },
  title1: {
    fontSize: FontSize.size_sm,
    height: 16,
  },
  view2: {
    bottom: 234,
    left: 37,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorWhite,
    height: 44,
  },
  parrainageChild2: {
    left: 21,
    height: 40,
    width: 153,
    top: 178,
  },
  recentTransaction: {
    left: 47,
  },
  parrainageChild3: {
    left: 185,
  },
  withdraw: {
    left: 236,
  },
  parrainage: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Parrainage1;

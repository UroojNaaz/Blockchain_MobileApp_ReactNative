import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Parrainage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.parrainage}
      onPress={() => navigation.navigate("Parrainage1")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.viewChildBorder]} />
          <Image
            style={styles.capIcon}
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
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.flash, styles.flashTypo]}>Flash</Text>
      <Text style={[styles.profile, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.referralProgram, styles.walletTypo]}>
        Referral Program
      </Text>
      <Text style={[styles.rewardBalance0648, styles.walletTypo]}>
        Reward Balance: 0.648 BTC
      </Text>
      <View style={[styles.parrainageItem, styles.parrainagePosition]} />
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={styles.title}>Share</Text>
      </View>
      <Text style={[styles.inviteAFriend, styles.titleTypo]}>
        Invite a friend and help them make space at their place.
      </Text>
      <Text style={[styles.earnANew, styles.titleTypo]}>Earn a new badge.</Text>
      <Text style={[styles.repeatTheSame, styles.titleTypo]}>
        Repeat the same process to discover all the benefits.
      </Text>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={[styles.title1, styles.titleTypo]}>
          http://block.zd/23432
        </Text>
      </View>
      <Text style={[styles.title2, styles.titleTypo]}>Copy</Text>
      <Image
        style={styles.parrainageInner}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <View style={[styles.rectangleView, styles.viewChildBorder]} />
      <View style={[styles.parrainageChild1, styles.viewChildBorder]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  viewChildBorder: {
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
  viewSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    position: "absolute",
  },
  titleTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    color: Color.colorWhite,
    letterSpacing: 0,
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
    position: "absolute",
    height: 11,
    top: "50%",
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
    backgroundColor: Color.colorWhite,
    top: "50%",
    position: "absolute",
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
  referralProgram: {
    top: 67,
    left: 100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  rewardBalance0648: {
    top: 129,
    left: 65,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  parrainageItem: {
    top: 247,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 476,
  },
  title: {
    fontSize: FontSize.size_sm,
    width: 251,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
  },
  view: {
    bottom: 265,
    left: 36,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDarkslategray_200,
  },
  inviteAFriend: {
    top: 288,
    left: 38,
    width: 288,
    letterSpacing: 0,
    color: Color.colorDimgray_200,
    position: "absolute",
  },
  earnANew: {
    top: 332,
    left: 95,
    width: 169,
    letterSpacing: 0,
    color: Color.colorDimgray_200,
    position: "absolute",
  },
  repeatTheSame: {
    top: 361,
    left: 48,
    width: 271,
    letterSpacing: 0,
    color: Color.colorDimgray_200,
    position: "absolute",
  },
  title1: {
    width: 141,
  },
  view1: {
    bottom: 352,
    left: 40,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorSilver_200,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  title2: {
    top: 419,
    left: 265,
    width: 53,
    position: "absolute",
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
    height: 50,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  parrainageChild1: {
    top: 181,
    left: 19,
    width: 153,
    height: 40,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  parrainage: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Parrainage;

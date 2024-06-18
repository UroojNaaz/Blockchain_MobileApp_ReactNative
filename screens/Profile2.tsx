import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Profile2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.profile}
      onPress={() => navigation.navigate("Parrainage")}
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
      <View style={[styles.profileChild, styles.profilePosition]} />
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
      <Text style={[styles.profile1, styles.flashTypo]}>Profile</Text>
      <Image
        style={[styles.bitcoin32, styles.wallet22Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <Text style={[styles.password, styles.walletTypo]}>Password</Text>
      <View style={[styles.profileItem, styles.profilePosition]} />
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>Current Password</Text>
      </View>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={styles.titleTypo}>New Password</Text>
      </View>
      <View style={[styles.view2, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>Confirm Password</Text>
      </View>
      <View style={[styles.view3, styles.viewSpaceBlock]}>
        <Text style={styles.title3}>Save</Text>
      </View>
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
  profilePosition: {
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
    fontSize: FontSize.size_sm,
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
    position: "absolute",
    right: 0,
    backgroundColor: Color.colorDarkslategray_200,
  },
  profileChild: {
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
  profile1: {
    top: 775,
    left: 299,
  },
  bitcoin32: {
    left: 164,
    width: 35,
    top: 737,
  },
  password: {
    top: 62,
    left: 36,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  profileItem: {
    top: 102,
    height: 621,
  },
  title: {
    width: 124,
  },
  view: {
    bottom: 623,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    left: 38,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  view1: {
    bottom: 560,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    left: 38,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  view2: {
    bottom: 497,
    borderColor: Color.colorSilver_200,
    borderRadius: Border.br_3xs,
    left: 38,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    width: 283,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  title3: {
    width: 251,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorWhite,
  },
  view3: {
    bottom: 400,
    left: 40,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDarkslategray_200,
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Profile2;

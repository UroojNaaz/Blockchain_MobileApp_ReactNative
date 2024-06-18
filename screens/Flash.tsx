import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Flash = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.flash}
      onPress={() => navigation.navigate("Flash1")}
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
      <Image
        style={styles.bolt1Icon}
        contentFit="cover"
        source={require("../assets/bolt-1.png")}
      />
      <View style={[styles.flashChild, styles.flashPosition]} />
      <Image
        style={[styles.wallet23, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/wallet-2-1.png")}
      />
      <Image
        style={[styles.avatar3Icon, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/avatar-1.png")}
      />
      <Text style={[styles.wallet, styles.walletTypo]}>Wallet</Text>
      <Text style={[styles.flash1, styles.flash1Typo]}>Flash</Text>
      <Text style={[styles.profile, styles.flash1Typo]}>Profile</Text>
      <Image
        style={[styles.bitcoin33, styles.wallet23Layout]}
        contentFit="cover"
        source={require("../assets/bitcoin-3-1.png")}
      />
      <View style={[styles.flashItem, styles.flashPosition]} />
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>Connect</Text>
      </View>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>Buy new licence</Text>
      </View>
      <View style={[styles.view2, styles.viewSpaceBlock]}>
        <Text style={[styles.title, styles.titleTypo]}>View tutorial</Text>
      </View>
      <View style={[styles.view3, styles.viewBorder]}>
        <Text style={[styles.title3, styles.titleTypo]}>PIN 1</Text>
      </View>
      <View style={[styles.view4, styles.viewBorder]}>
        <Text style={[styles.title3, styles.titleTypo]}>PIN 2</Text>
      </View>
      <View style={[styles.view5, styles.viewBorder]}>
        <Text style={[styles.title3, styles.titleTypo]}>VPN</Text>
      </View>
      <Text style={[styles.flash2, styles.walletTypo]}>Flash</Text>
      <Image
        style={styles.downArrow11}
        contentFit="cover"
        source={require("../assets/downarrow-1-1.png")}
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
  flashPosition: {
    width: 360,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  wallet23Layout: {
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
  flash1Typo: {
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
    borderRadius: Border.br_81xl,
    left: 43,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  titleTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  viewBorder: {
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
    position: "absolute",
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
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  bolt1Icon: {
    top: 72,
    left: 115,
    width: 130,
    height: 130,
    position: "absolute",
  },
  flashChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
  },
  wallet23: {
    left: 26,
    width: 35,
    top: 737,
  },
  avatar3Icon: {
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
  flash1: {
    left: 166,
    top: 776,
    color: Color.colorDimgray_100,
  },
  profile: {
    top: 775,
    left: 299,
  },
  bitcoin33: {
    left: 164,
    width: 35,
    top: 737,
  },
  flashItem: {
    top: 260,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 463,
  },
  title: {
    width: 251,
    color: Color.colorWhite,
  },
  view: {
    bottom: 226,
  },
  view1: {
    bottom: 174,
  },
  view2: {
    bottom: 122,
  },
  title3: {
    color: Color.colorDimgray_200,
    width: 93,
  },
  view3: {
    bottom: 449,
  },
  view4: {
    bottom: 378,
  },
  view5: {
    bottom: 307,
  },
  flash2: {
    top: 211,
    left: 154,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  downArrow11: {
    top: 456,
    left: 276,
    width: 28,
    height: 28,
    position: "absolute",
  },
  flash: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Flash;

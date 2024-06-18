import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("Login")}
    >
      <View style={[styles.systemLightStatusBar, styles.capIconPosition]}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.viewBorder]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
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
      <Text style={[styles.blockchainapp, styles.blockchainappTypo]}>
        BlockChainApp
      </Text>
      <Text style={[styles.exploreTheFuture, styles.blockchainappTypo]}>
        Explore the future of transactions.
      </Text>
      <Image
        style={styles.bitcoin1Icon}
        contentFit="cover"
        source={require("../assets/bitcoin-11.png")}
      />
      <View style={[styles.view, styles.viewBorder]}>
        <Text style={[styles.title, styles.timeFlexBox]}>Get started</Text>
      </View>
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
    color: Color.colorWhite,
  },
  viewBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  blockchainappTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 54,
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    top: "50%",
    position: "absolute",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: "50%",
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
    backgroundColor: Color.colorWhite,
    width: 18,
    height: 7,
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
    left: 0,
    height: 44,
    display: "none",
    backgroundColor: Color.colorDarkslategray_200,
  },
  blockchainapp: {
    top: 410,
    left: 19,
    fontSize: 45,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  exploreTheFuture: {
    top: 475,
    left: 53,
    color: Color.colorGainsboro_100,
    width: 264,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  bitcoin1Icon: {
    top: 152,
    left: 104,
    width: 150,
    height: 150,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 251,
  },
  view: {
    bottom: 136,
    left: 38,
    borderRadius: Border.br_81xl,
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
  },
  splash: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Splash;

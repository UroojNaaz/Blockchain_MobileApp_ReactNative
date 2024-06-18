import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Share1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.share}
      onPress={() => navigation.navigate("ContactUS")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.view1Border]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
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
      <View style={[styles.shareChild, styles.sharePosition]} />
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
      <Text style={[styles.rreferral, styles.walletTypo]}>Rreferral</Text>
      <View style={[styles.shareItem, styles.sharePosition]} />
      <View style={[styles.view, styles.viewSpaceBlock]}>
        <Text style={styles.title}>Share</Text>
      </View>
      <Image
        style={styles.sponsor1Icon}
        contentFit="cover"
        source={require("../assets/sponsor-1.png")}
      />
      <Text
        style={[styles.invitezUnAmi, styles.invitezUnAmiTypo]}
      >{`Invitez un ami et aidez le a faire de la 
place chez lui`}</Text>
      <Text style={[styles.gagnezUnNouveau, styles.invitezUnAmiTypo]}>
        Gagnez un nouveau badge
      </Text>
      <Text
        style={[styles.repetezLaMeme, styles.invitezUnAmiTypo]}
      >{`Repetez la meme operation pour decouvrir
tous les avantages`}</Text>
      <View style={[styles.view1, styles.viewSpaceBlock]}>
        <Text style={[styles.title1, styles.titleTypo]}>
          http://block.zd/23432
        </Text>
      </View>
      <Text style={[styles.title2, styles.titleTypo]}>Copier</Text>
      <Image
        style={styles.shareInner}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.shareOn, styles.walletTypo]}>Share on</Text>
      <Image
        style={[styles.tikTok2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/tiktok-2.png")}
      />
      <Image
        style={[styles.facebook2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/facebook-2.png")}
      />
      <Image
        style={[styles.instagram2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/instagram-2.png")}
      />
      <Image
        style={[styles.snapchat2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/snapchat-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  view1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  sharePosition: {
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
  invitezUnAmiTypo: {
    width: 308,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  titleTypo: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  iconLayout: {
    height: 50,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    width: 54,
    textAlign: "center",
    fontWeight: "600",
    color: Color.colorWhite,
    letterSpacing: 0,
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
  shareChild: {
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
    letterSpacing: 0,
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
  rreferral: {
    top: 68,
    left: 124,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    letterSpacing: 0,
    fontFamily: FontFamily.interSemiBold,
  },
  shareItem: {
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
  sponsor1Icon: {
    top: 116,
    left: 114,
    width: 100,
    height: 100,
    position: "absolute",
  },
  invitezUnAmi: {
    top: 288,
    left: 21,
    width: 308,
  },
  gagnezUnNouveau: {
    top: 332,
    left: 13,
  },
  repetezLaMeme: {
    top: 361,
    left: 28,
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
  shareInner: {
    top: 405,
    width: 62,
    height: 43,
    left: 261,
    position: "absolute",
  },
  rectangleView: {
    top: 272,
    left: 20,
    borderRadius: Border.br_xl,
    width: 320,
    height: 201,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  shareOn: {
    top: 308,
    left: 97,
    fontSize: FontSize.size_base,
    color: Color.colorGray_500,
    width: 168,
    height: 27,
  },
  tikTok2Icon: {
    left: 44,
    width: 51,
    height: 50,
    top: 356,
  },
  facebook2Icon: {
    top: 355,
    left: 184,
    width: 51,
    height: 50,
  },
  instagram2Icon: {
    width: 51,
    height: 50,
    top: 356,
    left: 261,
  },
  snapchat2Icon: {
    left: 115,
    width: 50,
    top: 356,
  },
  share: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default Share1;

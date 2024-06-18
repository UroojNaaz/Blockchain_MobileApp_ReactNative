import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ContactUS = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.contactUs}
      onPress={() => navigation.navigate("FAQ")}
    >
      <View style={styles.systemLightStatusBar}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
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
      <View style={[styles.contactUsChild, styles.contactPosition]} />
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
      <Text style={[styles.contactUs1, styles.walletTypo]}>Contact US</Text>
      <View style={[styles.contactUsItem, styles.contactPosition]} />
      <Image
        style={styles.support1Icon}
        contentFit="cover"
        source={require("../assets/support-1.png")}
      />
      <Image
        style={[styles.phoneCall1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/phonecall-1.png")}
      />
      <Text style={[styles.phone, styles.mailTypo]}>Phone</Text>
      <Text style={[styles.text, styles.textTypo]}>(+123) 45 789 0</Text>
      <Image
        style={[styles.contactUsInner, styles.contactLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.mail, styles.mailPosition]}>Mail</Text>
      <Text style={[styles.mailexamplecom, styles.textTypo]}>
        mail@example.com
      </Text>
      <Image
        style={[styles.lineIcon, styles.contactLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.telegram, styles.mailTypo]}>Telegram</Text>
      <Text style={[styles.telegram1, styles.textTypo]}>@telegram</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Image
        style={[styles.contactUsChild1, styles.contactLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.contactUsChild2, styles.contactChildLayout]}
        contentFit="cover"
        source={require("../assets/line-10.png")}
      />
      <Text style={[styles.name1, styles.nameTypo]}>Name</Text>
      <Image
        style={[styles.contactUsChild3, styles.contactChildLayout]}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
      <Text style={[styles.message, styles.nameTypo]}>Message</Text>
      <Image
        style={[styles.contactUsChild4, styles.contactChildLayout]}
        contentFit="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.email31, styles.mailPosition]}
        contentFit="cover"
        source={require("../assets/email-3-1.png")}
      />
      <Image
        style={[styles.telegram1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/telegram-1.png")}
      />
      <View style={styles.view}>
        <Text style={[styles.title, styles.timeFlexBox]}>Send Message</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  contactPosition: {
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
  iconLayout: {
    height: 30,
    width: 30,
  },
  mailTypo: {
    width: 135,
    color: Color.colorDimgray_200,
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  textTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    left: 64,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  contactLayout: {
    height: 1,
    width: 306,
    left: 27,
    position: "absolute",
  },
  mailPosition: {
    top: 360,
    position: "absolute",
  },
  nameTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    position: "absolute",
  },
  contactChildLayout: {
    height: 0,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontFamily: FontFamily.sFProText,
    width: 54,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    textAlign: "center",
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
  contactUsChild: {
    top: 723,
    borderColor: Color.colorDarkslategray_500,
    height: 77,
    borderWidth: 1,
    borderStyle: "solid",
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
  },
  contactUs1: {
    top: 68,
    left: 111,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  contactUsItem: {
    top: 247,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 476,
  },
  support1Icon: {
    top: 108,
    left: 130,
    width: 100,
    height: 100,
    position: "absolute",
  },
  phoneCall1Icon: {
    left: 27,
    top: 288,
    position: "absolute",
  },
  phone: {
    top: 288,
    position: "absolute",
  },
  text: {
    top: 306,
  },
  contactUsInner: {
    top: 335,
  },
  mail: {
    width: 135,
    color: Color.colorDimgray_200,
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  mailexamplecom: {
    top: 378,
  },
  lineIcon: {
    top: 407,
  },
  telegram: {
    top: 437,
    position: "absolute",
  },
  telegram1: {
    top: 455,
  },
  name: {
    left: 28,
    top: 518,
    color: Color.colorDarkgray,
    textAlign: "center",
  },
  contactUsChild1: {
    top: 484,
  },
  contactUsChild2: {
    width: 140,
    top: 542,
    height: 0,
    left: 27,
  },
  name1: {
    left: 196,
    top: 518,
    color: Color.colorDarkgray,
    textAlign: "center",
  },
  contactUsChild3: {
    left: 193,
    width: 140,
    top: 542,
    height: 0,
  },
  message: {
    top: 560,
    left: 33,
    width: 71,
    color: Color.colorDarkgray,
    textAlign: "left",
  },
  contactUsChild4: {
    top: 584,
    width: 305,
    left: 26,
  },
  email31: {
    height: 30,
    width: 30,
    left: 27,
  },
  telegram1Icon: {
    top: 440,
    left: 26,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 251,
  },
  view: {
    bottom: 129,
    left: 40,
    borderRadius: Border.br_81xl,
    width: 283,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_sm,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_200,
  },
  contactUs: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslategray_200,
  },
});

export default ContactUS;

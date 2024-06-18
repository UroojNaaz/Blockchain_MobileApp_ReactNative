const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import DetailCrypto from "./screens/DetailCrypto";
import Chart from "./screens/Chart";
import Profile from "./screens/Profile";
import Profile1 from "./screens/Profile1";
import Profile2 from "./screens/Profile2";
import Parrainage from "./screens/Parrainage";
import Parrainage1 from "./screens/Parrainage1";
import RecentTransactionText from "./screens/RecentTransactionText";
import Rectangle from "./screens/Rectangle";
import WithdrawText from "./screens/WithdrawText";
import Share1 from "./screens/Share1";
import ContactUS from "./screens/ContactUS";
import FAQ from "./screens/FAQ";
import SendBTC from "./screens/SendBTC";
import ConfirmBTC from "./screens/ConfirmBTC";
import OngoingTransaction from "./screens/OngoingTransaction";
import DetailTransaction from "./screens/DetailTransaction";
import Envoyer from "./screens/Envoyer";
import Envoyer1 from "./screens/Envoyer1";
import Recevoir from "./screens/Recevoir";
import Recevoir1 from "./screens/Recevoir1";
import BuyLicence from "./screens/BuyLicence";
import PaymentMethods from "./screens/PaymentMethods";
import PaymentMethods1 from "./screens/PaymentMethods1";
import PaymentMethods2 from "./screens/PaymentMethods2";
import TitleText from "./screens/TitleText";
import TrustWallet from "./screens/TrustWallet";
import PaymentMethods3 from "./screens/PaymentMethods3";
import Share2 from "./screens/Share2";
import Share4 from "./screens/Share4";
import Flash from "./screens/Flash";
import Flash1 from "./screens/Flash1";
import Flash2 from "./screens/Flash2";
import Flash3 from "./screens/Flash3";
import DetailTransaction1 from "./screens/DetailTransaction1";
import Envoyer2 from "./screens/Envoyer2";
import TransactionRecente from "./screens/TransactionRecente";
import Envoyer3 from "./screens/Envoyer3";
import Envoyer4 from "./screens/Envoyer4";
import Flash4 from "./screens/Flash4";
import Flash5 from "./screens/Flash5";
import Recevoir2 from "./screens/Recevoir2";
import Recevoir3 from "./screens/Recevoir3";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgetPassword from "./screens/ForgetPassword";
import Confirm1 from "./screens/Confirm1";
import Confirm2 from "./screens/Confirm2";
import Frame from "./screens/Frame";
import SuccessfullyText from "./screens/SuccessfullyText";
import Check from "./screens/Check";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailCrypto"
              component={DetailCrypto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chart"
              component={Chart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={Profile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Parrainage"
              component={Parrainage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Parrainage1"
              component={Parrainage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecentTransactionText"
              component={RecentTransactionText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WithdrawText"
              component={WithdrawText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Share1"
              component={Share1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUS"
              component={ContactUS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendBTC"
              component={SendBTC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmBTC"
              component={ConfirmBTC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OngoingTransaction"
              component={OngoingTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailTransaction"
              component={DetailTransaction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Envoyer"
              component={Envoyer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Envoyer1"
              component={Envoyer1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recevoir"
              component={Recevoir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recevoir1"
              component={Recevoir1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BuyLicence"
              component={BuyLicence}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethods"
              component={PaymentMethods}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethods1"
              component={PaymentMethods1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethods2"
              component={PaymentMethods2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TitleText"
              component={TitleText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrustWallet"
              component={TrustWallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentMethods3"
              component={PaymentMethods3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Share2"
              component={Share2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Share4"
              component={Share4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flash"
              component={Flash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flash1"
              component={Flash1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flash2"
              component={Flash2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flash3"
              component={Flash3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailTransaction1"
              component={DetailTransaction1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Envoyer2"
              component={Envoyer2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionRecente"
              component={TransactionRecente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Envoyer3"
              component={Envoyer3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Envoyer4"
              component={Envoyer4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flash4"
              component={Flash4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Flash5"
              component={Flash5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recevoir2"
              component={Recevoir2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recevoir3"
              component={Recevoir3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirm1"
              component={Confirm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirm2"
              component={Confirm2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfullyText"
              component={SuccessfullyText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Check"
              component={Check}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
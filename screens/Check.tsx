import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Check = () => {
  return (
    <ImageBackground
      style={styles.check2Icon}
      resizeMode="cover"
      source={require("../assets/check-2.png")}
    />
  );
};

const styles = StyleSheet.create({
  check2Icon: {
    flex: 1,
    width: "100%",
    height: 50,
  },
});

export default Check;

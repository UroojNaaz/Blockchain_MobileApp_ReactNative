import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Share4 = () => {
  return (
    <ImageBackground
      style={styles.share41}
      resizeMode="cover"
      source={require("../assets/share41.png")}
    />
  );
};

const styles = StyleSheet.create({
  share41: {
    flex: 1,
    width: "100%",
    height: 35,
  },
});

export default Share4;

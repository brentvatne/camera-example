import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import { Permissions } from "react-native-unimodules";

Permissions.askAsync(Permissions.CAMERA);

export default function App() {
  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 }} onBarCodeScanned={console.log} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

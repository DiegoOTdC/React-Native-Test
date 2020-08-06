import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.row}>
      <View style={styles.purple} />
      <View style={styles.crimson} />
      <View style={styles.gold} />
    </View>
  );
}

const styles = StyleSheet.create({
  purple: {
    width: "20%",
    height: "20%",
    backgroundColor: "rebeccapurple",
  },
  crimson: { width: "50%", height: "20%", backgroundColor: "crimson" },
  gold: { width: "80%", height: "20%", backgroundColor: "gold" },
  row: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    justifyContent: "space-around",
  },
});

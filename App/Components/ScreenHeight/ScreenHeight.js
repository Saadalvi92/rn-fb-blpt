import React from "react";
import styles from "./Style";
import { SafeAreaView } from "react-native";

function ScreenHeight({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
export default ScreenHeight;

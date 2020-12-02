import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Exo11 from "./views/Exo11";


export default function App() {
  return(
    <View style={StyleSheet.firstcontainer}>
      <Exo11/>
    </View>
  );
}
const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
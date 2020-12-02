import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Acceuil from "./views/Acceuil";


export default function App() {
  return(
    <View style={styles.container}>
      <Text>Hornela Nawessi</Text>
      <Acceuil/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import ButtonCustomer from "../components/ButtonCustomer";



function Exo2() {
  const tap = () => {
    alert("hello!");
  };

  return (
    <View style={styles.firstcontainer}>
      <ButtonCustomer text="Button 1" action={tap} />
    </View>
  );
}

const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },


});

export default Exo2;

  

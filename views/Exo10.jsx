
import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonCustomer from "../components/ButtonCustomer";

function Exo10() {
    const alertTest = () => {
      alert("exo10");
    };
    return (
      <View style={styles.firstcontainer}>
        <ButtonCustomer text="Say Hello" action={alertTest} />
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    firstcontainer: {
      flex: 1,
      height: 100,
      width: 100,
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default Exo10;
  
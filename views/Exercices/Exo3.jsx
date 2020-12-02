import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonCustom from "../../components/ButtonCustomer";

function Exo3() {
  const alertTest = () => {
    alert("hello!");
  };
  return (
    <View style={styles.firstcontainer}>
      <ButtonCustom text="Say Hello" action={alertTest} />
      <ButtonCustom text="Say GoodBye" action={alertTest} />
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

export default Exo3;

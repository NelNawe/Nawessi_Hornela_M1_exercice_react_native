import React from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import "react-native-gesture-handler";

const getTitles = (nbExo) => {
  const titles = [];
  for (let i = 0; i < nbExo; i++) {
    titles[i] = "Exo" + (i + 1);
  }
  return titles;
};

function ListeExo({ navigation }) {
  return (
    <View style={styles.container}>
      {getTitles(12).map((title) => (
        <Button
          key={title}
          style={styles.item}
          title={title}
          onPress={() => navigation.navigate(title)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 10,
    justifyContent: "space-around",
  },
  item: {
    paddingTop: 10,
  },
});

export default ListeExo;

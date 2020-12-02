import React from "react";
import { StyleSheet, View } from "react-native";
import ListeExo from "./ListeExo";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Exo1 from "./Exercices/Exo1";
import Exo2 from "./Exercices/Exo2";
import Exo3 from "./Exercices/Exo3";
import Exo4 from "./Exercices/Exo4";
import Exo5 from "./Exercices/Exo5";
import Exo6 from "./Exercices/Exo6";
import Exo7 from "./Exercices/Exo7";
import Exo8 from "./Exercices/Exo8";
import Exo9 from "./Exercices/Exo9";
import Exo10 from "./Exercices/Exo10";
import Exo11 from "./Exercices/Exo11";
import Exo12 from "./Exercices/Exo12";

const Stack = createStackNavigator();

function Acceuil() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Liste d'exercices">
          <Stack.Screen name="Liste d'exercices" component={ListeExo} />
          <Stack.Screen name="Exo1" component={Exo1} />
          <Stack.Screen name="Exo2" component={Exo2} />
          <Stack.Screen name="Exo3" component={Exo3} />
          <Stack.Screen name="Exo4" component={Exo4} />
          <Stack.Screen name="Exo5" component={Exo5} />
          <Stack.Screen name="Exo6" component={Exo6} />
          <Stack.Screen name="Exo7" component={Exo7} />
          <Stack.Screen name="Exo8" component={Exo8} />
          <Stack.Screen name="Exo9" component={Exo9} />
          <Stack.Screen name="Exo10" component={Exo10} />
          <Stack.Screen name="Exo11" component={Exo11} />
          <Stack.Screen name="Exo12" component={Exo12} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Acceuil;

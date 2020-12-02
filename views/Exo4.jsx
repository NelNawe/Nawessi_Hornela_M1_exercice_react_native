import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, onClick } from "react-native";
import ButtonCustomer from "../components/ButtonCustomer";
function Exo4() {
        const [count, setCount] = useState(0);
        const onClick = () => setCount(count + 1);
    
       return (
        
          <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text>You've pressed the button: {count} time(s).</Text>
          </View>
          <ButtonCustomer style={styles.button} action={onClick} text="Press me" />
        </View>
      );
    
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 15,
          alignItems: "center",
        },
        button: {
          alignItems: "center",
          backgroundColor: "#ecf0f1",
          padding: 8,
        },
        countContainer: {
          alignItems: "center",
          padding: 8,
        },
      });
      
     }


export default Exo4;
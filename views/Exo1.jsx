import React from "react";
import Square from "../components/Square";
import {View, StyleSheet, Text} from "react-native";


 function Exo1() {
  return (
              <View style={styles.square}>
                <Square color="blue" title="Hello world" />
                </View>);
        }
        const styles = StyleSheet.create({
          firstcontainer: {
            flex: 1,
           backgroundColor: '#fff',
          },
          square: {
            textAlign: "center",
            justifyContent: "center",
          }
        });
  
 export default Exo1 

import React from "react";
import {Text, StyleSheet, View, TouchableOpacity } from "react-native";
import ButtonCustomer from "../../components/ButtonCustomer";


class Exo11 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text>Press Count: {this.state.count}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ count: this.state.count + 1 })}
          >
            <Text>Press me</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "pink",
      padding: 5,
      height: 50,
    },
    countContainer: {
      alignItems: "center",
      backgroundColor: "pink",
      padding: 5,
      height: 50,
    },
  });
  
  export default Exo11;
  
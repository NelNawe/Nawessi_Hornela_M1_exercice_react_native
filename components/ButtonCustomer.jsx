import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';



function ButtonCustomer({ text, action }) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          action();
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      backgroundColor: "pink",
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  
  export default ButtonCustomer;
import React from 'react';
import {View, StyleSheet, Text, SectionList, SafeAreaView, ScrollView } from 'react-native';
import Square from "../../components/Square";

  function Exo6() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {getSquares(15).map((square, index) => (
          <Square key={index} color="blue" title={square} />
        ))}
      </ScrollView>
    );
  }

  const getSquares = (nbSquare) => {
    const squares = [];
    for (let i = 0; i < nbSquare; i++) {
      squares[i] = "Square " + (i + 1);
    }
    return squares;
  };
  

const styles = StyleSheet.create({
  firstcontainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'space-between',
      textAlign: 'center',
      height: '1000',
      width: '1000',

    },
    scrollView: {
      marginHorizontal: 20,
    },
    paragraph: {
      margin: 5,
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    
    
  });
  export default Exo6;

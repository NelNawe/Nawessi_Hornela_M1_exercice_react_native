import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Constants from 'expo-constants';
import Square from "../components/Square";

function Exo5 () {
  return(
    <View style={styles.firstcontainer}>
    <Square color="blue" title="Square 1" />
    <Square color="green" title="Square 2" />
    <Square color="pink" title="Square 3" />
  </View>
);
}

  
const styles = StyleSheet.create({
  firstcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Exo5
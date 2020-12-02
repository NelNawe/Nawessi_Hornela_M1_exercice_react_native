import React from "react";
import {Text, StyleSheet, View, TouchableOpacity } from "react-native";
import ButtonCustomer from "../components/ButtonCustomer";


class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
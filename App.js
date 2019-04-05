import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./src/components/screens/main/MainScreen.js";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

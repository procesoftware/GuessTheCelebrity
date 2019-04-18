import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import GameScreen from "./src/components/screens/game/GameScreen";
import HomeScreen from './src/components/screens/home/HomeScreen'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
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

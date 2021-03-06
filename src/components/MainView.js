import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Rating } from "react-native-elements";

class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={{ fontStyle: "italic" }}>Guess The Celebrity</Text>
        </View>
        <Image
          style={{ width: 100 + "%", height: 65 + "%" }}
          source={require("../../images/image2.jpg")}
        />
        <View style={styles.tempGuess}>
          <Text> ___ ___ ___ ___ ___ ___ ___</Text>
        </View>
        <View style={styles.buttonView}>
          <Button title="A" />
          <Button title="B" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: 100 + "%",
    height: 5 + "%",
    marginTop: 10 ,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    marginTop: 20,
    width: 100 + "%",
    height: 100 + "%"
  },
  button: {
    width: 50,
    height: 50
  },
  buttonView: {
    width: 100,
    height: 50,
    marginTop: 10,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 40,
    flex: 0,
    flexDirection: "row"
  },
  tempGuess: {
    width: 100 + "%",
    height: 40,
    marginTop: 10,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainView;

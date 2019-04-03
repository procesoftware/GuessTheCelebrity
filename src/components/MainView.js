import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Rating } from "react-native-elements";

class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text style={{ fontStyle: "italic" }}>Guess The Celebrity</Text>
        </View>
        <Image
          style={{ width: 100 + "%", height: 65 +"%" }}
          source={require("../../images/image2.jpg")}
        />
        <View style={styles.tempGuess}>
          <Text> ___    ___   ___   ___   ___   ___   ___</Text>
        </View>
        <View style={styles.tempButton}>
          <Button
            title="A"
          />
           <Button
            title="B"
          />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 46,
    marginTop: 20,
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
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  tempButton: {
    width: 100 + "%",
    height: 100,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 40
  },
  tempGuess: {
    width: 100 + "%",
    height: 40,
    marginTop: 10,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default MainView;

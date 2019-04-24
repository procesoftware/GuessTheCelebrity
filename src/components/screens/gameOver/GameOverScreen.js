import React, { Component } from "react";
import { Image, View } from "react-native";
import {styles} from './GameOverScreen.style';

export default class GameOverScreen extends Component {
  render() {
    return (
      <View>
        <Image source={require("../../../../images/gameover.jpg")}
          resizeMode="stretch" fadeDuration={10}
          style={styles.winImage}
          />
      </View>
    );
  }
}

import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'

import {inject, observer} from "mobx-react/native";
import {styles} from './WinScreen.style';

@inject('store') @observer
export default class WinScreen extends Component {
  
  static navigationOptions = {
    title: "Guess The Celebrity",
    headerLeft: null
  };
  
  render() {
    const store = this.props.store;
    return (
      <View >
        <Image source={require("../../../../images/win.png")}
          resizeMode="stretch" fadeDuration={10}
          style={styles.winImage}
          />
          <Button rounded
                  onPress={() => this.props.navigation.navigate("Game")}
                  title= "Play again"
          />
      </View>
    )
  }
}

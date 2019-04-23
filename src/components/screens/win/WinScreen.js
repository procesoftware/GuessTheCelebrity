import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import {inject, observer} from "mobx-react/native";

@inject('store') @observer
export default class WinScreen extends Component {
  
  static navigationOptions = {
    title: "Guess The Celebrity",
    headerLeft: null
  };
  
  render() {
    const store = this.props.store;
    return (
      <View>
        <Text>WIN 10 Coins</Text> 
        <Text>Total Coins: {store.score}</Text>
        <Button
                rounded
                onPress={() => this.props.navigation.navigate("Game")}
                title= "Play again"
        />
      </View>
    )
  }
}

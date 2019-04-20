import React, { Component } from "react";
import GameScreen from "./src/components/screens/game/GameScreen.js";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./src/components/screens/home/HomeScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen
  },
  {
    initialRouteName: "Home"
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

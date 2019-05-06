import React, { Component } from "react";
import GameScreen from "./src/components/screens/game/GameScreen.js";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "./src/components/screens/home/HomeScreen";
import GameOverScreen from "./src/components/screens/gameOver/GameOverScreen";
import WinScreen from "./src/components/screens/win/WinScreen";
import Fireworks from "./src/components/screens/win/Fireworks";
import TryAgain from "./src/components/screens/win/TryAgain";
import { Provider } from "mobx-react";
import ScoreStore from "./src/store/ScoreStore.js";
import { YellowBox } from 'react-native';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  GameOver: GameOverScreen,
  Win: WinScreen,
  Fireworks: Fireworks,
  TryAgain: TryAgain
});

const GameStack = createStackNavigator({
  Game: GameScreen
});
const WinStack = createStackNavigator({
  Win: WinScreen
});
const FireworksStack = createStackNavigator({
  Fireworks: Fireworks
});
const TryAgainStack = createStackNavigator({
  TryAgain: TryAgain
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Game: GameStack,
      Win: WinStack,
      Fireworks: FireworksStack,
      TryAgain: TryAgainStack
    },
    {
      initialRouteName: "App"
    }
  )
);

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillUpdate is deprecated'
    ]);
    return (
      <Provider store={ScoreStore}>
        <AppContainer />
      </Provider>
    );
  }
}

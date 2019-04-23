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

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Game: GameScreen,
  GameOver: GameOverScreen,
  Win: WinScreen
});
//const AuthStack = createStackNavigator({ Game: SignInScreen });

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      //AuthLoading: AuthLoadingScreen,
      App: AppStack
      // Auth: AuthStack,
    },
    {
      initialRouteName: "App"
    }
  )
);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

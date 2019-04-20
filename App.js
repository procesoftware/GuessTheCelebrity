import React, { Component } from "react";
import GameScreen from "./src/components/screens/game/GameScreen.js";
import { createAppContainer, createStackNavigator,createSwitchNavigator } from "react-navigation";
import HomeScreen from "./src/components/screens/home/HomeScreen";


const AppStack = createStackNavigator({ Home: HomeScreen, Game: GameScreen });
//const AuthStack = createStackNavigator({ Game: SignInScreen });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    App: AppStack,
   // Auth: AuthStack,
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'App',
  }
));

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

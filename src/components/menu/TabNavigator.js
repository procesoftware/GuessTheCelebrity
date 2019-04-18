import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import GameScreen from '../screens/game/GameScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import LevelScreen from '../screens/level/LevelScreen';
import HomeScreen from '../screens/home/HomeScreen';
import { Icon } from 'native-base';

const TabNavigator = createBottomTabNavigator({
  Game: {
    screen: GameScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='apps' />;
      },
    }
  },
  Level: {
    screen: LevelScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='camera' />;
      },
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='home'  />;
      },
    },
  }
});

export default createAppContainer(TabNavigator);
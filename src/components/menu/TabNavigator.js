import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import GameScreen from '../screens/game/GameScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import LevelScreen from '../screens/level/LevelScreen';
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
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='person'  />;
      },
    },
  }
});

export default createAppContainer(TabNavigator);
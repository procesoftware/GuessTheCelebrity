import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/main/MainScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import LevelScreen from '../screens/level/LevelScreen';
import { Icon } from 'react-native-elements';

const TabNavigator = createBottomTabNavigator({
  Game: {
    screen: MainScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='home' size={25} color={tintColor} />;
      },
    }
  },
  Level: {
    screen: LevelScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='settings' size={25} color={tintColor} />;
      },
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name='settings' size={25} color={tintColor} />;
      },
    },
  }
});

export default createAppContainer(TabNavigator);
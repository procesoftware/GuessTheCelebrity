/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TabNavigator from './src/components/menu/TabNavigator';
import MyDrawerNavigator from './src/components/menu/MyDrawerNavigator';

AppRegistry.registerComponent(appName, () => TabNavigator);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TabNavigator from './src/components/menu/TabNavigator';

AppRegistry.registerComponent(appName, () => TabNavigator);

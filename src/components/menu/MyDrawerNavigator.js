import React from 'react';
import { Text, Button, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/main/MainScreen';
import { Icon } from 'react-native-elements'

class HomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Game',
      drawerIcon: ({ tintColor }) => (
        <Icon name='questioncircleo' />
      ),
    };
  
    render() {
      return (
       <MainScreen />
      );
    }
}
 
class CoinScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Get Coin',
      drawerIcon: ({ tintColor }) => (
        <Icon name='monetization-on' />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Coin Screen"
        />
      );
    }
}

class SettingsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Setting',
      drawerIcon: ({ tintColor }) => (
        <Icon name='settings' />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
}

class SignOffScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Sign-off',
      drawerIcon: ({ tintColor }) => (
        <Icon name='sign-out' />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    GetCoins: {
        screen: CoinScreen,
    },
    Settings: {
        screen: SettingsScreen,
    },
    SignOff: {
        screen: SignOffScreen,
    },
});
  
  export default createAppContainer(MyDrawerNavigator);
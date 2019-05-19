import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native';

import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
//importing library to use Stopwatch and Timer

import { inject, observer } from "mobx-react/native";
import { styles } from './WinScreen.style';




@inject('store') @observer
export default class TryAgain extends Component {

  static navigationOptions = ({ navigation, screenProps }) =>  ({
    title: "Guess The Celebrity",
    headerLeft: ( 
    <Button
      onPress={ () =>  navigation.navigate("Game") }
      title="Game"
      color="#f00"
    />),
  });

  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: true,
      isStopwatchStart: false,
      timerDuration: 3000,
      resetTimer: false,
      resetStopwatch: false,
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);

  }
  startStopTimer() {
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
    this.props.navigation.navigate("Game");
  }
  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true});
  }
  startStopStopWatch() {
    this.setState({isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false});
    
  }
  resetStopwatch() {
    this.setState({isStopwatchStart: false, resetStopwatch: true});
  }
  getFormattedTime(time) {
      this.currentTime = time;
  }

  render() {
    const store = this.props.store;
    return (
      <View >
        <Image source={require("../../../../images/TryAgain.jpg")}
          resizeMode="stretch" fadeDuration={10}
          style={styles.winImage}
        />
        <Button rounded
          onPress={() => this.props.navigation.navigate("Game")}
          title="Continue"
        />
       <Timer 
            totalDuration={this.state.timerDuration} msecs 
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={() => { this.props.navigation.navigate("Game");}}
            //can call a function On finish of the time 
            getTime={this.getFormattedTime} />
      </View>
    )
  }
}

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 100,
    alignItems:'center',
  },
  text: {
    fontSize: 12,
    color: '#FFF',
    marginLeft: 7,
  }
};

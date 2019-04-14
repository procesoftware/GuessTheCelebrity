import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { styles, buttons } from "./MainScreen.styles";
import { Container, Header, Content, Button, Icon } from 'native-base';

export default class MainView extends Component {

  constructor(props){
    super(props);
    this.state = {
      celebrityName: [],
      guessName: [],
      randomChars: [],
      myCoins: 0,
      level: 1
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame = () => {
    var splited = this.state.celebrityName.slice();
    splited = "TRUMP".split('');

    var randomValues = this.shuffle(this.generateRandomChars(splited.slice()));
    this.setState({celebrityName: splited,
      guessName: [],
      randomChars: randomValues});
  }

  _onResetButton = () => {
    this.initializeGame();
  }

  generateRandomChars = (guessName) => {
    var chars ='ABCDEFGHIJKLMNOPQRSTUVWXTZ'.split('');
    var randomValues = guessName;
    
    for(i=guessName.length;i<18;i++){
        randomValues.push(chars[Math.floor((Math.random() * 25) + 1)]);
    } 
    console.log(randomValues);
    return randomValues;
  }

  shuffle = (a) => {
    for (let i = a.length -1 ; i > 0; i--) {
        const j = Math.floor(Math.random() * (i ));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  _loadGuessedBoard = () =>{
    var len = this.state.celebrityName.length;
    var result = [];

    for(i=0;i<len;i++){
      if(typeof(this.state.guessName[i])=== 'undefined')
        result.push(<Text key={i}> ___ </Text>);
      else 
        result.push(<Text key={i}>{this.state.guessName[i]}</Text>);
    }
    return result;
  }

  getResult = (arr1, arr2) => {
    if(arr2.lenght < arr1.lenght)
      return false;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
          return false;
      }
      return true;
  }

  _onPressChar = (index) => {
    var randomChars = this.state.randomChars.slice();
    var guessName = this.state.guessName.slice();

    if(randomChars[index]==="")
      return;
    guessName.push(randomChars[index])
    randomChars[index] = "";

    this.setState({randomChars: randomChars, guessName: guessName})

    if(this.getResult(this.state.celebrityName, guessName))
      alert("WIN")
  }

  _setRandomChar = (index) => {
    if(typeof(this.state.randomChars[i])!== 'undefined')
      return <Text >{this.state.randomChars[index]}</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text>Level {this.state.level}</Text>
          <Text style={{ fontStyle: "italic" }}>Guess The Celebrity</Text>
          <Text>{this.state.myCoins} Coins</Text>
        </View>
        <Image
          style={{ width: 100 + "%", height: 60 + "%" }}
          source={require("../../../../images/trump.jpg")}
        />
        <View style={{flexDirection:"row", justifyContent: "center", marginTop: 20}}>
            {this._loadGuessedBoard()}
        </View>
        <View style={{flexDirection:"row", justifyContent: "center", marginTop: 20}}>
          <TouchableOpacity onPress={() => this._onPressChar(0)} style={buttons.tile} >
            {this._setRandomChar(0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(1)} style={buttons.tile} >
            {this._setRandomChar(1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(2)} style={buttons.tile} >
            {this._setRandomChar(2)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(3)} style={buttons.tile} >
            {this._setRandomChar(3)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(4)} style={buttons.tile} >
            {this._setRandomChar(4)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(5)} style={buttons.tile} >
            {this._setRandomChar(5)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(6)} style={buttons.tile} >
            {this._setRandomChar(6)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(7)} style={buttons.tile} >
            {this._setRandomChar(7)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(8)} style={buttons.tile} >
            {this._setRandomChar(8)}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", justifyContent: "center"}}>
          <TouchableOpacity onPress={() => this._onPressChar(9)} style={buttons.tile} >
            {this._setRandomChar(9)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(10)} style={buttons.tile} >
            {this._setRandomChar(10)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(11)} style={buttons.tile} >
            {this._setRandomChar(11)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(12)} style={buttons.tile} >
            {this._setRandomChar(12)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(13)} style={buttons.tile} >
            {this._setRandomChar(13)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(14)} style={buttons.tile} >
            {this._setRandomChar(14)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(15)} style={buttons.tile} >
            {this._setRandomChar(15)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(16)} style={buttons.tile} >
            {this._setRandomChar(16)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._onPressChar(17)} style={buttons.tile} >
            {this._setRandomChar(17)}
          </TouchableOpacity>
        </View>
        <View>
              <Button  title="Reset" onPress={() => this._onResetButton()}/>
              
        </View>
      </View>
    );
  }
}


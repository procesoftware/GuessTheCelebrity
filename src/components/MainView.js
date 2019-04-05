import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";

class MainView extends Component {

  constructor(props){
    super(props);
    this.state = {
      celebrityName: [],
      guessName: [],
      randomChars: []
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

  generateRandomChars = (guessName) => {
    var chars ='ABCDEFGHIJKLMNOPQRSTUVWXTZ'.split('');
    var randomValues = guessName;
    
    for(i=guessName.length;i<=18;i++){
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
    console.log(a)
    return a;
  }

  charsBoard = () =>{
    var len = this.state.celebrityName.length;
    var result = [];

    for(i=0;i<len;i++){
      if(typeof(this.state.guessName[i])=== 'undefined')
        result.push(<Text key={i}> ___ </Text>)
      else 
        result.push(<Text key={i}> {this.state.guessName[i]} </Text>)
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

  pressButton = (index) => {
    var randomChars = this.state.randomChars.slice();
    var guessName = this.state.guessName.slice();
    guessName.push(randomChars[index])
    randomChars[index] = "";

    this.setState({randomChars: randomChars, guessName: guessName})

    if(this.getResult(this.state.celebrityName, guessName))
      alert("WIN")
  }

  createButtons = (start) =>{
    var result = [];
    for(i=start;i<start+5;i++){
        result.push(<Button style={styles.button} onPress={(e) => this.pressButton(i,e)} title={this.state.randomChars[i]}></Button>)
    }
    return result;
  }

  setRandomChar = (index) => {
    if(typeof(this.state.randomChars[i])!== 'undefined')
      return <Button style={styles.button} onPress={() => this.pressButton(index)} title={this.state.randomChars[index]}></Button>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={{ fontStyle: "italic" }}>Guess The Celebrity</Text>
        </View>
        <Image
          style={{ width: 100 + "%", height: 65 + "%" }}
          source={require("../../images/trump.jpg")}
        />
        <View style={{flexDirection:"row", justifyContent: "center", marginTop: 20}}>
            {this.charsBoard()}
        </View>
        <View style={{flexDirection:"row", justifyContent: "center", marginTop: 20}}>
            {this.setRandomChar(0)}
            {this.setRandomChar(1)}
            {this.setRandomChar(2)}
            {this.setRandomChar(3)}
            {this.setRandomChar(4)}
            {this.setRandomChar(5)}
            {this.setRandomChar(6)}
            {this.setRandomChar(7)}
            {this.setRandomChar(8)}
        </View>
        <View style={{flexDirection:"row", justifyContent: "center"}}>
            {this.setRandomChar(9)}
            {this.setRandomChar(10)}
            {this.setRandomChar(11)}
            {this.setRandomChar(12)}
            {this.setRandomChar(13)}
            {this.setRandomChar(14)}
            {this.setRandomChar(15)}
            {this.setRandomChar(16)}
            {this.setRandomChar(17)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    width: 100 + "%",
    height: 5 + "%",
    marginTop: 10 ,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    marginTop: 20,
    width: 100 + "%",
    height: 100 + "%"
  },
  button: {
    width: 60,
    height: 80,
  },
  tile: {
    borderWidth: 3,
    width: 20,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonView: {
    width: 100,
    height: 50,
    marginTop: 10,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 40,
    flex: 0,
    flexDirection: "row"
  },
  tempGuess: {
    width: 100 + "%",
    height: 40,
    marginTop: 10,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainView;

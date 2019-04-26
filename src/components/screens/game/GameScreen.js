import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";
import { styles, buttons } from "./GameScreen.styles";
import NavBar from "../../navbar/NavBar";
import {Icon} from 'native-base';
import { getImageSourceLink } from "./ButtonFunc";
import RandomImage from "./RandomImage";
import { SafeAreaView } from "react-navigation";
import {inject, observer} from "mobx-react/native";

@inject('store') @observer
export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrityName: [],
      guessName: [],
      randomChars: [],
      index: 0
    };
  }

  componentDidMount() {
    this.initializeGame(true);
  }

  initializeGame = firstLoad => {
    var splited = this.state.celebrityName.slice();
    let index = this.state.index;
    if (firstLoad === true) {
      index = Math.floor(Math.random() * RandomImage.length); // generate random index
    }
    splited = RandomImage[index].name.split(""); // get random image name

    var randomValues = this.shuffle(this.generateRandomChars(splited.slice()));
    this.setState({
      celebrityName: splited,
      guessName: [],
      randomChars: randomValues,
      index: index
    });
  };

  _onResetButton = () => {
    this.initializeGame(false);
  };

  generateRandomChars = guessName => {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ".split("");
    var randomValues = guessName;

    for (i = guessName.length; i < 18; i++) {
      randomValues.push(chars[Math.floor(Math.random() * 25 + 1)]);
    }
    return randomValues;
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  _loadGuessedBoard = () => {
    var len = this.state.celebrityName.length;
    var result = [];

    for (i = 0; i < len; i++) {
      if (typeof this.state.guessName[i] === "undefined")
        //result.push(<Text key={i}> _p_ </Text>)
        result.push(
          <Image
            key={i}
            style={buttons.tile}
            source={require("../img/box.png")}
          />
        );
      //result.push(<Text key={i}> {this.state.guessName[i]} </Text>)
      else
      {
        //result.push(<Text key={i}> {this.state.guessName[i]} </Text>)
         let x = i;
         result.push(<TouchableOpacity key={x} onPress={() => this._onPressGuessChar(x)} style={buttons.tile} >
                   <Image key={x} style={styles.button} source={getImageSourceLink(this.state.guessName[x])} />
                  </TouchableOpacity>
        )
      }
    }
    return result;
  }

  _loadLetterBoard = (relativeFlag) => {
    var startIndex = 0;
    var endIndex = 0;//this.state.celebrityName.length;
    if (relativeFlag === 0 ){
       startIndex = 0;
       endIndex = 9;
    }
    else {
      startIndex = 9;
      endIndex = 18;
    }
    var result = [];

    for (i = startIndex; i < endIndex; i++) {  
        let x = i;  
         result.push(
          <TouchableOpacity key = {x} onPress={() => this._onPressChar(x)} style={buttons.tile} >
              {this._setRandomChar(x)}
          </TouchableOpacity>
         );
    }
    return result;
  };

  getResult = (arr1, arr2) => {
    if (arr2.lenght < arr1.lenght) return false;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  _onPressChar = index => {
    var randomChars = this.state.randomChars.slice();
    var guessName = this.state.guessName.slice();

    if (randomChars[index] === "") return;
    guessName.push(randomChars[index]);
    randomChars[index] = "";

    this.setState({ randomChars: randomChars, guessName: guessName });

    if (this.getResult(this.state.celebrityName, guessName)){
      this.props.navigation.navigate("Win");
      this.props.store.increment();
    } else if(this.state.celebrityName.length===guessName.length) 
      this.props.navigation.navigate("GameOver");
  };

  _onPressGuessChar = (i) => {
    //BURAYI YAZIYORUZ
    //return(<Image key={index} style={styles.button} source={require('../img/box.png')} />)
   // this.state.guessName = "";// should get the remaining value from the index
    var changedGuessName = this.state.guessName.slice(0,i);
    this.setState({  guessName: changedGuessName });
    //giden harfleri yerine koy 
    //hangi harfler eklenecek letterBoarda
    var placeBackLetters = this.state.guessName.slice(i, this.state.guessName.length);
    //placebackLetters should be placed back to the letter board;
    var localRandomChars = this.state.randomChars.slice();
    for (var  i=0 ; i < placeBackLetters.length; i++){
          let locali =i;
         for (var j=0; j < localRandomChars.length ; j++){
           let localj =j;
           if (localRandomChars[localj]=== ""){
            localRandomChars[localj]= placeBackLetters[locali];
            break;
           }
         }
    }
    this.setState({  randomChars: localRandomChars });

  }

  _setRandomChar = index => {
    if (typeof this.state.randomChars[i] !== "undefined") {
      return (
        <Image
          style={styles.button}
          source={getImageSourceLink(this.state.randomChars[index])}
        />
      );
    }
  };

  static navigationOptions = {
    title: "Guess The Celebrity",
    headerLeft: null
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <View>
            <Text>Total Coins: {this.props.store.score}</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={RandomImage[this.state.index].url}
        />
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20, borderTopWidth: 5, borderBottomWidth: 5, borderTopColor: "#1e90ff", borderBottomColor: "#1e90ff", backgroundColor: "#1e90ff" }}>
          {this._loadGuessedBoard()}
        </View>
        <View style={buttons.container}>
           { this._loadLetterBoard(0) }
           </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
           { this._loadLetterBoard(1) }
        </View>
        
        <View>

          <Button
            title="Reset"
            style={buttons.reset}
            onPress={() => this._onResetButton()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

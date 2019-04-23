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

    for (i = guessName.length; i <= 18; i++) {
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
        result.push(
          <TouchableOpacity
            key={i}
            onPress={() => this._onPressGuessChar(i)}
            style={buttons.tile}
          >
            <Image
              key={i}
              style={styles.button}
              source={getImageSourceLink(this.state.guessName[i])}
            />
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

  _onPressGuessChar = index => {
    //BURAYI YAZIYORUZ
    //return(<Image key={index} style={styles.button} source={require('../img/box.png')} />)
  };

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
          <View><Text>Total Coins: {this.props.store.score}</Text></View>
        </View>
        <Image
          style={styles.image}
          source={RandomImage[this.state.index].url}
        />
        <View style={styles.guessBoard}>{this._loadGuessedBoard()}</View>
        <View style={buttons.container}>
          <TouchableOpacity
            onPress={() => this._onPressChar(0)}
            style={buttons.tile}
          >
            {this._setRandomChar(0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(1)}
            style={buttons.tile}
          >
            {this._setRandomChar(1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(2)}
            style={buttons.tile}
          >
            {this._setRandomChar(2)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(3)}
            style={buttons.tile}
          >
            {this._setRandomChar(3)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(4)}
            style={buttons.tile}
          >
            {this._setRandomChar(4)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(5)}
            style={buttons.tile}
          >
            {this._setRandomChar(5)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(6)}
            style={buttons.tile}
          >
            {this._setRandomChar(6)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(7)}
            style={buttons.tile}
          >
            {this._setRandomChar(7)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(8)}
            style={buttons.tile}
          >
            {this._setRandomChar(8)}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => this._onPressChar(9)}
            style={buttons.tile}
          >
            {this._setRandomChar(9)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(10)}
            style={buttons.tile}
          >
            {this._setRandomChar(10)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(11)}
            style={buttons.tile}
          >
            {this._setRandomChar(11)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(12)}
            style={buttons.tile}
          >
            {this._setRandomChar(12)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(13)}
            style={buttons.tile}
          >
            {this._setRandomChar(13)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(14)}
            style={buttons.tile}
          >
            {this._setRandomChar(14)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(15)}
            style={buttons.tile}
          >
            {this._setRandomChar(15)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(16)}
            style={buttons.tile}
          >
            {this._setRandomChar(16)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._onPressChar(17)}
            style={buttons.tile}
          >
            {this._setRandomChar(17)}
          </TouchableOpacity>
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

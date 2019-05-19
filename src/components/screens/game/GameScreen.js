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
import { inject, observer } from "mobx-react/native";
import TimerCountdown from "react-native-timer-countdown";
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


@inject("store")
@observer
export default class GameScreen extends Component {
  play = () => {
    this.setState(({ play }) => ({ play: !play }));
  };

  constructor(props) {
    super(props);
    this.state = {
      celebrityName: [],
      guessName: [],
      randomChars: [],
      index: 0,
      play: true,
      time: 0,
      milliseconds: 10000,
      letterErrorCount:0
    };
  }

  componentDidMount() {
    this.initializeGame(true);
  }

  componentWillUnmount(){
    this.setState({milliseconds:0});
   // let config = {
      //databaseURL: "https://guessthecelebrity-de0ce.firebaseio.com",
     // projectId: "<project-id>",
  //};
 // firebase.initializeApp(config);
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
      index: index,
      letterErrorCount:0
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
      else {
        //result.push(<Text key={i}> {this.state.guessName[i]} </Text>)
        let x = i;
        result.push(
          <TouchableOpacity
            key={x}
            onPress={() => this._onPressGuessChar(x)}
            style={buttons.tile}
          >
            <Image
              key={x}
              style={styles.button}
              source={getImageSourceLink(this.state.guessName[x])}
            />
          </TouchableOpacity>
        );
      }
    }
    return result;
  };

  _loadLetterBoard = relativeFlag => {
    var startIndex = 0;
    var endIndex = 0; //this.state.celebrityName.length;
    if (relativeFlag === 0) {
      startIndex = 0;
      endIndex = 9;
    } else {
      startIndex = 9;
      endIndex = 18;
    }
    var result = [];

    for (i = startIndex; i < endIndex; i++) {
      let x = i;
      result.push(
        <TouchableOpacity
          key={x}
          onPress={() => this._onPressChar(x)}
          style={buttons.tile}
        >
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

    if (this.getResult(this.state.celebrityName, guessName)) {
      if (this.state.letterErrorCount <= 2){
       this.props.store.increment();
      }
      if (this.props.store.score % 100 === 0 &&  this.props.store.score >= 100) {
        // this.props.navigation.navigate("LevelPage");
        this.props.navigation.navigate("Win");
      } else {
        if (this.state.letterErrorCount <= 2){
          this.setState({letterErrorCount:0});
          this.props.navigation.navigate("Fireworks");
        }
        else if (this.state.letterErrorCount > 2){
          this.setState({letterErrorCount:0});
          this.props.navigation.navigate("TryAgain");
        }
      }
    } else if (this.state.celebrityName.length === guessName.length)
      this.props.navigation.navigate("GameOver");
  };

  _onPressGuessChar = i => {
    //BURAYI YAZIYORUZ
    //return(<Image key={index} style={styles.button} source={require('../img/box.png')} />)
    // this.state.guessName = "";// should get the remaining value from the index
    var changedGuessName = this.state.guessName.slice(0, i);
    this.setState({ guessName: changedGuessName });
    //giden harfleri yerine koy
    //hangi harfler eklenecek letterBoarda
    var placeBackLetters = this.state.guessName.slice(
      i,
      this.state.guessName.length
    );
    //placebackLetters should be placed back to the letter board;
    var localRandomChars = this.state.randomChars.slice();
    for (var i = 0; i < placeBackLetters.length; i++) {
      let locali = i;
      for (var j = 0; j < localRandomChars.length; j++) {
        let localj = j;
        if (localRandomChars[localj] === "") {
          localRandomChars[localj] = placeBackLetters[locali];
          break;
        }
      }
    }
    this.setState({ randomChars: localRandomChars });
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

  _onTickTimer = milliseconds => {
    //calls the selfPlay every 10 seconds , resets the counter
    console.log("tick", milliseconds);
    if (milliseconds < 1000) {
      this._selfPlay();
      this.setState({ milliseconds: 10000 });
    }
  };

  _selfPlay = () => {
    // check the letter on guessboard and
    //click the button which is waiting next
    console.log("selfPlay hint");
    var randomChars = this.state.randomChars.slice();
    var guessName = this.state.guessName.slice();
    //guessName.push(randomChars[index]);
    //randomChars[index] = "";
    //this.setState({ randomChars: randomChars, guessName: guessName });
    //find the index
    // ismi burda this.state.celebrityName
    // bu ana kadar yazdiklari guessName de
    // asagi board randomChars da
    // bu ana kadar yazdiklarina ekle,
    // en basdan guessname e bak,
    // dogru olmayani bul, tikle
    for (var i = 0; i < this.state.celebrityName.length; i++) {
      if (guessName[i] != this.state.celebrityName[i]) {
        // find the index of the char in randomchars
        index = this._getBoardLetter(this.state.celebrityName[i]);
        this._onPressChar(index);
        this.setState({letterErrorCount: this.state.letterErrorCount+1})
        break;
      }
    }
  };

  _getBoardLetter = searchLetter => {
    // the Letter is send find the letter and return the index on the board
    //(this.state.celebrityName[i])
    var randomChars = this.state.randomChars.slice();
    for (var i = 0; i < randomChars.length; i++) {
      if (searchLetter === randomChars[i]) return i;
    }
  };

  static navigationOptions = {
    title: "Guess The Celebrity",
    headerLeft: null
  };



  render() {
    const { play } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
            <View>
              <Text>Total Coins : {this.props.store.score} </Text>              
            </View>
            <View>
              <Icon name="trophy"    size={30}  onPress={() => this.props.navigation.navigate("AvatarAndClickable")} />
            </View>
             <View>
             <Icon name="login" size={30} color="#900" onPress={() => this.props.navigation.navigate("Login")}/>
            </View>
            <View >
             
              <TimerCountdown
                initialMilliseconds={this.state.milliseconds}
                onTick={milliseconds => this._onTickTimer(milliseconds)}
                onExpire={() => console.log("complete")}
                formatMilliseconds={milliseconds => {
                  const remainingSec = Math.round(milliseconds / 1000);
                  const seconds = parseInt((remainingSec % 60).toString(), 10);
                  const minutes = parseInt(
                    ((remainingSec / 60) % 60).toString(),
                    10
                  );
                  const hours = parseInt((remainingSec / 3600).toString(), 10);
                  const s = seconds < 10 ? "0" + seconds : seconds;
                  const m = minutes < 10 ? "0" + minutes : minutes;
                  let h = hours < 10 ? "0" + hours : hours;
                  h = h === "00" ? "" : h + ":";
                  return h + m + ":" + s;
                }}
                allowFontScaling={true}
              />
            </View>
        </View>
        <Image
          style={styles.image}
          source={RandomImage[this.state.index].url}
        />
        <View style={styles.guessBoard}>{this._loadGuessedBoard()}</View>
        <View style={buttons.container}>{this._loadLetterBoard(0)}</View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {this._loadLetterBoard(1)}
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

import React, { Component } from 'react';
import { View, StyleSheet,  ActivityIndicator, Text, Button } from 'react-native';

import { inject, observer } from "mobx-react/native";
import { GTCInput } from '../../common/GTCInput';
import { GTCButton } from '../../common/GTCButton';
import GTCFirebase from "../../../../firebaseConfig";


@inject('store') @observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
         email: '',
         password:'',
         authenticating: false,
         errorMessage: ''
        };
      }
      static navigationOptions = ({ navigation, screenProps }) =>  ({
        title: "Guess The Celebrity",
        headerLeft: ( 
        <Button
          onPress={ () =>  navigation.navigate("Game") }
          title="Game"
          color="#f00"
        />),
      });
      componentWillMount(){
       
      }

      onPressSignIn() {
          //this.setState({authenticating:true})

          GTCFirebase
              .auth()
              .createUserWithEmailAndPassword(this.state.email, this.state.password)
              .then(() => { 
                  this.props.navigation.navigate("Game")
                  this.setState({authenticating:false})
                })
              .catch(error => {
                  this.setState({ errorMessage: error.message });
                  this.setState({authenticating:false});                  
                })          
      }

      register(){
          this.props.navigation.navigate("Register");
      }

     renderCurrentState()  {
        if (this.state.authenticating){
            return (
                <View style={styles.form}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }

        return (
            <View style={styles.form}>
                <GTCInput
                     placeholder='Enter your email....'
                     label='Email'
                     onChangeText= {email => this.setState({email:email})}
                     value={this.state.email}
                    ></GTCInput>
                     <GTCInput
                     placeholder='Enter your password....'
                     label='Password'
                     secureTextEntry
                     onChangeText= {password => this.setState({password:password})}
                     value={this.state.password}
                    ></GTCInput>
                    <GTCButton onPress={ () => this.onPressSignIn()} children="Log In"></GTCButton>
                    <GTCButton onPress={ () => this.register()} children="Register"></GTCButton>
                    <Text>{this.state.errorMessage}</Text>
            </View>
        )
    }

    render() {
        return (
            <View  style={styles.container}>
                {/* Ghetto Header */}
               
                    {this.renderCurrentState()}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent:"center",
        flexDirection: 'row',
    },
    form: {
        flex: 1
    }
}
);
import React, { Component } from 'react';
import { View, StyleSheet,  ActivityIndicator, Text } from 'react-native';

import { inject, observer } from "mobx-react/native";
import { GTCInput } from '../../common/GTCInput';
import { GTCButton } from '../../common/GTCButton';
import * as firebase from 'firebase';


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
      componentWillMount(){
        const firebaseConfig= {
            apiKey: "AIzaSyCAgplpZKIns2BOJ0WKBG87pCYxkS-_MvU",
            authDomain: "guessthecelebrity-de0ce.firebaseapp.com",
            databaseURL: "https://guessthecelebrity-de0ce.firebaseio.com",
            projectId: "guessthecelebrity-de0ce",
            storageBucket: "guessthecelebrity-de0ce.appspot.com",
            messagingSenderId: "830479563653",
            appId: "1:830479563653:web:d8dcdafccce55ddc"
        }
        firebase.initializeApp(firebaseConfig);
      }

      onPressSignIn() {
          //this.setState({authenticating:true})

            firebase
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

      SignUp = (email, password) => {
        try {
          firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
          console.log(error.toString(error));
        }
      };

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
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native';

import { inject, observer } from "mobx-react/native";
import { GTCInput } from '../../common/GTCInput';
import { GTCButton } from '../../common/GTCButton';
import { addUser } from '../../../datapersist/DBUser';

@inject('store') @observer
export default class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            error: false
        }

    }

    register() {
        addUser(this.state.name, this.state.lastname, this.state.email);
        Alert.alert('User saved successfully!.');
        this.props.navigation.navigate("Game");
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Register User</Text>
                <GTCInput
                    placeholder='Name....'
                    label='Name'
                    onChangeText={name => this.setState({ name: name })}
                    value={this.state.name}
                ></GTCInput>
                <GTCInput
                    placeholder='Last Name....'
                    label='Last Name'
                    onChangeText={lastName => this.setState({ lastName: lastName })}
                    value={this.state.lastName}
                ></GTCInput>
                <GTCInput
                    placeholder='Enter your email....'
                    label='Email'
                    onChangeText={email => this.setState({ email: email })}
                    value={this.state.email}
                ></GTCInput>
                <GTCInput
                    placeholder='Enter your password....'
                    label='Password'
                    secureTextEntry
                    onChangeText={password => this.setState({ password: password })}
                    value={this.state.password}
                ></GTCInput>

                <GTCButton onPress={() => this.register()} children="Register"></GTCButton>
                <Text>{this.state.errorMessage}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2a8ab7'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
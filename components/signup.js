import React, { Component } from 'react';
import firebase from '../database/firebase';
import { Alert, TextInput, View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            isloading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Email or password is not avaliable!');
        } else {
            this.setState({ isloading: true })

            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(res => {
                    res.user.updateProfile({ displayName: this.state.name })
                    console.log('User registered successfull!')

                    this.setState({ isloading: false, name: '', email: '', password: '' })
                    this.props.navigation.navigate('Login')
                })
                .catch(error => {
                    this.setState({ errorMessage: error.message })
                    console.log('errorMessage' + error.message)
                })
        }
    }

    render() {
        if (this.state.isloading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Name"
                    value={this.state.name}
                    onChangeText={(val) => this.updateInputVal(val, 'name')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    secureTextEntry={true}
                    maxLength={15}
                />
                <Button color="#3740FE" title="Signup" onPress={() => this.registerUser()} />

                <Text
                    style={styles.loginText}
                    onPress={()=> this.props.navigation.navigate('Login')}>
                    Already registered? Click here to login
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: "center"
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});
import React, { Component } from 'react';
import firebase from '../database/firebase';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            uid: ''
        }
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        }).catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        this.state = {
            name: firebase.auth().currentUser.displayName,
            uid: firebase.auth().currentUser.uid
        }

        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Welcome {this.state.name}
                </Text>

                <Button color="#3740FE" title="Logout" onPress={()=> this.signOut()}/>
            </View>
        );
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
    textStyle: {
        fontSize: 15,
        marginBottom: 20
    }
});

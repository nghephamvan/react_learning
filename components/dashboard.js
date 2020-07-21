import React, { Component } from 'react';
import firebase from '../database/firebase';
import { View, Text, Button, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

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
            <SafeAreaView>
               
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                         <View style={styles.header} >
                    <Text style={styles.textStyle}>
                        Welcome {this.state.name}
                    </Text>

                    <Button color="#3740FE" title="Logout" onPress={() => this.signOut()} />
                </View>
                    <View style={styles.container}>
                        <Text style={styles.textStyle}>
                            Welcome {this.state.name}
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
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
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10
    }
});

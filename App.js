/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const InputTextTest = () => {
  let [email, setEmail] = useState('');
  let [pass, setPass] = useState('');

  return (<View style={styles.sectionContainer}>
    <TextInput 
      style={{height: 40}}
      placeholder="Email"
      keyboardType="email-address"
      placeholderTextColor = "#9a73ef"
      onChangeText={txt => setEmail(txt)}
    />
    <TextInput 
      style={{height: 40}}
      secureTextEntry={true}
      placeholder="Password"
      placeholderTextColor = "#9a73ef"
      onChangeText={txt => setPass(txt)}
    />
    <Button onPress={() => {
     alert('Email=$email, pass=$pass' + email + pass)
    }} title="Click me" />
  </View>
  );
}

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <InputTextTest />

        <View style={styles.searchViewContainer}>
          <TextInput style={styles.inputSearch}
            borderBottomColor="Green"
            placeholder= 'Search'/>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image style={{resizeMode:"center"}} source={{
            uri:'https://reactjs.org/logo-og.png',
            method: 'POST',
            headers: {
              Pragma: 'no-cache'
            },
            body: 'Your Body goes here'}}/>
        </TouchableOpacity>
        </View>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  searchViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#859a9b',
    borderRadius: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  inputSearch: {
    height: 40,
    width: "75%",
    marginStart: 20,
    textAlign: "left",
    borderBottomColor: "#232323",
    borderBottomWidth: 1,
    justifyContent:"flex-start"
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

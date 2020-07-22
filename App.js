/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import GitUsers from './components/gitusers';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Git users"
      screenOptions={{
        headerStatusBarHeight: 30,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }, { headerLeft: null }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard" }, { headerLeft: null }}
      />
       <Stack.Screen
        name="Git users"
        component={GitUsers}
        options={{ title: "Git users" }, { headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

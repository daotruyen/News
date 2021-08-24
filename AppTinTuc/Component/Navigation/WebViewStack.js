import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home"
import Webview from '../TwoComponent/Webview'

const Stack = createStackNavigator();
export default class WebViewStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Webview" component={Webview} />
          </Stack.Navigator>
    );
  }
}

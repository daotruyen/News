import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Podcasts from "../Podcasts"
import PlayMP3 from '../TwoComponent/PlayMP3'

const Stack = createStackNavigator();
export default class Mp3Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
          <Stack.Navigator initialRouteName="Podcasts" screenOptions={{
            headerShown: false
          }}> 
            <Stack.Screen name="Podcasts" component={Podcasts} />
            <Stack.Screen name="PlayMp3" component={PlayMP3} />
          </Stack.Navigator>
    );
  }
}

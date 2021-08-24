import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Favorite from "../Favorite"
import Person from "../Person"

import WebViewStack from './WebViewStack';
import Mp3Stack from './Mp3Stack.js'; 
import Login from '../Login/Login';
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Person') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            else if (route.name === 'NghePodcasts') {
              iconName = focused ? 'book' : 'book-outline';
            }
            else if (route.name === 'Favorite') {
              iconName = focused ? 'heart-sharp' : 'heart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name="Home" component={WebViewStack} />
          <Tab.Screen name="Person" component={Person} />
          <Tab.Screen name="NghePodcasts" component={Mp3Stack}/>
          <Tab.Screen name="Favorite" component={Favorite} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }


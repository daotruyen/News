import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {WebView} from 'react-native-webview'
export default class Webview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const { linkParam } = this.props.route.params;
    //console.log(()=>links.getParam('link'))
    return (
    
         <WebView source={{ uri: linkParam}} style={{marginTop:40}}/> 
        //<WebView source={{ uri: "https://reactnavigation.org/docs/5.x/params"}}/>
        
    
    );
  }
}


import { black } from 'chalk';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView>
      <View style={{position:"relative"}}>
        <View style={styles.header}>
            <Icon name = "arrowleft" size = {20}/>
            <Text>Đăng nhập</Text>
            <Text></Text>
        </View>
        <View style={{borderBottomColor:"#DDDDDD",borderBottomWidth:1,height:650}}>
            <TouchableOpacity style={styles.button}>
                <Icon name = "facebook-square" size = {20} style={{color:"blue",paddingRight: 20,}}/>
                <Text style={{color:"black", fontSize:18}}>Đăng nhập bằng Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon name = "google" size = {20} style={{color:"blue",paddingRight: 20,}}/>
                <Text style={{color:"black", fontSize:18}}>Đăng nhập bằng Google</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Text>Chưa có tài khoản?<TouchableOpacity ><Text style={{color:"green"}}>Tạo tài khoản</Text></TouchableOpacity></Text>
        </View>
      </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    header :{
      flexDirection: "row",
      justifyContent : "space-between",
      paddingHorizontal: 10,
      paddingVertical:10,
      borderBottomWidth: 1,
      borderBottomColor:"#DDDDDD"
    },
    button:{
        flexDirection: 'row',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        padding: 10,
        marginHorizontal:40,
        marginTop:  30,
    },
    footer:{
        alignSelf:"center",
        justifyContent:"center",
        padding:10
        
    }
  });
  
import React, { Component } from 'react';
import { View, Text , Image, StyleSheet, ScrollView, Button,Dimensions, SafeAreaView,RefreshControl, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from "react-native-vector-icons/Fontisto"
import { get } from 'lodash';
import linkHome from '../Link/LinkHome'
import Webview from './TwoComponent/Webview';
const win = Dimensions.get('window');

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isLoading: false,
      isSave :false,
      url : "https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss"
    };
  }
  componentDidMount () {
    //console.log("caadjnisudjhzd")
    const rssParse = "https://api.rss2json.com/v1/api.json?rss_url="+ this.state.url + "&api_key=9ntmnreylczopztgkhwdpfmyamrdovcm3cyeu3sk&count=100"
    this.getApi(rssParse);
    // this.getApi();
    
  }

  async getApi(rss_url){

    this.setState({isLoading:true})
    try {
    //   const url = "https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss"
    //  const rssParse = "https://api.rss2json.com/v1/api.json?rss_url="+ url + "&api_key=9ntmnreylczopztgkhwdpfmyamrdovcm3cyeu3sk&count=100"
      const response = await fetch(rss_url)
      const json = await response.json();
     //console.log(json)
      this.setState({data:json.items});
      //console.log(json.items)
      
    }catch (error){
      console.log(error);
    } 
    finally {
      this.setState({isLoading: false})
    }
  }
 
  onPressTap = () => {
    
    if (this.state.isSave ) {
      this.setState({isSave:true})
      console.log("tap")
      console.log(this.state.isSave)
    }
    else {
      this.setState({isSave:false})
    }
    
  }
  onPressCallApi = (linkURL) => {

    console.log("ségfhnvhm",linkURL)
    this.setState({url:linkURL})
    console.log(this.state.url)
    //this.getApi(this.state.url)
    this.componentDidMount()
  }
     getDecriptiom (string) {
    var vitri = string.lastIndexOf(">")
    var chuoi = string.slice(vitri+1, string.end)
    return chuoi
  }
  
  getTimeFormat (time) {
    
    var date1 = new Date();
    const date2 = new Date(time)
    const parsetime = Date.parse(date2)
    //console.log('-------', parsetime)
    
    var time1 = date1.getMinutes();
  
    var time2 = date2.getMinutes();
    var timeHour1 = date1.getHours();
    var timeHour2 = date2.getHours();
    if(time1 > time2)
    {
      var mimutes = time1 - time2
      //console.log(mimutes)
      return mimutes 
    }
    else {
      var hour = timeHour1 - timeHour2
      return hour
    }
    
  }
  
  render() {
    //let {isLoading} = this.state;
    
    return (
      <SafeAreaView>
      <View >
        <View style = {styles.header}>
          <Icon name="search1" size ={25} style = {styles.icons} />
          <Image style={styles.logo}
            source = {require('../Assets/VnExpress_logo.png')}
          />
          <Icon name = "setting" size = {25} style = {styles.icons}/>
        </View>
        <View style = {styles.menu}>
          <Icon name = "menuunfold" size = {25} style ={{alignSelf:'center'}}/>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style = {styles.menuScroll}>
           {
            linkHome.map((linkHome,index)=>{
              return (
              <Button key = {index}title = {linkHome.name} onPress = {()=>this.onPressCallApi(linkHome.link)} color ="black" ></Button>
              )
            })
           } 
            
          </ScrollView>
        </View>
        <View>
          <ScrollView style ={{marginBottom: 320}} sshowsHorizontalScrollIndicator = {false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this.getApi}
              
            />
          }
          >
            {
              this.state.data.map ((data, index)=>{
                return (
                  <View key={index} style={{marginHorizontal:10,paddingVertical:10, borderBottomWidth: 1, borderBottomColor: '#DDDDDD',}}
                  onStartShouldSetResponder = {()=> this.props.navigation.navigate("Webview",{
                    linkParam: data.guid,data:"abc"
                  })}
                  >
                    <Text style={{fontSize: 21, fontWeight:"bold", paddingBottom: 10,}}>{data.title}</Text>
                    <Image source={{
                      uri: get(data, 'thumbnail', 'https://cdn.pixabay.com/photo/2012/04/01/18/53/red-24018_960_720.png') == '' ? "https://cdn.pixabay.com/photo/2012/04/01/18/53/red-24018_960_720.png" : get(data, 'thumbnail',"")
                    }} style={{ height: win.width*(231 / 385),}}/>
                    <Text style={{paddingVertical:10, fontSize: 17}}>{this.getDecriptiom(data.description)}
                    </Text>
                  <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                  <View style={{flexDirection:"row"}}>
                    <Text>{this.getTimeFormat(data.pubDate)} phút trước</Text>
                    <Icons name = "comment" size = {20} color ="red" style={{paddingLeft:10}}/>
                    <Text style={{color:"red"}}> 0</Text>
                  </View>
                
                  <TouchableOpacity ><Ionicons name = {this.state.isSave ? " bookmark":"bookmark-outline"} onPress = { this.onPressTap} size= {20} /></TouchableOpacity>
              {/* <Ionicons name ="bookmark"/> */}
              </View>
            </View>
                )
              })
            }
          </ScrollView>
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
  logo : {
    height: 30,
    width: 200
  },
  icons:{
    alignSelf:'center'
  },

  menu:{
    flexDirection: "row",
    paddingVertical:10,
    paddingHorizontal:10,
  },
  menuScroll:{
   // alignSelf:"center"
   paddingLeft: 10,
   
  }
});

import React, { Component } from 'react';
import { View, Text, SafeAreaView,TouchableOpacity , StyleSheet, Image, Dimensions,RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from "react-native-vector-icons/Fontisto"
import linkPodcast from '../Link/LinkPodcast';
import Sound from 'react-native-sound';
const win = Dimensions.get('window');



export default class Podcasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataApi:[],
        isLoading: false,
        url : "https%3A%2F%2Fvnexpress.net%2Frss%2Ftin-moi-nhat.rss",
        duration: 0,
        music:null,
        second: 0
    };
  }

  play = (urlmp3) => {
    let summer = new Sound(urlmp3, null, (err) => {
      if (err) {
        console.log('hata', err)
        return
      }
      summer.play((success) => {
        console.log('end', success)
      })
      this.setState({duration:summer.getDuration()})

    })
    //console.log('summer', summer)
    this.setState({music:summer})
  }

  componentDidMount () {
    //console.log("caadjnisudjhzd")
   // const rssParse = "https://api.rss2json.com/v1/api.json?rss_url="+ this.state.url + "&api_key=9ntmnreylczopztgkhwdpfmyamrdovcm3cyeu3sk&count=100"
    this.getApi();
    
    if (this.state.music) {
        let id = setInterval(() => {
          this.state.music.getCurrentTime((second, play) => {
            this.setState({second:second})
          })
        }, 100)
      }
    
  }
  componentDidUpdate(){
      this.state.music
  }
   getApi(){
    const rss = "https://api.rss2json.com/v1/api.json?rss_url="
    
    Promise.all([
        
        fetch(rss+'https://vnexpress.net/rss/podcast/ban-on-khong.rss'),
        fetch(rss+'https://vnexpress.net/rss/podcast/tham-thi.rss'),
        fetch(rss+'https://vnexpress.net/rss/podcast/diem-tin.rss'),
        fetch(rss+'https://vnexpress.net/rss/podcast/nguy-co.rss'),
        fetch(rss+'https://vnexpress.net/rss/podcast/bao-hanh-tinh-than.rss'),
        fetch(rss+'https://vnexpress.net/rss/podcast/tien-lam-gi.rss')
    ]).then( (responses) => {
      
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then( (data) => {
        const array = [];
        arrayOb = array.concat(data[0].items,data[1].items,data[2].items,data[3].items,data[4].items,data[5].items)
        this.setState({dataApi:arrayOb})
    }).catch((error)=> {
       
        console.log(error);
    });
  }

  render() {
      console.log(this.state.dataApi)
    return (
    <SafeAreaView>
        <View>
            <View style={styles.header}>
                <Text></Text>
                <Text style={{fontWeight:"bold", fontSize:21}}>Tin của bạn</Text>
                <Icon name = "setting" size = {25} style={{ }}/>
            </View>
           <ScrollView style={{  paddingTop: 10, paddingHorizontal: 10,backgroundColor:"#DDDDDD",marginBottom: 95}}
            refreshControl={
                <RefreshControl
                  refreshing={this.state.isLoading}
                  onRefresh={this.getApi}
                  
                />
            }
           >
               <View style={{backgroundColor:"#DDDDDD"}}>
                   <Text style={{fontSize : 21, fontWeight:"bold", color :"red", }}>Các chương trình</Text>
                   <ScrollView horizontal ={true} showsHorizontalScrollIndicator = {false} style={{paddingVertical:10}}>
                        {
                            linkPodcast.map((image)=>{
                                return(
                                    <Image source = {{uri:image.image}} style ={{width: 140,height:140, marginRight:12 ,}}/>
                                )
                            })
                        }

                       <TouchableOpacity style = {{width: 140,height:140,justifyContent: 'center',backgroundColor: '#DDDDDD', marginRight:10, paddingLeft: 20,}}><Text style={{alignContent: 'center'}}>Xem toàn bộ</Text></TouchableOpacity>
                   </ScrollView>
                   {
                       this.state.dataApi.map((value,index)=>{
                           return (
                            <View key={index} style={{paddingHorizontal:10,paddingVertical:10, borderBottomWidth: 1, borderBottomColor: '#DDDDDD',backgroundColor:"white"}}>    
                            <Text style={{fontSize: 21, fontWeight:"bold", paddingBottom: 10,}}>{value.title}</Text>
                            <View style={{flexDirection : "row", justifyContent:"space-between"}}>
                                <View style={{flexDirection : "row", alignItems:'center'}}>
                                    <Icon name= "playcircleo" size = {30} onPress={()=> this.props.navigation.navigate("PlayMp3", {
                                        linkMp3: value.enclosure.link
                                    })}/> 
                                    <Text style={{paddingHorizontal: 10,}}>Nghe</Text>
                                </View>
                                <View style={{flexDirection : "row", alignItems:'center'}}>
                                <Text style={{paddingHorizontal: 10,}}>Tải xuống</Text>
                                    <Icon name ="download" size = {30}/>
                                </View>
                            </View>
                    
                            <Text style={{paddingVertical:10, fontSize: 17}}>{value.description}</Text>
                            <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                                <View style={{flexDirection:"row"}}>
                  
                                    <Icons name = "comment" size = {20} color ="red" style={{paddingLeft:10}}/>
                                    <Text style={{color:"red"}}> 36</Text>
                                </View>
                            </View>
                        </View>
                           )
                       })
                   }
                    
                </View>
          </ScrollView>
        </View>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        //backgroundColor: "#DDDDDD",
        paddingHorizontal: 20,
        borderBottomWidth:1,
        borderBottomColor: "#DDDDDD",
    }
});

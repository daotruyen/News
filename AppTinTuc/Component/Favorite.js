import React, { Component } from 'react';
import { View, Text , StyleSheet,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <SafeAreaView>
        <View style={{  }}>
            <View style={styles.header}>
                <Text></Text>
                <Text style={{fontWeight:"bold", fontSize:21}}>Tin của bạn</Text>
                <Icon name = "setting" size = {25} style={{ }}/>
            </View>
            <View style={{alignSelf: 'center',paddingTop: 20,}}>
                <Text>Không có mục yêu thích !!</Text>
            </View>
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

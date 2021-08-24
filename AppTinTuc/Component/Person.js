import React, { Component } from 'react';
import { View, Text, SafeAreaView , StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
          <View>
              <View style={styles.header}>
                  <Text></Text>
                  <Text style={{fontWeight:"bold", fontSize:21}}>Tin của bạn</Text>
                  <Icon name = "setting" size = {25} style={{ }}/>
              </View>
             <View style={{ justifyContent: 'center',alignItems: 'center', paddingTop: 10,}}>
                 <Text style={{fontWeight:"bold", fontSize: 18}}> Thêm các nội dung</Text>
                 <Text>Đăng nhập để thiết lập danh sách</Text>
                 <Button title = "Đăng nhập ngay"></Button>
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

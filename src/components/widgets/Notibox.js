import React, { Component } from "react";
import { View, Image, Text, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Notification extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let {
        name,
        status,
        date,
        source
      } = this.props.noti;
    return (
     <View style={{flexDirection:'row'  ,height:80, borderColor: '#F0EDEC', borderWidth:0.5,backgroundColor:'white'}}>
    
     <View style={{flex:1,marginTop:10,marginLeft:10 }}>
     <Image
            style={{ width: 50,height: 50, borderRadius:20 }}
            source={source}
          />
     </View>

     <View style={{flex:3 , marginTop:10,flexDirection:'column'}}>
        <View>
            <View>
                <Text style={{color:'black'}}> {name} </Text>
            </View>
            <Text>{status} </Text>
        </View>
        <View>
        <Text> {date} </Text>
        </View>
     </View>

     <View style={{flex:1}}>
     <Icon
            style={{ marginLeft:3, padding: 10, marginTop: 5 }}
            name="plus"
            size={27}
            color="#D7D2D1"
          />
     </View>

     </View>
    );
  }
}

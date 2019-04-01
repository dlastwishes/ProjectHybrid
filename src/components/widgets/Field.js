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
        keyword
      } = this.props.keyword;
    return (
     <View style={{flexDirection:'row' ,  backgroundColor:'white'}}>
        <View>
            <Text style={{fontSize:20 , marginTop:12 , color:'#4BD86E'}}> {keyword}</Text>
        </View>
     </View>
    );
  }
}

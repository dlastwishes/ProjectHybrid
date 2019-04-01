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
        name
      } = this.props.keyword;
    return (
     <View style={{flexDirection:'row'}}>
        <View>
            <Text> {name}</Text>
        </View>
     </View>
    );
  }
}

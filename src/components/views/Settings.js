import React, { Component } from "react";
import { View, Image, Text } from "react-native";

export default class Settings extends Component {
  static navigationOptions = {
    header:null,
  };


  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {

    return (
     <View>
       <Text> Testing Settings page</Text>
     </View>
    );
  }
}

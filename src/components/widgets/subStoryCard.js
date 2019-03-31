import React, { Component } from "react";
import { View, Image, Text } from "react-native";

export default class SubCardStory extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    var previewImg =
      this.props.source == "1"
        ? require("@Images/story/corda1.png")
        : require("@Images/story/corda2.png");

    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            width: 250,
            height: 300,
            marginLeft: 10,
            marginRight: 10
          }}
        >
        
        </View>

      </View>
    );
  }
}

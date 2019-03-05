import React, { Component } from "react";
import {
  FlatList,
  Image,
  Alert,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class LineItem extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var icon =
      this.props.source == "1"
        ? require("@Images/icon/classics.png")
        : this.props.source == "2"
        ? require("@Images/icon/bikes.png")
        : this.props.source == "3"
        ? require("@Images/icon/planes.png")
        : this.props.source == "4"
        ? require("@Images/icon/ships.png")
        : this.props.source == "5"
        ? require("@Images/icon/trains.png")
        : this.props.source == "6"
        ? require("@Images/icon/trucks.png")
        : require("@Images/icon/vintages.png");

    return (
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.menu}>
            <Image style={styles.label} source={icon} />
            <Text> {this.props.name} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

styles = StyleSheet.create({
  menu: {
    height: 100,
    padding: 5,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#DDDDDD"
  },
  label: {
    textAlign: "center",
    fontSize: 11,
    padding: 5
  }
});

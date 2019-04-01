import React, { Component } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Alert,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class NotificationHeader extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={{ flexDirection: "row", backgroundColor: "white",
        borderColor:'black',
            borderBottomColor: "black",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 3,
         height: 52 }}
      >
        <View>
          <TouchableOpacity onPress={this.props.onPressClose}>
            <Icon
              style={{ marginLeft: 3, padding: 10, marginTop: 5 }}
              name="arrow-left"
              size={23}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={{ width: 50, height: 50}}
              source={this.props.source}
            />
          </View>

          <View style={{ flexDirection: "column" , marginTop:5 , marginLeft:10 }}>
            <View>
              <Text style={{ fontSize: 15, color: "black" }}>
                {" "}
                PUBLISHED IN
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, color: "black" }}>
                {" "}
                {this.props.title}{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

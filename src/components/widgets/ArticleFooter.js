import React, { Component } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Alert,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ArticleFooter extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let source = require("@Images/profile/profile.jpeg");
    let publisher = "Towards Data Science";
    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            borderColor: "black",
            borderBottomColor: "black"
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 15,
                marginBottom: 20,
                color: "#4BD86E"
              }}
            >
              {" "}
              134 claps
            </Text>
          </View>
          <View style={{}}>
            <Icon
              style={{ marginLeft: 250 }}
              name="ellipsis-v"
              size={26}
              color="black"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={{ width: 50, height: 50, marginLeft: 20 }}
              source={source}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <View>
              <Text> Published in</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10 }}> {publisher} </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: "blue",
              borderBottomWidth: 1,
              borderBottomColor: "black",
              marginBottom: 40,
              marginLeft: 70,
              width: 90,
              height: 40,
              borderWidth: 1,
              borderRadius: 10
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ textAlign: "center", color: "blue", marginTop: 10 }}
              >
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
       
      </View>
    );
  }
}

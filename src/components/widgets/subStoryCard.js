import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
    let {
      title,
      description,
      createDate,
      author,
      category,
      timeRead,
      source
    } = this.props.article;
    return (
      <View
        style={{
          flexDirection: "column",
          borderWidth: 1,
          borderColor: "#F0EDEC",
          backgroundColor: "white"
        }}
      >
        <View
          style={{ flex: 1, marginBottom: 10, marginTop: 5, marginLeft: 5 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}> {category}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", width: 250, height: 40 }}>
              <Text
                style={{ textAlign: "left", fontWeight: "bold", fontSize: 22 }}
              >
                {" "}
                {title}{" "}
              </Text>
              <Text style={{ textAlign: "left", fontSize: 20 }}>
                {" "}
                {description}{" "}
              </Text>
            </View>

            <View style={{ justifyContent: "flex-start" }}>
              <Image
                style={{ width: 100, height: 100, marginRight: 10 }}
                source={source}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 2, flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text> {author} </Text>
            <View style={{ flexDirection: "row" }}>
              <Text>
                {" "}
                {createDate} * {timeRead}{" "}
              </Text>
              <Icon
                style={{ padding: 5 }}
                name="star"
                size={15}
                color="black"
              />
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: "row", marginLeft: 70 }}>
            <Icon
              style={{ padding: 23 }}
              name="bookmark"
              size={26}
              color="black"
            />
            <Icon
              style={{ padding: 23 }}
              name="ellipsis-v"
              size={26}
              color="black"
            />
          </View>
        </View>
      </View>
    );
  }
}

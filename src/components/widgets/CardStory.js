import React, { Component } from "react";
import { View, Image, Text , TouchableOpacity } from "react-native";

export default class CardStory extends Component {
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
          alignSelf: "center",
          borderRadius: 15,
          backgroundColor:'white',
          width: 330,
          height: 290,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 3,
          marginBottom: 30,
        }}
      >
     
      <View
          style={{
            alignSelf: "center",
            flex: 1,
            width: 300,
            height: 300,
            marginLeft: 10,
            marginRight: 10
          }}
        >
         <TouchableOpacity onPress={this.props.onPressArticle}> 
          <Image
            style={{ width: 300, height: 150, marginTop: 10 }}
            source={source}
          />

          <Text style={{ fontSize: 22 , fontWeight:'bold', marginTop: 10 }}> {title} </Text>
          </TouchableOpacity>
          <View style={{ marginTop: 10 }}>
            <Text style={{ textAlign: "left", fontSize: 15, color: "gray" }}>
              {" "}
              {author}{" "}
            </Text>
            <Text style={{ textAlign: "left", fontSize: 15 }}>
              {" "}
              {createDate}
              {" * "} {timeRead}
            </Text>
          </View>
        </View>
     
 
      </View>
    );
  }
}

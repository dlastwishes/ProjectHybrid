import React, { Component } from "react";
import { ScrollView,View, Image, Text, Alert,FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


export default class NotificationHeader extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
    }
}

  componentDidMount() {}

  render() {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "white"
        , height:50  }}>

          <View>
            <TouchableOpacity onPress={this.props.onPressClose}>
              <Icon
                style={{ marginLeft: 3, padding: 10, marginTop: 5 }}
                name="close"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18 , color:'black' }}> Notifications </Text>
          </View>

        </View>
    );
  }
}

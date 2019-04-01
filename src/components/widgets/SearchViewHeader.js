import React, { Component } from "react";
import { ScrollView,View, TextInput, TouchableOpacity } from "react-native";
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
            <TouchableOpacity onPress={this.props.onPressBack}>
              <Icon
                style={{ marginLeft: 3, padding: 10, marginTop: 5 }}
                name="arrow-left"
                size={26}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }}>
            <TextInput/>
          </View>

        </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View , Alert , TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class HomeHeader extends Component {

  constructor(props){
    super(props);
  
  }

  render() {
    return (
      <View
        style={{ flexDirection: "row", height: 60, backgroundColor: "black" }}
      >
        <View style={{}}>
        <TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}}>
        <Icon
            style={{ marginLeft:3, padding: 10, marginTop: 10 }}
            name="bars"
            size={20}
            color="#D7D2D1"
          />
        </TouchableOpacity>
         
        </View>
        <View>
          <Text
            style={{
              marginTop: 18,
              marginLeft: 25,
              color: "#D7D2D1",
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            {" "}
            Home{" "}
          </Text>
        </View>

        <View>
        <TouchableOpacity onPress={this.props.onPressNotification}>
          <Icon
            style={{ marginLeft: 130, padding: 15, marginTop: 5 }}
            name="bell"
            size={20}
            color="#918B89"
          />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={this.props.onPressSearch}>
        <Icon
            style={{padding: 15, marginTop: 5 }}
            name="search"
            size={20}
            color="#918B89"
          />
        </TouchableOpacity>
     
        </View>
      </View>
    );
  }
}


export default HomeHeader;

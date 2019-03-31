import React from "react";
import { Text, View } from "react-native";

class HomeHeader extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ textAlign: "center" }}>
          <Text>Home</Text>
        </View>
        <View style={{ textAlign: "right" }}>
          <Text> Notification </Text>
        </View>
        <View style={{ textAlign: "right" }}>
          <Text> Search </Text>
        </View>
      </View>
    );
  }
}

export default HomeHeader;

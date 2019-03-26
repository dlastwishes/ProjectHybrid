import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";



export default class ContractDetail extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <View style={styles.container}>
     <Text> Hello World</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

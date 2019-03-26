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
        title : this.props.title
    };
  }

  render() {
    return (
      <View style={styles.container}>
     <Text style={styles.header}> {this.state.title}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        height : 30
    },
  header : {
    textAlign : 'center',
    fontSize : 20,
    paddingBottom: 15
  }
});

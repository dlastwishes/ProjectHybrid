import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import Field from '@Components/ContactItem/Components/Field'
import Header from '@Components/ContactItem/Components/header'


export default class ContractDetail extends Component {

  static navigationOptions = {
    header : null
  };

  constructor(props) {
    super(props);
    this.state = {
        prefix : this.props.navigation.getParam('prefix', '1'),
        firstname : this.props.navigation.getParam('firstname', '1'),
        lastname : this.props.navigation.getParam('lastname', '1'),
        email : this.props.navigation.getParam('email', '1'),
        phone : this.props.navigation.getParam('phone', '1')
    };
  }

  render() {
    return (
      <View style={styles.container}>
    <Header title='Contact Info'/>
     <Text> {this.state.firstname} </Text>
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

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import Contact from "@Components/ContactItem/ContactItem";

export default class ContactItem extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
     <Contact navigation={navigation}/>
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

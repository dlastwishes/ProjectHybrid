import React, { Component } from "react";
import {
TextInput,
View,
StyleSheet
} from "react-native";

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() {
     
   return (
    <View style={styles.container}>
        <TextInput style={styles.textinput} 
        onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing} />
    </View>
   )
   
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "flex-start",
    borderWidth: 5,
    borderColor: 'gray',
    padding: 5,
    },

    textinput: {
    alignItems: 'stretch',
    height: 20,
    fontSize: 16,
    }
})

console.disableYellowBox = true;




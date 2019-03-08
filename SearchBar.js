import React, { Component } from "react";
import {
TextInput,
View
} from "react-native";

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() {
     
   return (
    <View style={{flexDirection:"row"}}>
        <TextInput onChangeText={this.props.onChangeText}
        onSubmitEditing={this.props.onSubmitEditing}
            style={{height:50}}
            keyboardAppearance='light'
             placeholder="Enter Park Name or State Name"   
            />
    </View>
   )
   
  }
}

console.disableYellowBox = true;




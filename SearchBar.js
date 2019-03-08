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
        <TextInput style={{ 
            borderColor: '#7a42f4',borderWidth: 1,
            alignItems : 'stretch' , height : 20 , fontSize : 16}} onChangeText={this.props.onChangeText}
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




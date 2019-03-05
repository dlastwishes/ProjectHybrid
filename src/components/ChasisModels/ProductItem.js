import React, { Component } from "react";
import {
FlatList,
Image,
Linking,
Alert,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";


export default class ProductItems extends Component {

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
    <View style={{flexDirection:"row"}}>
    
        <View style={{flexDirection:"column"}}>

        </View>
    </View>
   )
   
  }
}

style = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#DDDDDD'
        },
        textcontainer:{
          flex: 1,
          alignItems: 'flex-start',
          padding: 5,
        },
         picture:{
          height: 100,
          width: 100,
          resizeMode: 'contain'
         },
         prodcode: {
           fontSize: 11,
           textAlign: 'center',
         },
         label: {
          fontSize: 16,
          flexWrap: 'wrap',
          },
})




console.disableYellowBox = true;




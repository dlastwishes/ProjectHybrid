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
import ProductData from './ProductData'

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
      let {productname , productscale , productcode} = this.props.product
      const imgUrl = ProductData.getImageUrl()
   return (
    <View style={{flexDirection:"row"}}>
        <View style={{flexDirection: "column"}}>
        <Image style={styles.picture} source={require('@Images/icon/trains.png')} />
            <Text style={styles.prodcode}> {productcode} </Text>
        </View>

        <View style={{flexDirection:"column"}}>
        <Text style={styles.textcontainer}> {productname} </Text>
        <Text style={styles.label}> {productscale} </Text>
        
        </View>
    </View>
   )
   
  }
}

styles = StyleSheet.create( {
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




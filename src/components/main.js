import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from "react-native";

import ProductData from '@Components/ChasisModels/ProductData'
import ProductItem from '@Components/ChasisModels/ProductItem'
import LineItem from '@Components/ChasisModels/LineItem'


export default class ChasisModel extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      product : []
    };
  }


  componentDidMount() {
    ProductData.g
  }



  render() {
    return (
     
  <View style={{flexDirection:"row"}}>
       <ScrollView>
        <LineItem source="1" name="Classic Cars"/>
        <LineItem source="2" name="Motorcycles"/>
        <LineItem source="3" name="Planes"/>
        <LineItem source="4" name="Ships"/>
        <LineItem source="5" name="Trains"/>
        <LineItem source="6" name="Trucks and Buses"/>
        <LineItem source="7" name="Vintage Cars"/>
       </ScrollView>
       <FlatList />
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

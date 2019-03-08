import React, { Component } from "react";
import {
Image,
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";

import ParksData from './ParksData'

export default class ParksDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    let {id , name , lat , lon , distance , image , state , description} = this.props.parks
    let imgUrl = ParksData.getParksImageHeaderUrl()+image
   return (
    <ScrollView style={{flexDirection:"column"}}>
        <Text> {"\n"}</Text>
        <Image source={{uri : imgUrl}} style={{width : 500 , height: 100}}/>
        <Text style={{}}> {name} {"\n"} </Text>
        <Text style={{fontWeight:'500'}}> Park Detail </Text> 
        <Text>{description} {"\n"}</Text>
        <Text> State : {state} {"\n"}{"\n"} Distance : {distance} {"\n"}{"\n"} Location(lat,lon) : {lat} , {lon} {"\n"} </Text>
    </ScrollView>
   )
   
  }
}




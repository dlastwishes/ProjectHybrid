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
        <Text style={{margin:10,fontSize:18,fontWeight:'bold',textAlign:'center'}}> {name} </Text>
        <Text style={{fontWeight:'bold' , color:'blue'}}> Park Detail </Text> 
        <Text>{description} </Text>
        <Text  style={{color:'blue'}}> State : </Text> 
        <Text> {state} </Text>
        <Text style={{color:'blue'}}> Distance : </Text> 
        <Text>{distance}</Text>
        <Text style={{color:'blue'}}> Location(lat,lon) : </Text>
        <Text> {lat} , {lon} {"\n"} </Text>
    </ScrollView>
   )
   
  }
}




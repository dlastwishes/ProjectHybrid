import React, { Component } from "react";
import {
  ScrollView,
  Text,
  FlatList,
  Alert,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import HeaderHome from '@Navigations/headerHome'
import CardStory from '@Widgets/CardStory'

export default class home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
     
  }


  render() {
     
    return (
      <View>
    <HeaderHome/>
     <CardStory source="1" title="Introducing to Corda Blockchain" 
     author="DLastwishes" createDate="4 days ago" readTime="7 min read"/>
      </View>
    );
  }
}

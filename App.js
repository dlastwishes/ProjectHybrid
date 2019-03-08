import React, { Component } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
  Text,
  ScrollView
} from "react-native";
import ParksDetail from "./ParksDetail";
import ParksData from "./ParksData";
import SearchBar from "./SearchBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterData: [],
      park: [],
      isFilter: false,
      keySearch : '',
    };
  }

  componentDidMount() {
    ParksData.getParksData().then(parks => {
      this.setState({ data: parks , park : parks[0]});
    });
  }

  _renderParkDetail = ({item}) => {
    return <ParksDetail parks={item} />;
  };

  _renderParks = ({ item }) => {
    let img = ParksData.getParksImageThumbUrl() + item.image;
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => {this._onPress(item.id)}}>
          <Image style={{ width: 150, height: 150 }} source={{ uri: img }} />
          <Text> {item.name} </Text>
        </TouchableOpacity>
      </View>
    );
  };

  _onSubmitEditing() {
    if(this.state.keySearch.length > 0){
      this.setState({isFilter : true})
      let parksData = this.state.data
      const res = parksData.filter(item => item.name.toLowerCase().indexOf(this.state.keySearch) >= 0 );
      this.setState({filterData : res})
    }
    else{
      Alert.alert('Incorrect input')
    }
  }

  _onChange(text) {
    this.setState({keySearch : text})
  }

  _onPress(id) {
    var parkDetail = this.state.isFilter
      ? this.state.filterData
      : this.state.data;
    const res = parkDetail.filter(park => park.id == id.toString());
    this.setState({ park : res });
  }

  render() {
    return (
      <ScrollView style={{ flexDirection: "column" }}>
        <Text style={{ alignSelf: "center" , height : 30 ,fontSize: 20}}> National Parks</Text>
        <SearchBar 
        onSubmitEditing={() => this._onSubmitEditing()}
        onChangeText={(text) => {this._onChange(text)}}
        />
        <FlatList
          horizontal={true}
          data={(this.state.isFilter) ? this.state.filterData : this.state.data}
          renderItem={this._renderParks}
        />
        <FlatList data={this.state.park} renderItem={this._renderParkDetail} />  
      </ScrollView>
    );
  }
}

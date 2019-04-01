import React, { Component } from "react";
import { Text,View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class SearchViewHeader extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {

    }
}

  componentDidMount() {}

  render() {
    return (
        <View style={{flexDirection:'column'}}> 

        <View style={{ flexDirection: "row", backgroundColor: "white"
        , height:50  }}>

          <View>
            <TouchableOpacity onPress={this.props.onPressBack}>
              <Icon
                style={{ marginLeft: 3, padding: 10, marginTop: 5 }}
                name="arrow-left"
                size={26}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <TextInput placeholder="Search Medium" style={{ fontSize:17,marginLeft:5,width:310, backgroundColor:'#ECEEEC'}}/>
          </View>

        </View>

        <View style={{backgroundColor:'white'}}> 
        <Text style={{fontSize:25 , marginTop:10 , fontWeight:'bold'}}> Explore topics</Text>
        </View>

        </View>
        
    );
  }
}

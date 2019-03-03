import React, { Component } from "react";
import {
FlatList,
Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import contactData from "./ContactData";

export default class ContactItem extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  renderItem = ({item}) => { 
    let imgsrc = item.firstname.toLowerCase()+'.jpeg'
    let imgurl = contactData.getUrl()+"/contacts/img/"+imgsrc
    return (
      <View style={{flexDirection:"row"}}> 

       <Image
      style={{width: 70, height: 70 , borderRadius: 50}}
        source={{uri: imgurl}}
      />
  
      <View style={{flexDirection:"column"}}>
      <Text> {item.prefix} {item.firstname} {item.lastname}</Text> 
       <Text> Tel : {item.phone}</Text>
       <Text> Email : {item.email}</Text>
      </View>
  
     
      
      </View>
   
    )
    }

  componentDidMount() {

    contactData.fetchContacts().then(response => response.json())
    .then((data) => {
      this.setState({ data: data.contacts })
    }) 
    .catch(error => {
      console.error(error);
    });
  }

  render() {
   return (
    <View style={styles.container}>
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
    />
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

console.disableYellowBox = true;




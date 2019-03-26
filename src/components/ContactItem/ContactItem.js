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

import contactData from "./ContactData";

export default class ContactItem extends Component {
  static navigationOptions = {
    title : 'Contact List'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  onPressPhone = tel => {
    Linking.openURL("tel:" + tel);
  };

  navInfoPage = (prefix , firstname , lastname , email , phone) =>{
    this.props.navigation.navigate('contractDetail' , { prefix : prefix , firstname : firstname 
      , lastname : lastname , email : email , phone : phone} );
  }

  onPressPhoto = name => {};

  renderItem = ({ item }) => {
    let imgsrc = item.firstname.toLowerCase() + ".jpeg";
    let imgurl = contactData.getUrl() + "/contacts/img/" + imgsrc;
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            this.onPressPhoto(item.firstname);
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={{ uri: imgurl }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { 
          this.navInfoPage(item.prefix , item.firstname , item.lastname , item.email , item.phone )
        }}>
          <View style={{ flexDirection: "column" }}>
            <Text>
              {"\n"}
              {item.prefix} {item.firstname} {item.lastname}
            </Text>

            {/* <TouchableOpacity
              onPress={() => {
                this.onPressPhone(item.phone);
              }}
            >
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("@Images/phone.jpg")}
              />
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  componentDidMount() {
    contactData
      .fetchContacts()
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.contacts });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
  
    return (
      <View style={styles.container}>
    
        <FlatList data={this.state.data} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

console.disableYellowBox = true;

import React , {Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ContactData from "./ContactData" ;
import ContactItem from './ContactItem' ;

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data : []
    };
  };
  
  componentDidMount(){
    ContactData.fetchContacts().then((contacts)=>{
      this.setState({data : contacts}) ;
    }) ;
  }

  _renderItem = ({item}) => {
    return (<ContactItem contact = {item}/>)
  }

  keyExtractor = ({email}) => email ;


  render() {
    return (    <View style={styles.container}>
      <FlatList 
          data = {this.state.data}
          renderItem = {this._renderItem}
          keyExtractor = {this.keyExtractor} 
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

import React, { Component } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {NavigationActions} from 'react-navigation';

export default class LoginView extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let source = require("@Images/profile/me.jpeg");
    return (

        <ScrollView style={{ flexDirection: "column"}}>
        <View style={{flexDirection:'column' , backgroundColor:'white'}}> 
            <View> 
            <Image
            style={{ width: 90,height: 90, borderRadius:50 , marginLeft:20 , marginTop:20 }}
            source={source}
          />
            </View>
            <View>
            <Text style={styles.textUsername}> D'LastWish</Text>
            </View>
            <View>
            <Text style={styles.textProfile}> See profile</Text>
            </View>
            </View>

            <View style={{flexDirection:'column' , backgroundColor:'#EEF1ED'}}> 
            <View> 
           <Text style={styles.textMenu} onPress={this.navigateToScreen('Home')}> Home</Text>
            </View>
            <View>
            <Text style={styles.textMenu}> Audio</Text>
            </View>
            <View>
            <Text style={styles.textMenu}> Bookmarks</Text>
            </View>
            <View>
            <Text style={styles.textMenu}> Interests</Text>
            </View>
            </View>

            <View style={{flexDirection:'column' , backgroundColor:'#EEF1ED' ,borderColor:'gray' , borderWidth:1, height:300,borderBottomColor:'gray'}}> 
            <View> 
           <Text style={styles.signout} onPress={this.navigateToScreen('Signout')}> Sign out</Text>
            </View>
            <View>
            </View>
            </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    textUsername : {
        fontSize:19 ,
         marginLeft:15 ,
         padding : 10,
          color:'black'
    },
    textProfile : {
        fontSize:12,
        marginLeft:20 ,
        padding:5,
        marginBottom : 5
    },
    textMenu : {
        fontSize:16 ,
        marginLeft:15 ,
        marginTop : 7,
        padding : 10,
         color:'black'
    },
    signout : {
        fontSize:16 ,
        marginLeft:15 ,
        marginTop : 7,
        padding : 10,
         color:'#6FFB40'
    }
})

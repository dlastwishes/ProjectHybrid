import React, { Component } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
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

    return (
      <View style={{ flexDirection: "column" , backgroundColor:'#DEFCD3', height:900}}>
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 45,
              fontWeight: "bold",
              marginTop: 35,
              color: "black"
            }}
          >
            {" "}
            Medium{" "}
          </Text>
        </View>
        <View>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 30,
              marginTop: 35,
              color: "black"
            }}
          >
            {" "}
            ideas that set your mind {"\n"} in motion. {"\n"}{" "}
          </Text>
        </View>
        <View style={{ flexDirection: "row" , marginTop:15 , marginLeft:75
        ,borderColor:'gray' , alignItems:'center', backgroundColor:'white' , borderWidth:1, width:200,height:50 , borderRadius:10} }>
            <View style={{alignSelf:'center'}}> 
            <Icon
              style={{marginLeft:10 , padding:5}}
              name="google"
              size={26}
              color="black"
            />
            </View>
            <View style={{alignSelf:'center'}}>
            <Text onPress={this.navigateToScreen('Home')}> Sign up with Google</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row" , marginLeft:75 , marginTop :15
        ,borderColor:'gray' , alignItems:'center', backgroundColor:'white' , borderWidth:1, width:200,height:50 , borderRadius:10} }>
            <View style={{alignSelf:'center'}}> 
            <Icon
              style={{marginLeft:10 , padding:5}}
              name="facebook"
              size={26}
              color="blue"
            />
            </View>
            <View style={{alignSelf:'center'}}>
            <Text onPress={this.navigateToScreen('Home')}> Sign up with Facebook</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row" , marginLeft:75 , marginTop:15
        ,borderColor:'gray' , alignItems:'center', backgroundColor:'white' , borderWidth:1, width:200,height:50 , borderRadius:10} }>
            <View style={{alignSelf:'center'}}> 
            <Icon
              style={{marginLeft:10 , padding:5}}
              name="envelope"
              size={26}
              color="black"
            />
            </View>
            <View style={{alignSelf:'center'}}>
            <Text onPress={this.navigateToScreen('Home')}> Sign up with email</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row" , alignItems:'center' , marginLeft:75 , marginTop:20} }>
            <View style={{alignSelf:'center'}}> 
            <Text> Already have an account? </Text>
            </View>
            <View style={{alignSelf:'center'}}>
            <Text nPress={this.navigateToScreen('Home')} style={{color :'#54D924' , textAlign:'center'}}> Sign in.</Text>
            </View>
        </View>

        <View style={{ flexDirection: "column" , alignItems:'center' , marginLeft:15 , marginTop:50} }>
            <View style={{alignSelf:'center'}}> 
            <Text> By creating an account, I accept Medium's </Text>
            </View>
            <View style={{alignSelf:'center'}}>
            <Text style={{textDecorationLine: 'underline', textAlign:'center'}}> Terms of Service</Text>
            </View>
        </View>

      </View>
    );
  }
}

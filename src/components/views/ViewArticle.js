import React, { Component } from "react";
import { ScrollView,View, Image, Text, TouchableOpacity } from "react-native";
import ArticleHeader from "@Widgets/ArticleHeader";
import ArticleFooter from '@Widgets/ArticleFooter'

export default class CardStory extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Introducing to Corda Blockchain",
          source: require("@Images/story/corda2.png"),
          detail: "this is detail for this article"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    let title = "Introducing to Corda Blockchain";
    let source = require("@Images/story/corda1.png");
    let sourceProfile = require("@Images/profile/profile.jpeg");
    let profile = require('@Images/profile/person.jpeg');
    let detail = "The end-goal in both buying and building an infrastructure is that you’ll make your data science teams more efficient, by letting them spend as much of their time as possible on understanding their data, building models and moving them to production. This in contrast means that they’ll spend as little time as possible on infrastructure and boilerplate code. In order to achieve this most ML infrastructure companies (such as Uber’s Michelangelo) have been built on the following principles:";
    let author = "Sean McClure"
    let time = "16 hours ago"
    let timeRead = "32 min read"
    return (
      <ScrollView style={{ flexDirection: "column" }}>
        <ArticleHeader onPressClose={() => {this.props.navigation.navigate('main')}} title="Towards Data Science" source={sourceProfile} />
        <View>
          <Text
            style={{
              fontSize: 35,
              padding: 10,
              color: "black",
              fontWeight: "bold",
              alignContent: "center"
            }}
          >
            {" "}
            {title}{" "}
          </Text>
        </View>
        <View style={{flexDirection:'row' , alignSelf :'center'}}> 
        <View> 
        <Image
            style={{ width: 35, height: 35, marginTop: 10 , borderRadius:40}}
            source={profile}
          />
        </View>
        <View style={{marginTop: 15}} > 
        <Text style={{color:'black'}}> {author} </Text>
        </View>
        <View style={{marginTop: 15}} > 
        <Text> {time} </Text>
        </View>
       
        <View style={{marginTop: 15}} > 
        <Text> * {timeRead} </Text>
        </View>

        </View>

        <View style={{ alignSelf: "center" }}>
          <Image
            style={{ width: 300, height: 150, marginTop: 10 }}
            source={source}
          />
        </View>

        <View
          style={{
            marginTop:15,
            alignSelf: "center",
            padding : 10
          }}
        >
          <Text style={{fontSize:20 , color:'black'}}> {detail} </Text>
        </View>
        <View>
          <ArticleFooter />
        </View>
      </ScrollView>
    );
  }
}

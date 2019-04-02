import React, { Component } from "react";
import {
  ScrollView,
  Text,
  FlatList,
  Image,
  Alert,
  View,
  RefreshControl,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import HeaderHome from "@Widgets/HomeHeader";
import CardStory from "@Widgets/CardStory";
import SubCardStory from "@Widgets/subStoryCard";
import Modal from "react-native-modal";
import Notification from "@Views/Notification";
import SearchView from '@Views/SearchView'
import SplashScreen from 'react-native-splash-screen';

export default class Home extends Component {
  static navigationOptions = {

  };


  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false,
      refreshing: false,
      notificationVisible: false,
      topArticle: [
        {
          title: "Introducing to Corda Blockchain",
          description: "Art Makes You Smart",
          createDate: "2 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          detail : 'this is detail for corda blockchain',
          timeRead: "7 min read",
          source: require("@Images/story/corda1.png")
        }
      ],
      articles: [
        {
          "id" : 1,
          "title": "Dagger 2 on Android: The Simple Way",
          "description": "It’s complicated, but only ...",
          "createDate": "Dec 15, 2018",
          "author": "Fred Porciúncula",
          "category": "Android",
          "timeRead": "7 min read",
          "source": require("@Images/story/dag1.jpeg")
        },
        {
          "id" : 2,
          "title": "Your First Truffle Dapp — What is the Blockchain",
          "description": "",
          "createDate": "Apr 2",
          "author": "Hugh Knight",
          "category": "Blockchain",
          "timeRead": "8 min read",
          "source": require("@Images/story/truffle.jpeg")
        },
        {
          "id" : 3,
          "title": "An introduction to scope in JavaScript",
          "description": "",
          "createDate": "Apr 2",
          "author": "Cristian Salcescu",
          "category": "Javascript",
          "timeRead": "5 min read",
          "source": require("@Images/story/javascript.jpeg")
        },
        {
          "id" : 4,
          "title": "Exploring RxJava in Android",
          "description": "This article is part of RxJava ...",
          "createDate": "Aug 19, 2018",
          "author": "Anitaa Murthy",
          "category": "Android",
          "timeRead": "4 min read",
          "source": require("@Images/story/android.jpeg")
        },
        {
          "id" : 5,
          "title": "What’s Your Personal MRR?",
          "description": "MRR is top of mind for every...",
          "createDate": "Mar 27",
          "author": "Andrew Pierno",
          "category": "Startup",
          "timeRead": "3 min read",
          "source": require("@Images/story/sugar.jpeg")
        },
        {
          "id" : 6,
          "title": "Starting Flows with trackBy",
          "description": "My trend of looking at Corda...",
          "createDate": "Oct 6, 2018",
          "author": "Daniel Newton",
          "category": "Corda Blockchain",
          "timeRead": "5 min read",
          "source": require("@Images/story/corda3.png")
        }
      ]
    };
  }

  componentDidMount() {
    
    SplashScreen.hide()
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  fetchData = async () => {

  }

  _renderItem = ({ item }) => {
    return <SubCardStory article={item} onPressSubCard={() => {this.onPressSubCard()}} />;
  };

  _renderItemHead = ({ item }) => {
    return <CardStory article={item} onPressArticle={() => {this.readArticle()}} />;
  };

  onPressSubCard = () => {
    this.props.navigation.navigate('readmore');
  }

  readArticle = () => {
    this.props.navigation.navigate('readmore');
  }

  _onPressNoti = () => {
    this.setState({ notificationVisible: true });
  };

  _onPressSearch = () => {
    this.setState({ searchVisible: true });
  };

  _onPressClose = () => {
    this.setState({ notificationVisible: false });
  };

  _onPressBack = () => {
    this.setState({ searchVisible: false });
  };

  _keyExtractor = (item, index) => item.title;

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ backgroundColor: "#F9F6F5" , marginTop:0 }}>
        <Modal style={{width:360, marginLeft:1}} isVisible={this.state.notificationVisible}>
          <Notification
            onPressClose={() => {
              this._onPressClose();
            }}
          />
        </Modal>
        <Modal style={{width:360, marginLeft:1}} isVisible={this.state.searchVisible}>
          <SearchView
            onPressBack={() => {
              this._onPressBack();
            }}
          />
        </Modal>

        <ScrollView 
           refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        style={{ flexDirection: "column" }}>
          <View style={{ marginBottom: 20 }}>
            <HeaderHome
              onPressNotification={() => {
                this._onPressNoti();
              }}
              onPressSearch={() => {
                this. _onPressSearch()
              }}
              navigation={navigation}
              onPress={this._onHomePress}
            />
          </View>
          <View>
            <FlatList
              data={this.state.topArticle}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItemHead}
            />
            <FlatList
              data={this.state.articles}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

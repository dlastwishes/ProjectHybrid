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
import HeaderHome from "@Navigations/HomeHeader";
import CardStory from "@Widgets/CardStory";
import SubCardStory from "@Widgets/subStoryCard";
import Modal from "react-native-modal";
import Notification from "@Views/Notification";
import MenuDrawer from "@Navigations/MenuDrawer";
import SearchView from '@Views/SearchView'

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false,
      notificationVisible: false,
      topArticle: [
        {
          title: "Introducing to Corda Blockchain",
          description: "Art Makes You Smart",
          createDate: "2 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "7 min read",
          source: require("@Images/story/corda2.png")
        }
      ],
      articles: [
        {
          title: "Introducing to Corda Blockchain",
          description: "Art Makes You Smart",
          createDate: "2 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "7 min read",
          source: require("@Images/story/corda2.png")
        },
        {
          title: "A",
          description: "Art Makes You Smart",
          createDate: "7 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "2 min read",
          source: require("@Images/story/corda2.png")
        },
        {
          title: "B",
          description: "Art Makes You Smart",
          createDate: "10 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "10 min read",
          source: require("@Images/story/corda2.png")
        },
        {
          title: "C",
          description: "Art Makes You Smart",
          createDate: "7 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "2 min read",
          source: require("@Images/story/corda2.png")
        },
        {
          title: "D",
          description: "Art Makes You Smart",
          createDate: "7 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "2 min read",
          source: require("@Images/story/corda2.png")
        },
        {
          title: "E",
          description: "Art Makes You Smart",
          createDate: "7 days ago",
          author: "DlastWishes",
          category: "Blockchain",
          timeRead: "2 min read",
          source: require("@Images/story/corda2.png")
        }
      ]
    };
  }

  componentDidMount() {

  }

  _renderItem = ({ item }) => {
    return <SubCardStory article={item} />;
  };

  _renderItemHead = ({ item }) => {
    return <CardStory article={item} />;
  };

  _onHomePress = () => {
    
  };

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
      <View style={{ backgroundColor: "#F9F6F5" }}>
        <MenuDrawer />

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

        <ScrollView style={{ flexDirection: "column" }}>
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

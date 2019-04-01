import React, { Component } from "react";
import { RefreshControl,FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NotiBox from '@Widgets/Notibox'
import NotificationHeader from '@Widgets/NotificationHeader'

export default class Notification extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      notifications: [
        {
         name : 'Book Formatting',
         status : 'followed you',
         date : '22 March',
         source: require("@Images/story/corda2.png")
        },
        {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
         {
          name : 'Book Formatting',
          status : 'followed you',
          date : '22 March',
          source: require("@Images/story/corda2.png")
         },
      ]
    };
  }

  componentDidMount() {}

  _renderItem = ({ item }) => {
    return <NotiBox noti={item} />;
  };

  _keyExtractor = (item, index) => item.title;

  _renderHeader = () => {
    var Sticky_header_View = (
      <NotificationHeader onPressClose={this.props.onPressClose}/>
      );
      return Sticky_header_View;
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  fetchData = async () => {

  }


  render() {

    return (
        <FlatList data={this.state.notifications} 
        keyExtractor={this._keyExtractor}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={this._renderHeader}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        renderItem={this._renderItem} />

    );
  }
}

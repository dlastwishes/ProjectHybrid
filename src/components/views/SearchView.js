import React, { Component } from "react";
import { RefreshControl,FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Field from '@Widgets/Field'
import SearchViewHeader from '@Widgets/SearchViewHeader'

export default class SearchView extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      keywords: [
        {
         keyword : 'Blockchain'
        },
        {
            keyword : 'Javascript'
        },
        {
            keyword : 'Internet'
        },
        {
            keyword : 'Javascript'
        },
  
      ]
    };
  }

  componentDidMount() {}

  _renderItem = ({ item }) => {
    return <Field keyword={item} />;
  };

  _keyExtractor = (item, index) => item.keyword;

  _renderHeader = () => {
    var Sticky_header_View = (
      <SearchViewHeader onPressBack={this.props.onPressBack}/>
      );
      return Sticky_header_View;
  }




  render() {

    return (
        <FlatList data={this.state.notifications} 
        keyExtractor={this._keyExtractor}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={this._renderHeader}
        renderItem={this._renderItem} />

    );
  }
}

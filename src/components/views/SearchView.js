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
        keywords: [
        {
         keyword : 'Blockchain'
        },
        {
            keyword : 'Cryptocurrency'
        },
        {
            keyword : 'Programming'
        },
        {
            keyword : 'Java'
        },
        {
            keyword : 'Javascript'
        },
        {
            keyword : 'Software Engineering'
        },
        {
            keyword : 'Marketing'
        },
        {
            keyword : 'Cybersecurity'
        },
        {
            keyword : 'Business'
        },
        {
            keyword : 'Transportation'
        },
        {
            keyword : 'Startups'
        },
        {
            keyword : 'Android dev'
        },
        {
            keyword : 'Social Media'
        },
        {
            keyword : 'Internet'
        },
        {
            keyword : 'Nature'
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
        <FlatList 
        style={{height:'100%'}}
        data={this.state.keywords} 
        keyExtractor={this._keyExtractor}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={this._renderHeader}
        renderItem={this._renderItem} />

    );
  }
}

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

import ProductData from "./ChasisModels/ProductData";
import ProductItem from "./ChasisModels/ProductItem";
import LineItem from "@Components/ChasisModels/LineItem";

export default class main extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      listProduct : []
    };
  }

  componentDidMount() {
    ProductData.fetchProducts().then(products => {
      this.setState({ listProduct: products , products : products });
    });
  }

  _renderItem = ({ item }) => {
    return <ProductItem product={item} />;
  };

  onPressLineItem = t => {
    var types = this.state.listProduct;
    const res = types.filter(type => type.productline == t.toString())
    this.setState({ products: res });
  
  };

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <ScrollView>
          <LineItem
            onPress={() => this.onPressLineItem("Classic Cars")}
            source="1"
            name="Classic Cars"
          />
          <LineItem
            onPress={() => this.onPressLineItem("Motorcycles")}
            source="2"
            name="Motorcycles"
          />
          <LineItem
            onPress={() => this.onPressLineItem("Planes")}
            source="3"
            name="Planes"
          />
          <LineItem
            onPress={() => this.onPressLineItem("Ships")}
            source="4"
            name="Ships"
          />
          <LineItem
            onPress={() => this.onPressLineItem("Trains")}
            source="5"
            name="Trains"
          />
          <LineItem
            onPress={() => this.onPressLineItem("Trucks and Buses")}
            source="6"
            name="Trucks and Buses"
          />
          <LineItem
            onPress={() => this.onPressLineItem("Vintage Cars")}
            source="7"
            name="Vintage Cars"
          />
        </ScrollView>

        <FlatList data={this.state.products} renderItem={this._renderItem} />
      </View>
    );
  }
}

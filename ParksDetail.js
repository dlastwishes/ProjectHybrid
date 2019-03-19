import React, { Component } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";

import ParksData from "./ParksData";

export default class ParksDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      id,
      name,
      lat,
      lon,
      distance,
      image,
      state,
      description
    } = this.props.parks;
    let imgUrl = ParksData.getParksImageHeaderUrl() + image;
    return (
      <View style={styles.container}>

        <Image source={{ uri: imgUrl }} style={styles.image} />
        <Text style={styles.header}>{name}</Text>

        <ScrollView>

        <View style={styles.row}>
        <Text style={styles.detail}> Park Detail </Text>
        <Text style={styles.description}>{description} </Text>
        </View>

        <View style={styles.row}>
        <Text style={styles.detail}> State : </Text>
        <Text style={styles.description}> {state} </Text>
        </View>

        <View style={styles.row}>
       <Text style={styles.detail}> Distance : </Text>
        <Text style={styles.description}>{distance}</Text>
       </View>

       <View style={styles.row}>
       <Text style={styles.detail}> Location(lat,lon) : </Text>
        <Text style={styles.description}> {lat} , {lon}  </Text>
       </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#D3D3D3"
  },
  row: {
    flexDirection: "row"
  },
  image: {
    height: 100
  },
  header: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  detail: {
    margin: 5,
    fontSize: 16,
    color: "blue",
    textAlign: "left"
  },
  description: {
    margin: 5,
    fontSize: 14
  }
});

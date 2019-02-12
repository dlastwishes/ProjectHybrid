import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import OpenWeatherMap from "./open_weather_map";

export default class Weather extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      forecast: null
    };
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip)
      .then(forecast => {
        this.setState({ forecast: forecast });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
        <View style={styles.container}> 
         <Text style={styles.welcome}> You input {this.state.zip}</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
        <Text>
          {this.state.forecast
            ? this.state.forecast.main + "(" + this.state.forecast.temp + "°F)"
            : "No information"}
        </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        marginTop: 50,
        alignItems: 'center', },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign : 'center',
  }
});

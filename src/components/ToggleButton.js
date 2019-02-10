import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';

export default class ToggleButton extends Component {

    static navigationOptions =
        {
            header : null,
        };

    constructor(props) {
        super(props);

        this.state = {
            liked : false,
        }
    }

    _onPressBtn = () => {
        this.setState( { liked: !this.state.liked } ) ;
    }

    render() {

        const likeStyle = (this.state.liked == true) ? styles.liked : null;

        return (
            <View style={styles.container}>
            <TouchableHighlight
            onPress = {this._onPressBtn}
            style = {styles.btn}
            underlayColor = "#fefefe">
            <Image source= {require('../images/heart.png')}
            style = {[ styles.icon, likeStyle ]} /> 
            </TouchableHighlight>
            <Text style = {styles.text}>Do you like this app?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create( { container: {
    marginTop: 50,
    alignItems: 'center', },
    btn: { borderRadius: 5, padding: 10,
    }, icon: {
    width: 180,
    height: 180, tintColor: '#f1f1f1',
    }, liked: {
    tintColor: '#e74c3c', },
    text: { marginTop: 20,
    }, 
}) ;

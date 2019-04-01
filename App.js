import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from '@Navigations/MenuDrawer';

export default class App extends React.Component {
  static navigationOptions = {
    headerMode: 'none'
   };

  render() {
    return (
      <View style={styles.container}>
        <Drawer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
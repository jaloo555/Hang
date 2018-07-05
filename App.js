import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/utils/router'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
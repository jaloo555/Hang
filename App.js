import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/utils/router'

export default class App extends React.Component {
  render() {
    return (
        <RootNavigator/>
    )
  }
}
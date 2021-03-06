import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class Friends extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-people${focused ? '' : '-outline'}`}
        size={28}
        color={tintColor}
      />
    ),
  }

  render() {
    return(
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  }
})
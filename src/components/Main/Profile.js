import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Button
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-person${focused ? '' : '-outline'}`}
        size={28}
        color={tintColor}
      />
    ),
  }

  _signOutAsync = async () => {
    await AsyncStorage.setItem('userToken', 'Auth');
    this.props.navigation.navigate('Auth')
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Hi</Text>
        <Button title="Sign out" onPress={this._signOutAsync} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  }
})
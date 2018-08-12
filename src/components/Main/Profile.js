import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Button
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {onSignOut, getUser} from '../../utils/auth'
import {auth} from '../../utils/firebase'

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

  _signOutAsync = () => {
    AsyncStorage.setItem('userToken', 'Auth');
    onSignOut(this.props.navigation.navigate('AuthStack'))
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>{this.getUser}</Text>
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
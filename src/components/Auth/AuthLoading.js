import React, { Component } from 'react';
import {
      View,
      AsyncStorage
  } from 'react-native'
import {isSignedIn} from '../../utils/auth'

export default class AuthLoading extends Component {
  constructor() {
      super();
      this._bootstrapAsync()
  }
  
  state = {
    signedIn: false,
    checkedSignIn: false,
  }

  _bootstrapAsync = () => {
    isSignedIn()
      .then((res) => {
        this.props.navigation.navigate(res ? 'App': 'Auth')
        this.setState({signedIn: res, checkedSignIn: true})
      })
      .catch(err => alert(`An error has occured: ${err}`))
      
  }
  render() {
    const { checkedSignIn, signedIn } = this.state

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null
    }

    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        {signedIn ? alert('signed in'): alert('nah')}
      </View>
    )
  }
}
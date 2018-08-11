import React from 'react'
import { StatusBar } from 'react-native'
import {AuthStack, AppStack} from './src/utils/router'
import {auth} from './src/utils/firebase'

export default class App extends React.Component {
  state = {
    user: {},
    isLoading: true,
  }

  async componentDidMount() {
    StatusBar.setHidden(true)
    this.setState({
      //condition to precheck login status
      isLoading: false
    })
  }

  componentWillUnmount() {
    //dismiss firebase auth check
  }

  render() {
    if (this.state.isLoading) return null
    let loggedIn = false
    if (this.state.user.username) {
      loggedIn = true
    }
    if (loggedIn) {
      return (
        <AppStack />
      )
    } else{
      return (
        <AuthStack />
      )
    }
  }
}
import React from 'react'
import { StatusBar } from 'react-native'
import {AuthStack, AppStack} from './src/utils/router'
import Firebase from './src/utils/firebase'

export default class App extends React.Component {
  state = {
    user: {},
    isLoading: true,
  }

  async componentDidMount() {
    StatusBar.setHidden(true)
    try {
      // const user = await
      this.setState({ user, isLoading: false })
    } catch (err) {
      this.setState({ isLoading: false })
    }
  }

  async componentWillReceiveProps(nextProps) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.setState({ user })
    } catch (err) {
      this.setState({ user: {} })
    }
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    if (this.state.isLoading) return null
    let loggedIn = false
    if (this.state.user.username) {
      loggedIn = true
    }
    if (loggedIn) {
      return (
        <AuthStack />
      )
    }
    return (
      <AppStack />
    )
  }
}
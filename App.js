import React from 'react'
import { StatusBar } from 'react-native'
import {MainNav} from './src/utils/router'
import {auth} from './src/utils/firebase'

export default class App extends React.Component {
  render() {
    return(
      <MainNav/>
    )
  }
}
import React, {Component} from 'react'
import {
    Text,
    View,
    Stylesheet,
    AsyncStorage,
    Button
    } from 'react-native'

export default class Login extends Component {
    static navigationOptions = {
        title: 'Please sign in',
      };
    
      render() {
        return (
          <View>
            <Button title="Sign in!" onPress={this._signInAsync} />
          </View>
        );
      }
    
      _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'App');
        console.log(`Navigating to ${AsyncStorage.getItem('userToken')}`)
        this.props.navigation.navigate('App');
      };
}
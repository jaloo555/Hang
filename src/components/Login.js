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
            <Button title="Login" onPress={this._signInAsync} />
            <Button title="Sign up" onPress={this._signUpAsync} />
          </View>
        );
      }
    
      _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'App');
        this.props.navigation.navigate('App');
      };

      _signUpAsync = () =>  {
        this.props.navigation.navigate('SignUp');
      }
}
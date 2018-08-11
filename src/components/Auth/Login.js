import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    AsyncStorage,
    Button,
    TextInput,
    } from 'react-native'
import {auth} from '../../utils/firebase'
import {onSignInAnonymously, onSignIn} from '../../utils/auth'


export default class Login extends Component {
  static navigationOptions = {
      title: 'Please sign in',
  }

  state = {
    email: '',
    // phoneNumber: '',
    password: '',
    errorMessage: null,
  }

  _signInAsync =  () => {
    AsyncStorage.setItem('userToken', 'App')
    onSignIn(this.props.navigation.navigate('App'))
  }

  _signUpAsync = () =>  {
    this.props.navigation.navigate('SignUp')
  }

  _signInAnonAsync = async () => {
    AsyncStorage.setItem('userToken', 'App')
    onSignInAnonymously(this.props.navigation.navigate('App'))
  }

  render() {
    return (
      <View>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this._signInAsync} />
        <Button title="Explore the app" onPress={this._signInAnonAsync}/>
        <Button title="Don't have an account? Sign Up" onPress={this._signUpAsync} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    
  }
})
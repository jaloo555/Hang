import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    AsyncStorage,
    Button
    } from 'react-native'

export default class Poll extends Component {
      render() {
        return (
          <View>
            <Button title="Sign out" onPress={this._signOutAsync} />
            <Text style={styles.text}>Polls</Text>
          </View>
        );
      }
    
      _signOutAsync = async () => {
        await AsyncStorage.setItem('userToken', 'Auth');
        console.log(`Navigating to ${AsyncStorage.getItem('userToken')}`)
        this.props.navigation.navigate('Auth');
      };
}

const styles = StyleSheet.create({
})
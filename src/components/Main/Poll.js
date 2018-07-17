import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    AsyncStorage,
    Button
    } from 'react-native'
import CardView from './CardView'

import {Ionicons} from '@expo/vector-icons'

const testData = [{
  title: "Mooby's Burger",
  description: "Great place for burgers",
  voters: [ "James", "Tom","Elizabeth"],
  key: "0"
  }, {
  title: "Jet's Pizza",
  description: "Great place for pizza",
  voters: ["John", "Beth"],
  key: "1"
}]

export default class Poll extends Component {
      render() {
        return (
          <View style={styles.pollContainer}>
            <Button title="Sign out" onPress={this._signOutAsync} />
            <Text style={styles.text}>Polls</Text>
            <View>
                <CardView data={testData}/>
            </View>
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
  pollContainer: {
    marginTop: 40,
    backgroundColor: 'gray',
    flex: 1
  }
})
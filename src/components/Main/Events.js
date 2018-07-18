import React, {Component} from 'react'
import {
    Text,
    View,
    ScrollView,
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

export default class Events extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-home${focused ? '' : '-outline'}`}
        size={28}
        color={tintColor}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button title="Sign out" onPress={this._signOutAsync} />
          <Text style={styles.text}>Events</Text>
          <View>
              <CardView data={testData}/>
          </View>
        </ScrollView>
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
  container: {
    marginTop: 40,
    flex: 1
  }
})
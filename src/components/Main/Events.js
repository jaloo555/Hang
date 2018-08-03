import React, {Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    AsyncStorage,
    Button,
    FlatList
    } from 'react-native'
import CardView from './CardView'

const testData = [{
  title: "Mooby's Burger",
  description: "Great place for burgers",
  members: [ "James", "Tom","Elizabeth"],
  status: true,
  key: "0"
  }, {
  title: "Jet's Pizza",
  description: "Great place for pizza",
  members: ["John", "Beth"],
  status: false,
  key: "1"
}]

export default class Events extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <CardView data={testData} onPressNavBtn={this._navBtnOnPress} onPressBtn={this._btnOnPress}/>
        </ScrollView>
      </View>  
    );
  }

  _navBtnOnPress = (item) => {
    console.log(`navigating to ${item}`)
    this.props.navigation.navigate('EventDetail', {
      event: item
    })
  }

  _btnOnPress = () => {
    alert('UPVOTE')
  }
  
  _signOutAsync = async () => {
    await AsyncStorage.setItem('userToken', 'Auth');
    console.log(`Navigating to ${AsyncStorage.getItem('userToken')}`)
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
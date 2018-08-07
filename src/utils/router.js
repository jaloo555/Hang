import { 
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
  } from 'react-navigation';
import React from 'react'
import {createTabNavigator} from 'react-navigation-deprecated-tab-navigator';
import Events from '../components/Main/Events'
import EventDetail from '../components/Main/EventDetail'
import Search from '../components/Main/Search'
import AddEvent from '../components/Main/AddEvent'
import Friends from '../components/Main/Friends'
import Profile from '../components/Main/Profile'
import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import AuthLoading from '../components/Auth/AuthLoading'
import {Ionicons} from '@expo/vector-icons'

const EventStack = createStackNavigator({
  EventsMain: {
    screen: Events,
    navigationOptions: {
      title: 'Events',
    }
  },
  EventDetail: {
    screen: EventDetail,
  }
}, {
  initialRouteName: 'EventsMain'
})

const AppStack = createTabNavigator({
    EventStack: {
      screen: EventStack,
      navigationOptions: {
        title: 'Events',
        tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
              name={`ios-home${focused ? '' : '-outline'}`}
              size={28}
              color={tintColor}
            />
          ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Search',
      }
    },
    AddEvent: {
      screen: AddEvent,
      navigationOptions: {
        title: 'AddEvent',
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        title: 'Friends',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      }
    },
},
{
  initialRouteName: "EventStack",
  swipeEnabled: true,
  tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#191970', // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
          backgroundColor: '#fff' // TabBar background
      }
  } 
})
  
const AuthStack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
          title: 'Login'
      }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
          title: 'Sign up'
        }
    },
    AuthLoading: {
      screen: AuthLoading,
    }
})

module.exports = {AuthStack, AppStack}
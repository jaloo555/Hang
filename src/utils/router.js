import { 
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator } from "react-navigation";
import Events from '../components/Main/Events'
import Search from '../components/Main/Search'
import AddEvent from '../components/Main/AddEvent'
import Friends from '../components/Main/Friends'
import Profile from '../components/Main/Profile'
import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import AuthLoading from '../components/Auth/AuthLoading'
import {Ionicons} from '@expo/vector-icons'

const AppStack = createBottomTabNavigator({
    Events: {
      screen: Events,
      navigationOptions: {
        title: 'Events',
      }
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
  initialRouteName: "Events",
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
  
export default RootNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth',
  }
)
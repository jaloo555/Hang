import { 
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator } from "react-navigation";
import Poll from '../components/Poll'
import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import AuthLoading from '../components/Auth/AuthLoading'

const AppStack = createMaterialTopTabNavigator({
    Poll: {
      screen: Poll,
      navigationOptions: {
        title: 'Poll',
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
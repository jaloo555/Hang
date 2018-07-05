import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Poll from '../components/Poll'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import AuthLoading from '../components/AuthLoading'

const AppStack = createStackNavigator({
    Poll: {
      screen: Poll,
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
          title: 'SignUp'
        }
    }
})
  
export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

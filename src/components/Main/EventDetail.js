import React,{ Component } from "react"
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native"

export default class EventDetail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('event').item.title,
    }
  }

  state = {
    title: null,
    description: null,
    key: null,
    members: [],
    status: false,
  }

  componentDidMount() {
    const {state} = this.props.navigation //change to getParam
    const {description, key, members, status, title} = (state.params.event.item)
    this.setState({
      title: title,
      description: description,
      key: key,
      members: members,
      status: status,
    })
  }

  render() {
    if (this.state.key !== null) {
      return (
        <View style={styles.detailView}>
          <Text>{this.state.title}</Text>
          <Text>{this.state.description}</Text>
          <Text>{
            this.state.members.map((member)=> {
              return `${member} `
            })
            }</Text>
          <Text>{this.state.status}</Text>
        </View>
      )
    }
    else {
      return (
        <View>
          <Text>Error</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
})
import React, {Component} from 'react'
import {Text, View, TextInput} from 'react-native'
import styled from 'styled-components'

const InputText = styled.TextInput`
    margin: 15px;
    height: 40px;
    border-color: #F0FFFF;
    border-width: 1;
    padding-left: 7;
`

const SignUpBtn = styled.Button`
    background: palevioletred;
    border-radius: 2px;
    color: white;
`

export default class SignUp extends Component {
    state = {
        username: '',
        phoneNumber: '',
        password: '',
    }
    
    render() {
        return (
            <View>
                <InputText
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    placeholder='Username'/>

                <InputText 
                    onChangeText={phoneNumber => this.setState({phoneNumber})}
                    value={this.state.phoneNumber}
                    placeholder='Phone number'/>

                <InputText 
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    placeholder='Password'
                    secureTextEntry= {true}/>
                
                <SignUpBtn
                    title='Sign up' 
                    onPress={()=> {alert('hey')}}
                />
            </View>
        )
    }
}
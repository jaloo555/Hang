import React, {Component} from 'react'
import {Text, View, TextInput} from 'react-native'
import styled from 'styled-components'
import { onRegister } from '../../utils/auth';

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
        email: '',
        // phoneNumber: '',
        password: '',
    }

    _onPress = () => {
        console.log(`creating user with credentials: ${this.state}`)
        const {email,password} = this.state
        onRegister({email,password}, this.props.navigation.navigate('Login'))
    }
    
    render() {
        return (
            <View>
                <InputText
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                    autoCapitalize='none'
                    placeholder='Email'/>

                {/* <InputText 
                    onChangeText={phoneNumber => this.setState({phoneNumber})}
                    value={this.state.phoneNumber}
                    placeholder='Phone number'/> */}

                <InputText 
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry= {true}/>
                
                <SignUpBtn
                    title='Sign up' 
                    onPress={this._onPress}
                />
            </View>
        )
    }
}
import { AsyncStorage } from "react-native"
import {auth, database, provider} from './firebase'

export const USER_KEY = "auth-demo-key"

// register user
export function onRegister(data, callback) {
  const { email, password } = data
  auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res)
      }, callback)
      .catch((error) => {
        const {code, message} = error
        console.log(code, message)
        alert(error)
      })
}

// signin user
export function onSignIn(data, callback) {
}

// signout user
export function onSignOut(callback) {
  auth.signOut()
    .then((res) => {
      console.log(res)
    }, callback)
    .catch((error)=> {
      const {code, message} = error
        console.log(code, message)
        alert(error)
    })
}

// signin anonymously - testing method
export function onSignInAnonymously(callback) {
  auth.signInAnonymously()
    .then((res) => {
      console.log(res)
    }, callback)
    .catch((error)=> {
      const {code, message} = error
        console.log(code, message)
        alert(error)
    })
}
import { AsyncStorage } from "react-native"
import {auth, database, provider} from './firebase'

export const USER_KEY = "auth-demo-key"

// register user
export function onRegister(data, callback) {
  const { email, password } = data
  auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(`onCreateUser ${res}`)
      }, callback)
      .catch((error) => {
        const {code, message} = error
        console.log(code, message)
        alert(`createuser error: ${error}`)
      })
}

// signin user
export function onSignIn(data, callback) {
  auth.signInWithEmailAndPassword()
    .then((res) => {
      console.log(`onSignIn ${res}`)
    }, callback)
    .catch((error)=> {
      const {code, message} = error
        console.log(code, message)
        alert(`signin error: ${error}`)
    })
}

// signout user
export function onSignOut(callback) {
  auth.signOut()
    .then((res) => {
      console.log(`onSignOut ${res}`)
    }, callback)
    .catch((error)=> {
      const {code, message} = error
        console.log(code, message)
        alert(`signOut error: ${error}`)
    })
}

// getCurrentUser
export function getUser() {
  return auth.currentUser
}

// signin anonymously - testing method
export function onSignInAnonymously(callback) {
  auth.signInAnonymously()
    .then((res) => {
      console.log(`onAnonSignIn ${res}`)
    }, callback)
    .catch((error)=> {
      const {code, message} = error
        console.log(code, message)
        alert(`anonSignin error: ${error}`)
    })
}
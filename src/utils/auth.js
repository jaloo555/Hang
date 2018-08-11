import { AsyncStorage } from "react-native"
import {auth, database, provider} from './firebase'

export const USER_KEY = "auth-demo-key"

// register user
export function onRegister(data, callback) {
  const { email, password, username } = data
  auth.createUserWithEmailAndPassword(email, password)
      .then((res) => createUser({ username, uid:res.user.uid }, callback))
      .catch((error) => callback(false, null, error))
}

// create the user
export function createUser(user, callback) {
  const userRef = database.ref().child('users')
  userRef.child(user.uid).update({...user})
    .then(()=> callback(true, user, null))
    .catch((error) => callback(false,null,{message: error}))
}
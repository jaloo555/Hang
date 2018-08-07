import React from 'react'
import * as firebase from 'react-native-firebase'

export default class Firebase {
  constructor() {
    super()
    // gotta hide this later
    var config = {
      apiKey: "AIzaSyCl0_KQZ7OiG4kgFTwdaGkABvUVrGEK9MM",
      authDomain: "hang-9fd3e.firebaseapp.com",
      databaseURL: "https://hang-9fd3e.firebaseio.com",
      projectId: "hang-9fd3e",
      storageBucket: "hang-9fd3e.appspot.com",
      messagingSenderId: "834876788052"
    };
    firebase.initializeApp(config);
  }
  state = {

  }

}
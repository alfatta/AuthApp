import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import config from './src/config';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      console.log('Init firebase ...');
      firebase.initializeApp(config.firebaseConfig)
    }
  }
  render() { 
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
 
export default App;
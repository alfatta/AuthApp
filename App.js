import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import config from './src/config';
import { Header, Spinner, Button, Card, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = {
    isLogin: null
  }
  componentDidMount() {
    if (!firebase.apps.length) {
      console.log('Init firebase ...');
      firebase.initializeApp(config.firebaseConfig)
    }
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Auth state changed', user);
      this.setState({ isLogin: !!user})
    })
  }
  renderContent() {
    switch (this.state.isLogin) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={ () => firebase.auth().signOut() }>
                Logout
              </Button>
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <Card>
            <CardSection>
              <Spinner />
            </CardSection>
          </Card>
        )
    }
  }
  render() { 
    return (
      <View>
        <Header title="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}
 
export default App;
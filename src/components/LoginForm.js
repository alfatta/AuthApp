import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: 'TEST INI ERROR',
  }
  onButtonPress() {
    const { email, password } = this.state
    console.log('Processing login..');

    this.setState({ error: '' })
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('Berhasil', result);
      })
      .catch((error) => {
        console.log('Gagal', error.code, error.message);
        if (error.code == 'auth/user-not-found') {
          console.log('Registering user...');
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result2) => {
              console.log('Berhasil', result2);
            })
            .catch((error2) => {
              console.log('Gagal', error2.code, error2.message);
              this.setState({ error: error2.message})
            })
        } else {
          this.setState({ error: error.message})
        }
      })
  }
  render() { 
    return (
      <Card>
        <CardSection>
          <Input
            value={ this.state.email }
            onChangeText={ (email) => this.setState({ email }) }
            label="Email"
            placeholder="user@gmail.com" />
        </CardSection>
        <CardSection>
          <Input
            value={ this.state.password }
            onChangeText={ (password) => this.setState({ password }) }
            label="Password"
            placeholder="password"
            secureTextEntry />
        </CardSection>

        <Text style={{ fontSize: 18, color: 'red', alignSelf: 'center' }}>
          { this.state.error }
        </Text>

        <CardSection>
          <Button onPress={ () => this.onButtonPress() }>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
 
export default LoginForm;
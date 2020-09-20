import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';
import Spinner from './Spinner';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }
  onLoginSuccess(result) {
    console.log('Berhasil', result);
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    })
  }
  onButtonPress() {
    const { email, password } = this.state
    console.log('Processing login..');

    this.setState({ error: '', loading: true })
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => this.onLoginSuccess(result))
      .catch((error) => {
        console.log('Gagal', error.code, error.message);
        if (error.code == 'auth/user-not-found') {
          console.log('Registering user...');
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result2) => this.onLoginSuccess(result2))
            .catch((error2) => {
              console.log('Gagal', error2.code, error2.message);
              this.setState({ error: error2.message, loading: false })
            })
        } else {
          this.setState({ error: error.message, loading: false })
        }
      })
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner />
    }
    return (
      <Button onPress={ () => this.onButtonPress() }>
        Login
      </Button>
    )
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
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}
 
export default LoginForm;
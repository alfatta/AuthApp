import React, { Component } from 'react';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Input from './Input';

class LoginForm extends Component {
  render() { 
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="user@gmail.com" />
        </CardSection>
        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
 
export default LoginForm;
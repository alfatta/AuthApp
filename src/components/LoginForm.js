import React, { Component } from 'react';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class LoginForm extends Component {
  render() { 
    return (
      <Card>
        <CardSection></CardSection>
        <CardSection></CardSection>
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
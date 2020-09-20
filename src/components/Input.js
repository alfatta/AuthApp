import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {
  render() {
    const { label, placeholder, secureTextEntry } = this.props
    return (
      <View>
        <Text>{ label }</Text>
        <TextInput
          placeholder={ placeholder }
          secureTextEntry={ secureTextEntry }
          autoCorrect={ false } />
      </View>
    );
  }
}
 
export default Input;
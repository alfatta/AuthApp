import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';

class App extends Component {
  render() { 
    return (
      <View>
        <Header title="Authentication" />
      </View>
    );
  }
}
 
export default App;
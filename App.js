import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import reducers from './src/reducers';
import LanguageSelector from './src/LanguageSelector/LanguageSelector';
import {createStore} from 'redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LanguageSelector />
      </Provider>
    );
  }
}
//export default App;

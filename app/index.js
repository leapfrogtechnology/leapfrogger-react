import React, { Component } from 'react';
import NavigationRootContainer from './routes/NavRoot';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
const store = configureStore();

export default class EntryPoint extends Component {
  render() {
    return (
    <Provider store={store}>
      <NavigationRootContainer />
    </Provider>
    );
  }
}
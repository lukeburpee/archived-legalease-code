import React, { Component, PropTypes } from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import theme from './../config/theme';

import Navigation from './navigation';

export default class LegalEase extends Component {
  render() {
    return (
    <Provider store={this.props.store}>
      <ThemeProvider uiTheme={theme}>
        <Navigation/>
      </ThemeProvider>
    </Provider>
    );
  }
}

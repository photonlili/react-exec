import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ReactBus from './reactbus'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <ReactBus />
      </MuiThemeProvider>
    );
  }
}

export default App;

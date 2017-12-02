import React, { Component } from 'react';
import classes from './App.css';
import AppBar from './components/AppBar/AppBar';
import Drawer from './components/Drawer/Drawer';
import WebGL from './components/WebGL/WebGL';

class App extends Component {
  render() {
    return (
        <div className={classes.app}>
          <div className={classes.header}>
            <AppBar/>
          </div>

          <div className={classes.sidebar}>
            <Drawer/>
          </div>

          <div className={classes.main}>
            <WebGL/>
          </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import AppBar from './components/AppBar/AppBar';
import Drawer from './components/Drawer/Drawer';

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
            webgl
          </div>
        </div>
    );
  }
}

export default App;

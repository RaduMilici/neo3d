import React from 'react';
import classes from './AppBar.scss';

const AppBar = () => {
  return (
      <div className={classes['app-bar']}>
        <h1 className={classes['app-bar--header']}>Near Earth Objects</h1>
      </div>
  );
};

export default AppBar;

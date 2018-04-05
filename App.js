/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Screen1 from "./src/components/Screen1";
import Screen2 from "./src/components/Screen2";

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="screen1" initial={true} component = {Screen1}/>
          <Scene key="screen2" component = {Screen2}/>
        </Scene>
      </Router>
    );
  }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BasicNavigation from "./src/navigation/BasicNavigation";
import TabNavigation from "./src/navigation/TabNavigation";

export default class App extends Component{
  render() {
    return (
      <TabNavigation/>
    );
  }
}
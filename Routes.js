import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Screens/Home';
import OnLoad from './components/Screens/OnLoad';
const Project = createStackNavigator({
  OnLoad: {
    screen: OnLoad,
  },
  Home: {
    screen: Home,
  },
});
export default createAppContainer(Project);

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Screens/Home';
import Profile from './components/Screens/Profile';
import OnLoad from './components/Screens/OnLoad';
const Project = createStackNavigator({
  // OnLoad: {
  //   screen: OnLoad,
  // },
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});
export default createAppContainer(Project);

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FreelancerList from './components/Screens/FreelancerList';
import FreelancerShow from './components/Screens/FreelancerShow';
import OnLoad from './components/Screens/OnLoad';
import Home from './components/Screens/Home';
import Apply from './components/Screens/Home';
const Project = createStackNavigator({
  // OnLoad: {
  //   screen: OnLoad,
  // },
  // // FreelancerShow: {
  // //   screen: FreelancerShow,
  // // },
  Home: {
    screen: Home,
  },
  FreelancerList: {
    screen: FreelancerList,
  },
  Apply: {
    screen: Apply,
  },
});
export default createAppContainer(Project);

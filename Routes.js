import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FreelancerList from './components/Screens/FreelancerList';
import FreelancerShow from './components/Screens/FreelancerShow';
import OnLoad from './components/Screens/OnLoad';
import Home from './components/Screens/Home';
import Apply from './components/Screens/Apply';

import LearnMore from './components/Screens/LearnMore';
const Project = createStackNavigator({
  // OnLoad: {
  //   screen: OnLoad,
  // },
  FreelancerShow: {
    screen: FreelancerShow,
  },
  // Home: {
  //   screen: Home,
  // },
  FreelancerList: {
    screen: FreelancerList,
  },
  // Apply: {
  //   screen: Apply,
  // },
  // LearnMore: {
  //   screen: LearnMore,
  // },
});
export default createAppContainer(Project);

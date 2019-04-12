import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FreelancerList from './components/Screens/FreelancerList';
import FreelancerShow from './components/Screens/FreelancerShow';
import OnLoad from './components/Screens/OnLoad';
import Home from './components/Screens/Home';
import Apply from './components/Screens/Apply';
import Success from './components/Screens/Success';
import LearnMore from './components/Screens/LearnMore';
const Project = createStackNavigator({
  // OnLoad: {
  //   screen: OnLoad,
  // },
  // Home: {
  //   screen: Home,
  // },
  // FreelancerList: {
  //   screen: FreelancerList,
  // },
  // FreelancerShow: {
  //   screen: FreelancerShow,
  // },
  // LearnMore: {
  //   screen: LearnMore,
  // },
  // Apply: {
  //   screen: Apply,
  // },
  Success: {
    screen: Success,
  },
});
export default createAppContainer(Project);

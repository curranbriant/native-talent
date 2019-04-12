import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FreelancerList from './components/Screens/FreelancerList';
import FreelancerShow from './components/Screens/FreelancerShow';
import OnLoad from './components/Screens/OnLoad';
import Home from './components/Screens/Home';
import Apply from './components/Screens/Apply';
import Success from './components/Screens/Success';
import LearnMore from './components/Screens/LearnMore';
import SignUp from './components/Screens/SignUp';
import SignUp2 from './components/Screens/SignUp2';
import SignInSuccess from './components/Screens/SignInSuccess';
const Project = createStackNavigator({
  OnLoad: {
    screen: OnLoad,
  },
  Home: {
    screen: Home,
  },
  FreelancerList: {
    screen: FreelancerList,
  },
  FreelancerShow: {
    screen: FreelancerShow,
  },
  LearnMore: {
    screen: LearnMore,
  },
  Apply: {
    screen: Apply,
  },
  Success: {
    screen: Success,
  },
  SignUp: {
    screen: SignUp,
  },
  SignUp2: {
    screen: SignUp2,
  },
  SignInSuccess: {
    screen: SignInSuccess,
  },
});
export default createAppContainer(Project);

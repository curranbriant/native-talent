import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Textarea,
  Label,
  Text,
} from 'native-base';

class Success extends React.Component {
  static navigationOptions = {
    Header: null,
  };
  render() {
    return <Text>Thanks for submitting an application!</Text>;
  }
}
export default Success;

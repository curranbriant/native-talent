import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
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

class SignInSuccess extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView>
        <Container
          style={{
            backgroundColor: '#1d3c6d',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            style={{
              height: 450,
              width: 450,
              position: 'absolute',
            }}
            source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/solidcircle.png')}
          />
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 20,
              color: 'white',
              marginLeft: 20,
            }}
          >
            Welcome!
          </Text>
          <Button
            light
            style={{
              marginLeft: 110,
              marginTop: 50,
              color: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text> Back To Home </Text>
          </Button>
        </Container>
      </ScrollView>
    );
  }
}
export default SignInSuccess;

import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Button,
  Text,
} from 'native-base';
class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item inlineLabel last>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
          </Form>
          <Button
            block
            info
            style={{
              width: 300,
              marginLeft: 40,
              marginTop: 10,
            }}
            onPress={() => this.props.navigation.navigate('SignUp2')}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default SignUp;

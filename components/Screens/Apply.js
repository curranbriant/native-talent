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

class Learn extends React.Component {
  static navigationOptions = {
    Header: null,
  };
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Skills</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Rate ($/hr)</Label>
              <Input />
            </Item>
            <Content padder>
              <Form>
                <Textarea rowSpan={2} bordered placeholder='Short Bio' />
              </Form>
            </Content>
          </Form>
          <Button
            block
            onPress={() => this.props.navigation.navigate('Success')}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default Learn;

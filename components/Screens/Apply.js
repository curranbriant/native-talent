import React, { Component } from 'react';
import {
  Button,
  Container,
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
              <Label>Skills/Languages/Technologies</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>LinkedIn</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Portfolio</Label>
              <Input />
              <Item floatingLabel>
                <Label>Other Media</Label>
                <Input />
              </Item>
              <Content padder>
                <Form>
                  <Textarea
                    rowSpan={2}
                    bordered
                    placeholder='Tell us about you'
                  />
                </Form>
              </Content>
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

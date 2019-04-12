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
class SignUp2 extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item inlineLabel last>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item picker>
              <Picker
                mode='dropdown'
                iosIcon={<Icon name='arrow-down' />}
                style={{ width: undefined }}
                placeholder="I'm am a..."
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor='#007aff'
                // selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label='Employer' value='key0' />
                <Picker.Item label='Freelancer' value='key1' />
              </Picker>
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
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text>Sign-Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default SignUp2;

import React from 'react';
import { View, Button } from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                  }}
                />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Software Engineer, Designer, Photgrapher, Environmentalist
                </Text>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                  }}
                >
                  Skills
                </Text>
                <Text note>
                  React, React Native, Django, Python, Node, Express, SQL, Git
                </Text>
                <Text>Rate: $85/hr</Text>
                <Text note>Available?: Yes</Text>
                <Button
                  title={'View Profile'}
                  onPress={() => this.props.navigation.navigate('Profile')}
                />
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default Home;

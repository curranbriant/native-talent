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
  Card,
  CardItem,
} from 'native-base';
import { league } from '/Users/briancurran/personalProjects/nativeProjects/freelanceApp/seed.json';
const persons = league.standard;

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  getPersons() {
    return persons.filter(person => {
      return person.name;
    });
  }

  render() {
    {
      return this.getPersons().map((person, i) => {
        return (
          <Container>
            <Header />
            <Content>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      }}
                    />

                    <Body>
                      <Text>{person.name}</Text>
                      <Text note>{person.about}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  {/* <Text
                    style={{
                      textDecorationLine: 'underline',
                    }}
                  >
                    Skills
                  </Text> */}
                  <Body>
                    <Text note>{person.skills}</Text>
                    <Text>Rate: ${person.rate}/hr</Text>
                    <Text note>Available?: {person.available}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Right>
                    <Button
                      title={'View Profile'}
                      onPress={() => this.props.navigation.navigate('Home')}
                    />
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Container>
        );
      });
    }
  }
}
export default Home;

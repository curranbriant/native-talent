import React from 'react';
import { View, Button, SectionList, ScrollView } from 'react-native';
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

class FreelancerList extends React.Component {
  static navigationOptions = {
    header: null,
  };
  getPersons() {
    return persons.filter(person => {
      return person;
    });
  }

  render() {
    let persons;
    persons = this.getPersons().map((person, id) => {
      return (
        <View
          key={id}
          style={{
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
            borderBottomWidth: 2,
            borderBottomColor: '#3b5998',
          }}
        >
          <Thumbnail
            source={{
              uri:
                'https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <Text>{person.name}</Text>
          <Text note>{person.about}</Text>
          <Text note>{person.skills}</Text>
          <Text>Rate: ${person.rate}/hr</Text>
          <Text note>Available?: {person.available}</Text>
          <Right>
            <Button
              title={'View Profile'}
              key={id}
              onPress={() =>
                this.props.navigation.navigate('FreelancerShow', {
                  personId: `${person.id}`,
                })
              }
            />
          </Right>
        </View>
      );
    });
    return <ScrollView>{persons}</ScrollView>;
  }
}
export default FreelancerList;

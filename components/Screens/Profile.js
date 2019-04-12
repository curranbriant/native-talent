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
import { group } from '/Users/briancurran/personalProjects/nativeProjects/freelanceApp/seed.json';
const persons = group.flat;

class FreelancerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     person: persons.find(
  //       person => person.id === this.props.navigation.state.params.personId
  //     ),
  //   });
  // }

  render() {
    person = persons.filter((person, id) => {
      key = { id };
      person => person.id === this.props.navigation.state.params.personId;
    });
    return (
      <View>
        <Text>{person.name}</Text>
      </View>
    );
  }
}

export default FreelancerShow;

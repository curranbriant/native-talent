import React from 'react';
import { View, SectionList, ScrollView, Image } from 'react-native';
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
  Item,
  Text,
  Card,
  CardItem,
  Icon,
  Input,
  Button,
} from 'native-base';
import { group } from '/Users/briancurran/personalProjects/nativeProjects/freelanceApp/seed.json';
const persons = group.flat;

class FreelancerList extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.getPersons = this.getPersons.bind(this);
  }
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
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          <Thumbnail style={{ marginBottom: 3 }} source={[person.image]} />
          <Text style={{ fontSize: 20 }}>{person.name}</Text>
          <Text>{person.about}</Text>
          <Text note>{person.skills}</Text>
          <Text>Rate: ${person.rate}/hr</Text>
          <Text note>Available?: {person.available}</Text>
          <Right>
            <Button
              // block
              // info
              style={{
                 marginBottom: 20,
              }}
              onPress={() =>
                this.props.navigation.navigate('FreelancerShow', {
                  person,
                })
              }
            >
              <Text>View Profile</Text>
            </Button>
          </Right>
        </View>
      );
    });
    return (
      <ScrollView>
        <Container
          style={{
            //#799BEE
            //#194CFA
            alignItems: 'center',
            height: 170,
            marginTop: 30,
            //backgroundColor: '#ccd3e5',
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: '#799BEE',
              fontSize: 90,
              fontFamily: 'Helvetica',
            }}
          >
            Talent
          </Text>
          <Text
            style={{
              color: '#799BEE',
              fontSize: 15,
              fontFamily: 'Helvetica',
              width: 250,
              marginLeft: 30,
            }}
          >
            The Best Of The Best. I'm talking Jordan Game 6 Level Of Talent.
          </Text>
        </Container>
        {persons}
      </ScrollView>
    );
  }
}
export default FreelancerList;

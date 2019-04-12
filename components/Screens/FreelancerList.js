import React from 'react';
import {
  View,
  SectionList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
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
import SearchBar from 'react-native-searchbar';
import { group } from '/Users/briancurran/personalProjects/nativeProjects/freelanceApp/seed.json';
const persons = group.flat;

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
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          <Thumbnail style={{ marginBottom: 3 }} source={[person.image]} />
          <Text style={{ fontSize: 20 }}>{person.name}</Text>
          <Text>{person.about}</Text>
          <Text note>{person.skills}</Text>
          <Text>Rate: ${person.rate}/hr</Text>
          <Text note>Accepting New Work?: {person.available}</Text>
          <Right>
            <Button
              hasText
              transparent
              style={{
                marginBottom: 15,
                marginTop: 10,
              }}
              onPress={() =>
                this.props.navigation.navigate('FreelancerShow', {
                  person,
                })
              }
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                View Profile
              </Text>
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
            The Best Of The Best.
            {/* The Best Of The Best. I'm talking Jordan Game 6 Level Of Talent. */}
          </Text>
        </Container>
        {persons}
      </ScrollView>
    );
  }
}
export default FreelancerList;

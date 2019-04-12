import React from 'react';
import { View, SectionList, ScrollView } from 'react-native';
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
  Image,
  Text,
  Card,
  CardItem,
  Button,
} from 'native-base';
import { group } from '/Users/briancurran/personalProjects/nativeProjects/freelanceApp/seed.json';
import { Col, Row, Grid } from 'react-native-easy-grid';
const persons = group.flat;

class FreelancerShow extends React.Component {
  static navigationOptions = {};

  render() {
    let person = this.props.navigation.state.params.person;
    return (
      <ScrollView>
        <Container style={{}}>
          {/* backgroundColor: '#7b8189' */}
          <Grid>
            <Col
              style={{
                alignContent: 'center',
              }}
            >
              <Row
                style={{
                  height: 100,
                  backgroundColor: '#799BEE',
                }}
              >
                <Thumbnail
                  square
                  style={{
                    marginBottom: 3,
                    width: 100,
                    height: 100,
                    marginTop: 15,
                    marginLeft: 10,
                  }}
                  source={[person.image]}
                />
                <Text
                  style={{
                    fontSize: 30,
                    marginTop: 40,
                    marginLeft: 15,
                    fontFamily: 'Helvetica',
                    color: 'white',
                  }}
                >
                  {person.name}
                </Text>
              </Row>
              <Row
                style={{
                  height: 50,
                  marginTop: 20,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontFamily: 'Helvetica' }}>{person.about}</Text>
              </Row>
              <Row
                style={{
                  height: 35,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    textDecorationLine: 'underline',
                    fontFamily: 'Helvetica',
                  }}
                >
                  Skills
                </Text>
              </Row>
              <Row
                style={{
                  height: 50,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontFamily: 'Helvetica' }}>{person.skills}</Text>
              </Row>
              <Row
                style={{
                  height: 35,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    textDecorationLine: 'underline',
                    fontFamily: 'Helvetica',
                  }}
                >
                  About Me
                </Text>
              </Row>
              <Row
                style={{
                  height: 180,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontFamily: 'Helvetica' }}>{person.bio}</Text>
              </Row>
              <Button bordered style={{ marginBottom: 10, marginLeft: 10 }}>
                <Text>Contact</Text>
              </Button>
            </Col>
          </Grid>
        </Container>
      </ScrollView>
    );
  }
}

export default FreelancerShow;

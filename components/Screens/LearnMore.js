import React from 'react';
import { ScrollView, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
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
  Button,
} from 'native-base';

class LearnMore extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView>
        <Container
          style={{
            //#799BEE
            //#194CFA
            alignItems: 'center',
            height: 150,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: '#799BEE',
              fontSize: 90,
              fontFamily: 'Helvetica',
              marginLeft: 10,
            }}
          >
            Join
          </Text>
          <Text
            style={{
              color: '#799BEE',
              fontSize: 15,
              fontFamily: 'Helvetica',
              marginLeft: 90,
              width: 350,
            }}
          >
            The Best Freelancers Work Everywhere.
          </Text>
        </Container>
        <Container
          style={{
            height: 400,
          }}
        >
          <Image
            style={[
              {
                height: 300,
                width: 300,
                marginTop: 75,
                marginRight: 250,
                // Color: '#a0b9f7',
                position: 'absolute',
              },
            ]}
            source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/bluecircle.png')}
          />
          <Image
            style={[
              {
                height: 50,
                width: 50,
                marginTop: 320,
                marginLeft: 270,
                // Color: '#a0b9f7',
              },
            ]}
            source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/solidcircle.png')}
          />
          <Image
            style={[
              {
                height: 400,
                width: 280,
                marginRight: 200,
                position: 'absolute',
              },
            ]}
            source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/girl.png')}
          />
        </Container>
        <Container
          style={{
            justifyContent: 'center',
            color: '#194CFA',
            height: 400,
          }}
        >
          <Card>
            <CardItem
              header
              style={{
                justifyContent: 'center',
                color: '#194CFA',
              }}
            >
              <Text
                style={{
                  color: '#052163',
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                This is freelancers first platfrom. We are a team of tech talent
                that don't want to be chained to desks. Developers have the
                right to roam around and work from anywhere. We want to help
                every developer do tha. What we care about is attracting the
                most interesting work with the highest budgets for our
                freelancers to work on. We all have to start somewhere, but for
                that reason we need the absolute best developers to keep our
                clients extremely satisfied with the work we do and coming back
                for me. We have a short application process where we want to see
                your work and get the chance to know you a little bit! If this
                sounds like you, fill out the application below and we'll get
                back to you if we think theres a fit.
              </Text>
            </CardItem>
          </Card>
        </Container>
        <Container
          style={{
            height: 100,
          }}
        >
          <Button
            block
            info
            style={{
              marginLeft: 40,
              marginBottom: 20,
              marginTop: 20,
              width: 300,
            }}
            onPress={() => this.props.navigation.navigate('Apply')}
          >
            <Text>Apply Now</Text>
          </Button>
        </Container>
      </ScrollView>
    );
  }
}

export default LearnMore;

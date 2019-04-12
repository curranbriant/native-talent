import React from 'react';
import { ScrollView, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Text, Card, CardItem, Button } from 'native-base';

class LearnMore extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView>
        <Container
          style={{
            alignItems: 'center',
            height: 150,
            marginTop: 20,
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
            height: 200,
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
                This is a freelancers first platfrom. We want to work with the
                best developers and designers to do awesome work. If you want to
                join our network of elite talent, fill out the application below
                and we'll reach out to you if we feel there's a fit.
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

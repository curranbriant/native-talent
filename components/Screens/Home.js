import React from 'react';
import { ScrollView, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Text, Card, CardItem, Button } from 'native-base';
//Color Palette Used Throughout
//#799BEE babyblue
//#194CFA darker blue
//'#a0b9f7' off white
class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView>
        <Container
          style={{
            alignItems: 'center',
            height: 120,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: '#799BEE',
              fontSize: 90,
              fontFamily: 'Helvetica',
              marginLeft: 20,
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              color: '#799BEE',
              fontSize: 15,
              fontFamily: 'Helvetica',
            }}
          >
            Hire Freelancers, Make Things Happen.
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
                height: 500,
                width: 400,
                marginTop: 195,
                marginRight: 200,
                position: 'absolute',
              },
            ]}
            source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/bluecircle.png')}
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
            source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/person.png')}
          />
        </Container>
        <Container
          style={{
            justifyContent: 'center',
            color: '#194CFA',
            height: 150,
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
                We work with top software engineers, designers, and data
                scientists to help startups, businesses, and institutions create
                digital products.
              </Text>
            </CardItem>
          </Card>
        </Container>
        <Container
          style={{
            height: 200,
          }}
        >
          <Button
            block
            info
            style={{
              marginLeft: 40,
              marginBottom: 20,
              width: 300,
            }}
            onPress={() => this.props.navigation.navigate('FreelancerList')}
          >
            <Text>Meet Our Freelancers</Text>
          </Button>
          <Button
            block
            info
            style={{
              marginLeft: 40,
              marginBottom: 20,
              width: 300,
            }}
            onPress={() => this.props.navigation.navigate('LearnMore')}
          >
            <Text>Become A Freelancer</Text>
          </Button>
          <Button
            block
            info
            style={{
              marginLeft: 40,
              marginBottom: 20,
              width: 300,
            }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text>Login/Sign-Up</Text>
          </Button>
        </Container>
      </ScrollView>
    );
  }
}

export default Home;

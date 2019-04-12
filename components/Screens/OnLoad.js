import { Text, Image, View, Button } from 'react-native';
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Onboarding from 'react-native-onboarding-swiper';

class OnLoad extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Onboarding
        showSkip={false}
        showNext={false}
        showDone={false}
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: '#f7f7f7',
            image: (
              <Image
                style={[
                  {
                    width: 250,
                    height: 400,
                  },
                ]}
                source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/standing.png')}
              />
            ),

            title: 'Hire Developers, anywhere.',
          },
          {
            backgroundColor: '#8b9dc3',
            image: (
              <Image
                style={[
                  {
                    height: 400,
                    width: 700,
                  },
                ]}
                source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/home.png')}
              />
            ),
            title: 'The Future Is Remote',
            subtitle:
              "You can't always find top talent in your backyard  we're here to help",
          },
          {
            backgroundColor: '#3b5998',
            image: (
              <Image
                style={[
                  {
                    height: 400,
                    width: 300,
                  },
                ]}
                source={require('/Users/briancurran/personalProjects/nativeProjects/freelanceApp/components/images/woman.png')}
              />
            ),
            title: (
              <Button
                rounded
                info
                title={'Go inside, have a look around (click me)'}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            ),
          },
        ]}
      />
    );
  }
}
export default OnLoad;

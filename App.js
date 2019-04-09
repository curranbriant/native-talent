import { Text, Image } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0

const OnLoad = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: '#fff',
        image: (
          <Image
            style={[
              {
                height: 400,
                width: 300,
              },
            ]}
            source={require('./images/standing.png')}
          />
        ),

        title: 'Hire Developers, anywhere.',
      },
      {
        backgroundColor: '#fe6e58',
        image: (
          <Image
            style={[
              {
                height: 400,
                width: 700,
              },
            ]}
            source={require('./images/home.png')}
          />
        ),
        title: 'The Future Is Remote',
        subtitle:
          "You can't always find top talent in your backyard  we're here to help",
      },
      {
        backgroundColor: '#999',
        image: (
          <Image
            style={[
              {
                height: 400,
                width: 300,
              },
            ]}
            source={require('./images/woman.png')}
          />
        ),
        title: 'Welcome',
        subtitle: 'Go inside, have a look around',
      },
    ]}
  />
);
export default class App extends React.Component {
  render() {
    return <OnLoad />;
  }
}

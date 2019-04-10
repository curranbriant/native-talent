import React from 'react';
import { Button, View, Text } from 'react-native';
class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Hello</Text>
      </View>
    );
  }
}
export default Home;

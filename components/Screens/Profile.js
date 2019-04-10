import React from 'react';
import { View, Button, Image } from 'react-native';
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
} from 'native-base';
class Profile extends React.Component {
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
        <Text>Hey</Text>
      </View>
    );
  }
}
export default Profile;

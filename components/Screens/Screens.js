import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import Swiper from './Swiper';

export default class Screens extends Component {
  render() {
    return (
      <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
          <Icon name='ios-nutrition' {...iconStyles} />
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>
            Good nutrition is an important part of leading a healthy lifestyle
          </Text>
        </View>
        {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <Icon name='ios-cloud-upload' {...iconStyles} />
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>
            Prayer is one of the most important things a Christian can do
          </Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <Icon name='ios-heart' {...iconStyles} />
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});

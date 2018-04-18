/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import openMap from 'react-native-open-maps';

import FetchLocation from './components/FetchLocation';
import InputSection from './components/InputSection';

export default class App extends Component<Props> {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      openMap(position)
    }, err => console.log(err));
  }


  render() {
    return (
      <View style={styles.container}>
        <InputSection/>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "left"
  },
});

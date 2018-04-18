import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import InputBox from './InputBox';

export default class InputSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>From:</Text><InputBox />
        </View>
        <View style={styles.input}>
          <Text>To:</Text><InputBox />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 20,
  },
  input: {
    flexDirection: "row",
    margin: 2,
  },
});

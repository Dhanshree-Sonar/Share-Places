import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputBox from './InputBox';

export default class InputSection extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>From:</Text><InputBox/>
        </View>
        <View>
          <Text>To:</Text><InputBox/>
        </View>
      </View>
    );
  }
}

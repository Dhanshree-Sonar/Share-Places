import React, { Component } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter Address' };
  }

  render() {
    return (
      [
        <TextInput
          style={styles.inputbox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />,
        <Button title="Get Geocode" />
      ]
    );
  }
}


const styles = StyleSheet.create({
  inputbox: {
    marginLeft: 10,
    height: 30,
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

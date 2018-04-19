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

  onGetGeocode = () => {
    console.log(this.state.text);

    url = 'https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=' +
          this.state.text + '&limit=1'
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       console.log(responseJson[0].lat);
       console.log(responseJson[0].lon);
    })
    .catch((error) => {
      console.error(error);
    });

  }

  render() {
    return (
      [
        <TextInput
          style={styles.inputbox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />,
        <Button title="Get Geocode" onPress={this.onGetGeocode} />
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

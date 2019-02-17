import React from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Home page"
  };

  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: ''
    };
  }

  render() {
 
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.setState({latitude});
        this.setState({longitude});
      },
      error => {
        console.log('error geoloc');
      }
    );

    return (
      <View>
        <Text>Home page ( {this.state.latitude}, {this.state.longitude} )</Text>
      </View>
    );
  }
}

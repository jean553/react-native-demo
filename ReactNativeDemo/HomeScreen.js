import React from 'react';
import { Image, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { UrlTile } from "react-native-maps";

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Home page"
  };

  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      region: {
        latitude: 48.86,
        longitude: 2.33,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markerImage: './assets/pin.png'
    };
  }

  onRegionChange(region) {
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
      <View style={styles.container}>
        <Text>Home page ( {this.state.latitude}, {this.state.longitude} )</Text>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
        </MapView>
        <View
          pointerEvents="none"
          style={styles.pinView}
        >
          <Image
            style={styles.pin}
            pointerEvents="none"
            source={require('./assets/pin.png')}
          />
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: 50,
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width,
    height
  },
  pinView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  pin: {
    width: 50,
    height: 50
  }
});

import React from 'react';
import { Button, Image, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { UrlTile } from "react-native-maps";

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Home page"
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: '',
        longitude: '',
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      defaultRegion: {
        latitude: '',
        longitude: '',
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.openTakePicture = this.openTakePicture.bind(this);
  }

  onRegionChangeComplete(region) {
    this.setState({ region });

    this.setState({ latitude: region.latitude });
    this.setState({ longitude: region.longitude });
  }

  openTakePicture() {

    const {navigate} = this.props.navigation;
    navigate('TakePicture');
  }

  render() {
 
    navigator.geolocation.getCurrentPosition(
      position => {
        const defaultLatitude = position.coords.latitude;
        const defaultLongitude = position.coords.longitude;

        this.setState({ defaultLatitude });
        this.setState({ defaultLongitude });

        const defaultRegion = {
          latitude: defaultLatitude,
          longitude: defaultLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        };

        this.setState({ defaultRegion });
      },
      error => {}
    );

    return (
      <View style={styles.container}>
        <Text>Default position: {this.state.defaultRegion.latitude}, {this.state.defaultRegion.longitude}</Text>
        <Text>Current position: {this.state.region.latitude}, {this.state.region.longitude}</Text>
        <MapView
          style={styles.map}
          initialRegion={this.state.defaultRegion}
          onRegionChangeComplete={this.onRegionChangeComplete}
          showsMyLocationButton={true}
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
        <Button
          onPress={this.openTakePicture}
          title="Take picture"
        />
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

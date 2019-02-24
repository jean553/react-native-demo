import React from 'react';

import {
    Button,
    Image,
    Dimensions,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import MapView, { UrlTile } from "react-native-maps";

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: "Home page"
    };

    constructor(props) {
        super(props);

        this.state = {
            initialRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            currentRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            displayMap: false
        };

        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
        this.openTakePicture = this.openTakePicture.bind(this);
        this.setInitialRegion = this.setInitialRegion.bind(this);

        navigator.geolocation.getCurrentPosition(
            this.setInitialRegion,
            error => {}
        );

    }

    setInitialRegion(position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const LATITUDE_DELTA = 0.0922;
        const LONGITUDE_DELTA = 0.0421;

        const initialRegion = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        };

        this.setState({ initialRegion });

        this.setState({ displayMap: true });
    }

    onRegionChangeComplete(currentRegion) {
        this.setState({ currentRegion });
    }

    openTakePicture() {
        const {navigate} = this.props.navigation;
        navigate('TakePicture');
    }

    render() {

        if (this.state.displayMap === false) {

            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text>Initial position: {this.state.initialRegion.latitude}, {this.state.initialRegion.longitude}</Text>
                <Text>Current position: {this.state.currentRegion.latitude}, {this.state.currentRegion.longitude}</Text>
                <MapView
                    style={styles.map}
                    initialRegion={this.state.initialRegion}
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
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 150
    }
});

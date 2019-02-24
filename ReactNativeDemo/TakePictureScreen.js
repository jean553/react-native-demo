import React from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import {
    Camera,
    Permissions
} from 'expo';

export default class TakePictureScreen extends React.Component {

    static navigationOptions = {
        title: "Take picture page"
    };

    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        };
    }

    /**
     * overwrites the React.Component method that waits
     * for the app to be allowed to access the device
     */
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {

        /* from example: https://docs.expo.io/versions/latest/sdk/camera/ */
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <Text>No access to camera</Text>;
        } else if (hasCameraPermission === false) {
            return <Text>No permission to access the camera</Text>;
        }

        return (
            <View style={styles.container}>
                <Camera style={styles.camera} type={this.state.type}>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1
    }
});

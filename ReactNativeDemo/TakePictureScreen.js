import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button,
    Alert,
    Image
} from 'react-native';

import {
    ImagePicker,
    Permissions
} from 'expo';

export default class TakePictureScreen extends React.Component {

    static navigationOptions = {
        title: "Take picture page"
    };

    constructor(props) {
        super(props);

        this.state = {
            cameraPermission: '',
            cameraRollPermission: '',
            photo: null
        };

        this.pickCamera = this.pickCamera.bind(this);
        this.displayPhoto = this.displayPhoto.bind(this);
    }

    async pickCamera() {

        const CAMERA_PERMISSIONS = Permissions.CAMERA;
        const CAMERA_ROLL_PERMISSIONS = Permissions.CAMERA_ROLL;

        const cameraPermission = await Permissions.askAsync(CAMERA_PERMISSIONS);
        const cameraRollPermission = await Permissions.askAsync(CAMERA_ROLL_PERMISSIONS);

        this.setState({ cameraPermission: cameraPermission.status });
        this.setState({ cameraRollPermission: cameraRollPermission.status });

        let photo = await ImagePicker.launchCameraAsync();
        console.log(photo.uri);

        this.setState({ photo: photo.uri });
    }

    displayPhoto() {

        if (this.state.photo === null) {
            return null;
        }

        return (
            <View>
                <Text>Your picture:</Text>
                <Image
                  style={styles.image}
                  source={{ uri: this.state.photo }}
                />
            </View>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <Button
                  onPress={this.pickCamera}
                  title="Take photo"
                />
                { this.displayPhoto() }
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
    },
    image: {
        width: 200,
        height: 400
    }
});

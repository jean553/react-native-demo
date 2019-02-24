import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import Camera from 'react-native-camera';

export default class TakePictureScreen extends React.Component {

    static navigationOptions = {
        title: "Take picture page"
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera 
                    ref={cam => { this.camera = cam; }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}
                    >Take</Text>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

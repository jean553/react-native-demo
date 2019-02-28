import React from 'react';

import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import TakePictureScreen from './TakePictureScreen';

export default class ItemsListScreen extends React.Component {

    static navigationOptions = {
        title: "Items list page"
    };

    constructor(props) {
        super(props);

        this.state = {
            enableLoader: false
        };

        this.enableLoader = this.enableLoader.bind(this);
    }

    enableLoader() {
        let enableLoader = true;
        this.setState({ enableLoader });
    }

    displayLoader() {

        if (this.enableLoader === false) {
            return;
        }

        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    onEndReached = {this.enableLoader}
                    data={[
                        { key: 'first item' },
                        { key: 'second item' },
                        { key: 'third item' },
                        { key: 'fourth item' },
                        { key: 'fifth item' },
                        { key: 'sixth item' },
                        { key: 'seventh item' },
                        { key: 'eighth item' },
                        { key: 'ninth item' },
                        { key: 'tenth item' },
                        { key: 'eleventh item' },
                        { key: 'twelfth item' },
                        { key: 'twelfth item' },
                        { key: 'twelfth item' },
                        { key: 'twelfth item' },
                        { key: 'twelfth item' },
                        { key: 'twelfth item' },
                        { key: 'twelfth item' },
                        { key: 'thirteenth item' },
                        { key: 'fourteenth item' }
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{ item.key }</Text>}
                />
                { this.displayLoader() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        margin: 20,
    }
});

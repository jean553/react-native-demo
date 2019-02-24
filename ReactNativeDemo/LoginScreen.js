import React from 'react';
import {
    StyleSheet,
    Alert,
    Button,
    TextInput,
    Text,
    View,
    Image
} from 'react-native';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: "Login page"
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.login = this.login.bind(this);
        this.displayAuthError = this.displayAuthError.bind(this);
    }

    displayAuthError() {

        Alert.alert(
            'Cannot login',
            'Error during authentication.'
        );
    }

    login() {

        fetch('https://URL/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            }),
        })
        .then(response => {

            if (response.status !== 200) {

                this.displayAuthError();
                return;
            }

            const {navigate} = this.props.navigation;
            navigate('Home');
        })
        .catch(() => {
            this.displayAuthError();
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ReactNative Demonstration app</Text>
                <Image
                  style={styles.image}
                  source={require('./assets/react.png')}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={email => this.setState({email})}
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={password => this.setState({password})}
                  autoCapitalize="none"
                />
                <Button
                  onPress={this.login}
                  title="Login"
                />
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
    },
    textInput: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 40,
        width: 200
    },
    image: {
        width: 100,
        height: 100
    }
});

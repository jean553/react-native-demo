import React from 'react';
import {
    StyleSheet,
    Alert,
    Button,
    TextInput,
    Text,
    View,
    ImageBackground,
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
        this.register = this.register.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
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
                eturn;
            }

            const {navigate} = this.props.navigation;
            navigate('Home');
        })
        .catch(() => {
            this.displayAuthError();
        });
    }

    register() {

        const {navigate} = this.props.navigation;
        navigate('Register');
    }

    forgotPassword() {

        /* TODO */
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/react.png')}
                    style={styles.background}
                >
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>ReactNative Demonstration app</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={email => this.setState({email})}
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})}
                            autoCapitalize="none"
                        />
                        <View style={styles.buttonsGroup}>
                            <View style={styles.button}>
                                <Button
                                    onPress={this.register}
                                    buttonStyle={styles.button}
                                    title="Register"
                                />
                            </View>
                            <View style={styles.button}>
                                <Button
                                    onPress={this.login}
                                    buttonStyle={styles.button}
                                    title="Login"
                                />
                            </View>
                        </View>
                        <Text onPress={this.forgotPassword}>Forgot password</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    title: { fontSize: 24 },
    wrapper: {
        marginTop: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        width: '100%',
        height: '100%'
    },
    input: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        margin: 10,
        height: 40,
        width: 200,
        backgroundColor: '#fff'
    },
    buttonsGroup: {
        alignContent: 'space-between',
        flexDirection: 'row'
    },
    button: { margin: 5 }
});

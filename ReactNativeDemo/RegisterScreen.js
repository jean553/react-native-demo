import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    CheckBox,
    ImageBackground,
    Picker
} from 'react-native';

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        title: "Register page"
    };

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            birthYear: '',
            conditionsAccepted: false
        };

        this.back = this.back.bind(this);
        this.register = this.register.bind(this);
    }

    back() {

        const {navigate} = this.props.navigation;
        navigate('Login');
    }

    register() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/react.png')}
                    style={styles.background}
                >
                    <Text>Firstname:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Firstname"
                        onChangeText={firstname => this.setState({firstname})}
                    />

                    <Text>Lastname:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Lastname"
                        onChangeText={lastname => this.setState({lastname})}
                    />

                    <Text>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                        autoCapitalize="none"
                    />

                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        autoCapitalize="none"
                    />

                    <Text>Confirm password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm password"
                        secureTextEntry={true}
                        onChangeText={passwordConfirmation => this.setState({passwordConfirmation})}
                        autoCapitalize="none"
                    />

                    <Text>Birth year:</Text>
                    <Picker
                        selectedValue={this.state.birthYear}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({birthYear: itemValue})
                        }
                    >
                        <Picker.Item label="2010" value="2010" />
                        <Picker.Item label="2009" value="2009" />
                        <Picker.Item label="2008" value="2008" />
                        <Picker.Item label="2007" value="2007" />
                    </Picker>

                    <Text>Gender:</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({gender: itemValue})
                        }
                    >
                        <Picker.Item label="Man" value="Man" />
                        <Picker.Item label="Woman" value="Woman" />
                    </Picker>

                    <View style={styles.conditions}>
                        <CheckBox
                            value={this.state.conditionsAccepted}
                            onValueChange={() => this.setState({ conditionsAccepted: !this.state.conditionsAccepted })}
                        />
                        <Text>I accept conditions</Text>
                    </View>

                    <View style={styles.buttonsGroup}>
                        <View style={styles.button}>
                            <Button
                                onPress={this.back}
                                buttonStyle={styles.button}
                                title="Back"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                onPress={this.register}
                                buttonStyle={styles.button}
                                title="Register"
                            />
                        </View>
                    </View>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    background: {
        width: '100%',
        height: '100%'
    },
    buttonsGroup: {
        alignContent: 'space-between',
        flexDirection: 'row'
    },
    button: { margin: 5 },
    picker: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#fff',
        height: 50,
        margin: 10
    },
    input: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        backgroundColor: '#fff'
    },
    conditions: {
        alignContent: 'space-between',
        flexDirection: 'row',
    }
});

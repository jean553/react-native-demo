import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    CheckBox,
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
                <View style={styles.field}>
                    <Text>Firstname:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Firstname"
                        onChangeText={firstname => this.setState({firstname})}
                    />
                </View>

                <View style={styles.field}>
                   <Text>Lastname:</Text>
                   <TextInput
                       style={styles.textInput}
                       placeholder="Lastname"
                       onChangeText={lastname => this.setState({lastname})}
                   />
                </View>

                <View style={styles.field}>
                   <Text>Email:</Text>
                   <TextInput
                       style={styles.textInput}
                       placeholder="Email"
                       keyboardType="email-address"
                       onChangeText={email => this.setState({email})}
                       autoCapitalize="none"
                   />
                </View>

                <View style={styles.field}>
                   <Text>Password:</Text>
                   <TextInput
                       style={styles.textInput}
                       placeholder="Password"
                       secureTextEntry={true}
                       onChangeText={password => this.setState({password})}
                       autoCapitalize="none"
                   />
                </View>

                <View style={styles.field}>
                   <Text>Confirm password:</Text>
                   <TextInput
                       style={styles.textInput}
                       placeholder="Confirm password"
                       secureTextEntry={true}
                       onChangeText={passwordConfirmation => this.setState({passwordConfirmation})}
                       autoCapitalize="none"
                   />
                </View>

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

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    field: {
        alignContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
    },
    buttonsGroup: {
        alignContent: 'space-between',
        flexDirection: 'row'
    },
    button: { margin: 5 },
    picker: {
        width: '100%',
        height: 50
    },
    conditions: {
        alignContent: 'space-between',
        flexDirection: 'row',
    }
});

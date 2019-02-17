import React from 'react';
import { StyleSheet, Alert, Button, TextInput, Text, View } from 'react-native';

export default class LoginScreen extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          email: '',
          password: ''
      };

      this.login = this.login.bind(this);
  }

  login() {

    fetch('https://dev.tell-my-city.com/token', {
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
        const {navigate} = this.props.navigation;
        navigate('Home');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TMC</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Email"
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
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
});

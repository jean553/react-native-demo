import React from 'react';
import { View, StyleSheet } from 'react-native';

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

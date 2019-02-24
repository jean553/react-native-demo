import React from 'react';

import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import TakePictureScreen from './TakePictureScreen';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    TakePicture: {screen: TakePictureScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

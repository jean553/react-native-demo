import React from 'react';

import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import TakePictureScreen from './TakePictureScreen';

const MainNavigator = createStackNavigator(
    {
        DrawerNavigator: {screen: DrawerNavigator},
        Login: {screen: LoginScreen},
        Home: {screen: HomeScreen},
        TakePicture: {screen: TakePictureScreen}
    },
    navigationOptions = {
        headerMode: 'none'
    }
);


const App = createAppContainer(MainNavigator);

export default App; 

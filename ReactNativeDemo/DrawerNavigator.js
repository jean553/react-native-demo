import React from 'react';

import {
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image
} from 'react-native'; 

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import TakePictureScreen from './TakePictureScreen';
import ItemsListScreen from './ItemsListScreen';

const CustomDrawerComponent = (props) => (
    <SafeAreaView>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView> 
)

export default createDrawerNavigator(
    {
        LoginMenuItem: {
            screen: LoginScreen,
            navigationOptions: {
              drawerLabel: 'Login',
            }
        },
        HomeMenuItem: {
            screen: HomeScreen,
            navigationOptions: {
              drawerLabel: 'Home',
            }
        },
        TakePictureMenuItem: {
            screen: TakePictureScreen,
            navigationOptions: {
              drawerLabel: 'TakePicture',
            }
        },
        ItemsListScreenItem: {
            screen: ItemsListScreen,
            navigationOptions: {
              drawerLabel: 'List items',
            }
        },
    },
    {
        drawerPosition: 'left'
    }
);

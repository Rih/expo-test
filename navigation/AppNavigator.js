import React, { Component } from 'react'
import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen'
import PolicyScreen from '../screens/PolicyScreen'

const defaultNavOptions = {
    headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: 'white',
        shadowColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTitleStyle: {
        fontWeight: '400'
    },
    headerTintColor: '#424242'
}

const LoginNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },

        Policy: PolicyScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
)

const MainNavigator = createSwitchNavigator(
    {
        Login: LoginNavigator
    }
)

export default createAppContainer(MainNavigator)
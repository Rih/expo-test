import React, { Component, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AppNavigator from './AppNavigator'

const NavigationContainer = (props) => {

    const navRef = useRef();
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (isAuth) {
            navRef.current.dispatch(
                NavigationActions.navigate({ routeName: 'Policy' })
            )
        } else {
            navRef.current.dispatch(
                NavigationActions.navigate({ routeName: 'Login' })
            )
        }
    }, [isAuth]);

    return <AppNavigator ref={navRef} />
}

export default NavigationContainer;
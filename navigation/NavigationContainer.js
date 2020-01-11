import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AppNavigator from './AppNavigator'

const NavigationContainer = (props) => {
    const navRef = useRef()
    const isAuth = useSelector( state => true)
    useEffect(() => {
        if (!isAuth){
            navRef.current.dispatch(
                NavigationActions.navigate({ routeName: 'Mapa' })
            )
        }
    }, [isAuth])
    return <AppNavigator ref={navRef} />
}

export default NavigationContainer
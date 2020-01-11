import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import * as authActions from '../store/actions/auth';
import { useDispatch } from 'react-redux';



const PolicyScreen = props => {

    const dispatch = useDispatch();

    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.title}>
                    POLICYYYYYY
                </Text>
                <Text style={styles.paragraph}>
                    Login qlo
                </Text>

            </View>

            <Button
                title="Login me"
                onPress={() => dispatch(authActions.login())}>
            </Button>

        </ScrollView>
    )
}

PolicyScreen.navigationOption = {
    headerTitle: 'Login'
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 5
    },
    title: {
        fontSize: 18

    },
    paragraph: {
        fontSize: 14
    }
}

export default PolicyScreen
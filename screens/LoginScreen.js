import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const PolicyScreen = props => {
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

        </ScrollView>
    )
}

PolicyScreen.navigationOption= {
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
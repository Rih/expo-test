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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra cursus mauris. Maecenas sit amet diam in diam consequat scelerisque. Sed nisi dui, aliquam vel ipsum vitae, accumsan tincidunt tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut risus ut ante condimentum laoreet at vitae arcu. Nunc auctor, velit sed eleifend luctus, ligula magna vehicula metus, eget vestibulum ipsum tortor sed erat. Fusce nec ex sodales, pretium dolor ut, aliquam urna. Vivamus vestibulum mi eget justo tristique, eu convallis orci sagittis. Donec vitae interdum ligula. Sed vitae ex sed nibh fermentum vestibulum. Donec rhoncus augue orci, nec lobortis massa tincidunt vitae. Fusce ultricies enim turpis, sit amet ullamcorper lectus pretium at. Etiam a iaculis leo.
                </Text>
                <Text style={styles.paragraph}>
                    Praesent maximus justo a blandit efficitur. Proin euismod sagittis lacus, et mattis nunc dignissim sit amet. Nullam quam ex, dictum sed malesuada sed, dignissim quis ante. Nam ac ultricies elit. Vivamus non malesuada eros. Aliquam vulputate erat eget elit aliquet placerat. Mauris rhoncus dolor et ipsum cursus facilisis. Quisque id dapibus sem. Cras ultrices dolor ac neque sodales facilisis. Proin ut tellus in est volutpat accumsan in eget sapien. Fusce urna orci, rhoncus non turpis ac, varius tempor massa. Phasellus eu fermentum sapien, id pretium libero. Vivamus finibus efficitur rhoncus. Etiam viverra odio nec sapien elementum, et mattis ex facilisis.
                </Text>
            </View>

        </ScrollView>
    )
}

PolicyScreen.navigationOption= {
    headerTitle: 'Politicas'
}

const styles = StyleSheet.create({
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
})

export default PolicyScreen
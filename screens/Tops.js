import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Tops extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Tops </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

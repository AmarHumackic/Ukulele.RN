import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default class FreshTabs extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Fresh Tabs',
            headerLeft: <Ionicons style={{ paddingLeft: 10 }} name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                size={25} color={Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor}
                onPress={() => navigation.toggleDrawer()}></Ionicons>,
            headerRight: (
                <View style={{ flexDirection: 'row', paddingRight: 10 }}>

                    <Ionicons style={{ paddingRight: 20 }} name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
                        size={25} color={Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor}
                        onPress={() => console.log('pressed')}></Ionicons>
                    <Ionicons style={{ }} name={Platform.OS === 'android' ? 'md-shuffle' : 'ios-shuffle'}
                        size={25} color={Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor}
                        onPress={() => console.log('pressed')}></Ionicons>
                </View>
            )
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> FreshTabs </Text>
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

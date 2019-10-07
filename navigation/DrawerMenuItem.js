import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform, View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const DrawerMenuItem = (props) => {
    const { iconName, onPress, name, dropdown, divider } = props;

    const TouchableCmp = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
    const background = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback.Ripple('white') : null;

    return (
        <TouchableCmp background={background} onPress={onPress}>
            <View style={[styles.itemContainer, divider ? styles.dividerLine : null]}>
                <View style={styles.itemColumn}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-' + iconName : 'ios-' + iconName}
                        size={25} color={'white'} />
                </View>
                <View style={styles.itemColumn}>
                    <Text style={styles.itemText}>{name}</Text>
                </View>
                {dropdown ? (
                    <View style={[styles.itemColumn, { position: 'absolute', right: 20, top: 10 }]}>
                        <Ionicons name={Platform.OS === 'android' ? 'md-arrow-dropdown' : 'ios-arrow-dropdown'}
                            size={25} color={'white'} />
                    </View>
                ) : null}

            </View>
        </TouchableCmp>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        height: 45,
        paddingLeft: 16
    },
    itemColumn: {
        justifyContent: 'center',
    },
    itemText: {
        paddingLeft: 20,
        color: 'white'
    },
    sectionText: {
        paddingLeft: 10,
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    dividerLine: {
        borderBottomColor: '#bbbfbf',
        borderBottomWidth: 0.5
    }
});

export default DrawerMenuItem;
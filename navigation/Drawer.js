import React, { Component } from 'react';
import {
    View, Text, TouchableHighlight, StyleSheet, SafeAreaView, ScrollView,
    TouchableOpacity, TouchableNativeFeedback, Platform, Fragment
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class Drawer extends Component {
    state = {
        expanded: false
    }

    render() {
        let TouchableCmp = TouchableOpacity;

        if (Platform.OS === 'android' && Platform.Version >= 21) {
            TouchableCmp = TouchableNativeFeedback;
        }
        return (
            <SafeAreaView style={styles.parent}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.mainText}>YOU ARE NOT LOGGED IN!</Text>
                        <View>
                            <Text style={styles.text}>Sync. your songbook across devices</Text>
                            <Text style={styles.text}>and much more:</Text>
                        </View>
                        <View style={styles.headerButtonContainer}>
                            <TouchableOpacity style={styles.loginButton} onPress={() => alert('Login pressed')}>
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.signupButton} onPress={() => alert('Signup pressed')}>
                                <Text style={styles.buttonText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableNativeFeedback>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemColumn}>
                                <Ionicons name={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}
                                    size={25} color={'white'} />
                            </View>
                            <View style={styles.itemColumn}>
                                <Text style={styles.itemText}>Fresh Tabs</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemColumn}>
                                <Ionicons name={Platform.OS === 'android' ? 'md-bonfire' : 'ios-bonfire'}
                                    size={25} color={'white'} />
                            </View>
                            <View style={styles.itemColumn}>
                                <Text style={styles.itemText}>Tops</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableOpacity style={styles.itemContainer} onPress={() => this.setState({ expanded: !this.state.expanded })}>
                        <View style={styles.itemColumn}>
                            <Ionicons name={Platform.OS === 'android' ? 'md-locate' : 'ios-locate'}
                                size={25} color={'white'} />
                        </View>
                        <View style={styles.itemColumn}>
                            <Text style={styles.itemText}>Filter Tabs By...</Text>
                        </View>
                    </TouchableOpacity>
                    {this.state.expanded ? (
                        <View>
                            <TouchableOpacity style={{ paddingLeft: 40, height: 30 }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.itemText}>Country</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingLeft: 40, height: 30 }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.itemText}>Genre</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingLeft: 40, height: 30 }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.itemText}>Difficulty</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                    <TouchableOpacity style={styles.itemContainer} onPress={() => this.setState({ expanded: !this.state.expanded })}>
                        <View style={styles.itemColumn}>
                            <Ionicons name={Platform.OS === 'android' ? 'md-time' : 'ios-time'}
                                size={25} color={'white'} />
                        </View>
                        <View style={styles.itemColumn}>
                            <Text style={styles.itemText}>History</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        // alignItems: 'center,
        backgroundColor: '#1c1d1f'
    },
    headerContainer: {
        width: '100%',
        height: 200,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: 'space-between'
    },
    mainText: {
        fontSize: 18,
        color: 'white',
        paddingTop: 10
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    headerButtonContainer: {
        flexDirection: 'row',
        paddingBottom: 15,
        width: '100%'
    },
    loginButton: {
        width: '45%',
        backgroundColor: '#3d7bff',
        marginHorizontal: '2%',
        borderRadius: 8
    },
    signupButton: {
        width: '45%',
        backgroundColor: '#ffdd1f',
        marginHorizontal: '2%',
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        padding: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        height: 45,
        paddingLeft: 16
    },
    itemColumn: {
        justifyContent: 'center'
    },
    itemText: {
        paddingLeft: 20,
        color: 'white'
    },




    touchableHighlightStyle: {
        height: 48,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        paddingLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    textStyle: {
        height: 48,
        alignSelf: 'stretch',
        alignItems: 'center',
        textAlignVertical: 'center',
        color: 'white'
    },
    headingTextStyle: {
        fontSize: 20,
        height: 48,
        fontWeight: 'bold',
        paddingTop: 12,
        backgroundColor: 'green',
        alignSelf: 'stretch',
        paddingStart: 16
    }

});

const DrawerMenuItem = (props) => {

    const { iconName, iconType, text, onPress } = props;

    return (
        <TouchableHighlight style={styles.touchableHighlightStyle}
            onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <Icon
                    name={iconName}
                    type={iconType}
                    iconStyle={{ paddingRight: 16 }}
                /> */}
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

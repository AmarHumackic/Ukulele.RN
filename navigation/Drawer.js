import React, { Component } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, ScrollView,
    TouchableOpacity, TouchableNativeFeedback, Platform, Image, Linking
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import DrawerMenuItem from './DrawerMenuItem';

export default class Drawer extends Component {
    state = {
        expanded: false
    }
    componentDidMount() {
        console.log(this.props.items);
    }

    navigateTo = (routeName) => {
        this.props.navigation.navigate(routeName);
        this.props.navigation.closeDrawer();
    }

    render() {
        const TouchableCmp = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
        const background = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback.Ripple('white') : null;

        return (
            <SafeAreaView style={styles.parent}>
                <ScrollView keyboardShouldPersistTaps='always'>
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
                    <DrawerMenuItem iconName='calendar' onPress={() => this.navigateTo(this.props.items[0].routeName)} name='Fresh Tabs' />
                    <DrawerMenuItem iconName='bonfire' onPress={() => this.navigateTo(this.props.items[1].routeName)} name='Tops' />
                    <DrawerMenuItem iconName='locate' onPress={() => {
                        this.setState({ expanded: !this.state.expanded });
                    }} name='Filter Tabs By...' dropdown expandedIcon={this.state.expanded ? 'arrow-dropup' : 'arrow-dropdown'} />
                    {this.state.expanded ? (
                        <View>
                            <TouchableCmp background={background} style={{ width: '100%', height: 30 }}>
                                <View style={[styles.itemColumn, { paddingLeft: 40, paddingVertical: 5 }]}>
                                    <Text style={styles.itemText}>Country</Text>
                                </View>
                            </TouchableCmp>
                            <TouchableCmp background={background} style={{ width: '100%', height: 30 }}>
                                <View style={[styles.itemColumn, { paddingLeft: 40, paddingVertical: 5 }]}>
                                    <Text style={styles.itemText}>Genre</Text>
                                </View>
                            </TouchableCmp>
                            <TouchableCmp background={background} style={{ width: '100%', height: 30 }}>
                                <View style={[styles.itemColumn, { paddingLeft: 40, paddingVertical: 5 }]}>
                                    <Text style={styles.itemText}>Difficulty</Text>
                                </View>
                            </TouchableCmp>
                        </View>
                    ) : null}
                    <DrawerMenuItem iconName='time' onPress={() => this.navigateTo(this.props.items[2].routeName)} name='History' />
                    <Text style={styles.sectionText}>My Lists</Text>
                    <DrawerMenuItem iconName='bookmarks' onPress={() => console.log('pressed')} name='Songbook' />
                    <DrawerMenuItem iconName='star' onPress={() => console.log('pressed')} name='Favorite Artists' />
                    <Text style={styles.sectionText}>Extras</Text>
                    <DrawerMenuItem iconName='musical-notes' onPress={() => console.log('pressed')} name='Strumming Patterns' />
                    <DrawerMenuItem iconName='grid' onPress={() => console.log('pressed')} name='Chord Charts' />
                    <DrawerMenuItem iconName='resize' onPress={() => console.log('pressed')} name='Tuner' divider />
                    <Text style={[styles.sectionText, { paddingTop: 10 }]}>Other</Text>
                    <DrawerMenuItem iconName='remove-circle' onPress={() => console.log('pressed')} name='Remove circle' />
                    <DrawerMenuItem iconName='settings' onPress={() => console.log('pressed')} name='Settings' />
                    <DrawerMenuItem iconName='send' onPress={() => console.log('pressed')} name='Feedback and Support' />
                    <DrawerMenuItem iconName='information-circle' onPress={() => console.log('pressed')} name='About' />
                    <TouchableCmp onPress={() => Linking.openURL('https://www.spotify.com/')}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.footerText}>Artist images and album covers powered by</Text>
                            <View style={styles.logoContainer}>
                                <Image source={require('../assets/spotify.jpeg')} style={styles.logo} />
                            </View>
                        </View>
                    </TouchableCmp>
                    <Text style={[styles.footerText, { paddingTop: 20 }]}>version 4.2.1-68</Text>
                </ScrollView>
            </SafeAreaView>
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
        paddingTop: Platform.OS === 'ios' ? 10 : 20,
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
        justifyContent: 'center',
        width: '100%'
    },
    loginButton: {
        width: '45%',
        backgroundColor: '#3d7bff',
        marginRight: '2%',
        borderRadius: 8
    },
    signupButton: {
        width: '45%',
        backgroundColor: '#ffdd1f',
        marginLeft: '2%',
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
    },
    footerText: {
        paddingTop: 15,
        textAlign: 'center',
        color: '#567e85',
        fontSize: 10
    },
    logoContainer: {
        paddingTop: 10,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30
    }

});
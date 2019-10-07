import React, { useState } from 'react';
import { Text, AsyncStorage, SafeAreaView, View, Image, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Drawer from '../navigation/Drawer';

import { Ionicons } from '@expo/vector-icons';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppLoading } from 'expo';

import Colors from '../constants/Colors';
import FreshTabsScreen from '../screens/FreshTabs';
import HistoryScreen from '../screens/History';
import RandomScreen from '../screens/Random';
import TopsScreen from '../screens/Tops';


const Navigation = props => {
    return (
        <AppContainer ></AppContainer>
    );
}

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
};

const FreshTabsNavigator = createStackNavigator(
    {
        FreshTabs: { screen: FreshTabsScreen },
        History: { screen: HistoryScreen },
        Tops: { screen: TopsScreen }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const LovedTracksNavigator = createStackNavigator(
    {
        FreshTabs: { screen: FreshTabsScreen },
        History: { screen: HistoryScreen }
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const CountryLovedTabNavigator = createBottomTabNavigator(
    {
        FreshTabs: {
            screen: FreshTabsScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons name={Platform.OS === 'android' ? 'md-musical-notes' : 'ios-musical-notes'}
                            size={25} color={tabInfo.tintColor} />
                    );
                },
                tabBarLabel: 'FT'
            }
        },
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons name={Platform.OS === 'android' ? 'md-heart' : 'ios-heart'}
                            size={25} color={tabInfo.tintColor} />
                    );
                },
                tabBarLabel: 'HI'
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor,
            inactiveTintColor: Colors.secondaryColor,
            style: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
        }
    }
);

const LoginNavigator = createStackNavigator(
    {
        FreshTabs: FreshTabsScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNavigator = createDrawerNavigator(
    {
        FreshTabs: {
            screen: FreshTabsNavigator,
            navigationOptions: {
                drawerLabel: 'Music Service',
                drawerIcon: () => (
                    <Ionicons name={Platform.OS === 'android' ? 'md-musical-notes' : 'ios-musical-notes'} size={25}></Ionicons>
                )
            }
        },
        Random: {
            screen: RandomScreen,
            navigationOptions: {
                drawerLabel: 'Login',
                drawerIcon: () => (
                    <Ionicons name={Platform.OS === 'android' ? 'md-log-in' : 'ios-log-in'} size={25}></Ionicons>
                )
            }
        },
        Tops: {
            screen: CountryLovedTabNavigator,
            params: { temp: 1 },
            navigationOptions: {
                drawerLabel: 'Logout',
                drawerIcon: () => (
                    <Ionicons name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'} size={25}></Ionicons>
                )
            }
        }
    },
    {
        contentComponent: (props) => {
            return (
                <Drawer {...props} />
            )
        }
        // contentComponent: (props) => {
        //     // var copyprops = Object.assign({}, props);
        //     // if (props.screenProps.username) {
        //     //     copyprops.items = copyprops.items.filter(item => item.key !== 'Login')
        //     // } else {
        //     //     copyprops.items = copyprops.items.filter(item => item.key !== 'Logout')
        //     // }

        //     return (
        //         <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        //             {/* <View style={{ flexDirection: 'column' }}>
        //                 <View style={{ alignItems: 'center' }}>
        //                     <Image style={{ width: '100%', height: 150 }} source={Logo} />
        //                 </View>

        //             </View> */}
        //             <DrawerItems {...props}
        //                 activeTintColor={Colors.primaryColor} activeBackgroundColor={Colors.primaryColorLight}
        //                 inactiveTintColor={Colors.primaryColor} inactiveBackgroundColor='white'
        //                 labelStyle={{ color: Colors.primaryColor, fontSize: 16 }} />
        //         </SafeAreaView>
        //     );
        // }
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default Navigation;
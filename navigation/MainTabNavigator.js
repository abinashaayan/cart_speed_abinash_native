// navigation/MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Certificate from '../screens/Certificate';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    lexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: '#FF1515',
                    paddingVertical: 14,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />, }} />
            <Tab.Screen name="Certificate" component={Certificate} options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="key" size={20} color={color} />, }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color }) => <FontAwesome5 name="user" size={20} color={color} />, }} />
        </Tab.Navigator>
    );
}

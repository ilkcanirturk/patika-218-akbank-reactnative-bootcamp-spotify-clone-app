import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomNav = createBottomTabNavigator();

const BottomNavigation = () => {
  


  return (
    <BottomNav.Navigator
      
      screenOptions={{
        // Config of the Bottom Tab Navigation
        tabBarStyle: {height: 90, backgroundColor: 'black', borderTopWidth: 1.5, borderTopColor: '#19ac68'}, 
       
      }}>
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Home',
          headerBackVisible: false,
          headerStyle: {backgroundColor: '#19ac68'},
          headerTitleStyle: {color: "white"},
          headerTitleAlign: 'center',
          //Tab Bar configurations.
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-home'
                    : 'ios-home-outline'
                }
                size={30}
                color={tabInfo.focused ? '#19ac68' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#19ac68',
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Search',
          headerBackVisible: false,
          headerStyle: {backgroundColor: '#19ac68'},
          headerTitleStyle: {color: "white"},
          headerTitleAlign: 'center',
          
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-search'
                    : 'ios-search-outline'
                }
                size={30}
                color={tabInfo.focused ? '#19ac68' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#19ac68',
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          // headerShown: true,
          // headerTitle: 'Profile',
          // headerBackVisible: false,
          // headerStyle: {backgroundColor: '#19ac68'},
          // headerTitleStyle: {color: "white"},
          // headerTitleAlign: 'center',
          
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-person-circle'
                    : 'ios-person-circle-outline'
                }
                size={30}
                color={tabInfo.focused ? '#19ac68' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#19ac68',
        }}
      />
    </BottomNav.Navigator>
  )
}

export default BottomNavigation


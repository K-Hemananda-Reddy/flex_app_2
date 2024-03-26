import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import MapScreen from '../Screens/MapScreen';
import AlarmScreen from '../Screens/AlarmScreen';
import QRScreen from '../Screens/QRScreen';
import SoundScreen from '../Screens/SoundScreen'
import NotificationScreen from '../Screens/NotificationScreen';
import TestMapScreen from '../Screens/TestMapScreen'


export default function Navigation() {
  return (
    
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Maps' component={MapScreen}/>
        <Stack.Screen name="Cluster" component={TestMapScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Sound' component={SoundScreen}/>
        <Stack.Screen name='QR' component={QRScreen}/>
        <Stack.Screen name='Alarm' component={AlarmScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Favourite' component={FavouriteScreen}/>
        <Stack.Screen name='Notification' component={NotificationScreen}/>
        
      
        {/* <Stack.Screen name='Search' component={SearchScreen}/> */}
      </Stack.Navigator>
   
  )
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import MapScreen from '../Screens/MapScreen';



export default function Navigation() {
  return (
    
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Maps' component={MapScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Favourite' component={FavouriteScreen}/>
        {/* <Stack.Screen name='Search' component={SearchScreen}/> */}
      </Stack.Navigator>
   
  )
}
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
// import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Screens/SignUpScreen';
import * as SecureStore from "expo-secure-store";
// import TabNavigation from './Navigations/TabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import FavouriteScreen from './Screens/FavouriteScreen';
import ProfileScreen from './Screens/ProfileScreen';

import Navigation from './Navigations/TabNavigation';
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { UserLocationContext } from './Context/UserLocationContext';
import messaging from '@react-native-firebase/messaging'

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};



export default function App() {

  // const requestUserPermission=async()=>{
  //   const authStatus = await messaging().requestPermission();
  // const enabled =
  //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled) {
  //   console.log('Authorization status:', authStatus);
  // }
  // }
 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      // console.log(location)
    })();
  }, []);

  // useEffect(()=>{
  //   if(requestUserPermission()){
  //     messaging().getToken().then(token=>{
  //       console.log(token)
  //     })
  //   }
  //   else{
  //     console.log("Failed token status",authStatus)
  //   }

  //   messaging().getInitialNotification().then(async remoteMessage=>{
  //     if(remoteMessage){
  //       console.log('Notification caused app to open from quit state:',remoteMessage.notification,)
  //     }
  //   })

  //   messaging().onNotificationOpenedApp(async remoteMessage=>{
  //     console.log('Notification caused app to open from quit state:',remoteMessage.notification,)
  //   })
  //   messaging().setBackgroundMessageHandler(async remoteMessage=>{
  //     console.log('Message handled in the background!',remoteMessage)
  //   })

  //   const unsubscribe=messaging().onMessage(async remoteMessage=>{
  //     Alert.alert('A New FCM message arrived!',JSON.stringify(remoteMessage))
  //   })
  //   return unsubscribe;

  // },[])


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    
    
    <ClerkProvider
    // tokenCache={tokenCache}
    publishableKey={'pk_test_d2lubmluZy1naXJhZmZlLTE3LmNsZXJrLmFjY291bnRzLmRldiQ'}
    
    >
      <UserLocationContext.Provider value={{location,setLocation}}>

    <SafeAreaView >
    <SignedIn>
      <View className='h-full'>

      <NavigationContainer>

          <Navigation/>
      </NavigationContainer>
      </View>
        </SignedIn>
        <SignedOut>
       <SignUpScreen/>
      
        </SignedOut>
      <StatusBar style="auto" />
    </SafeAreaView>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}


          



import { View, Text } from 'react-native'
import React from 'react'
import {useAuth} from '@clerk/clerk-expo'
import { useNavigation } from '@react-navigation/native'

export default function Tabs() {
  const {signOut}=useAuth();
  const navigation=useNavigation()
    
  return (
    <View className="text-center space-y-2 my-3">
      <Text onPress={()=>{navigation.navigate('Profile')}} className="text-center p-3 shadow-sm bg-blue-500 rounded-lg text-white  mx-4">Profile</Text>
      <Text onPress={()=>{navigation.navigate('QR')}} className="text-center p-3 shadow-sm bg-blue-500 rounded-lg text-white  mx-4">Register Device</Text>
      <Text className="text-center p-3 shadow-sm bg-blue-500 rounded-lg text-white  mx-4">Update Emergency Contacts</Text>
      {/* <Text className="text-center p-3 shadow-sm bg-blue-500 rounded-lg text-white  mx-4">Update Emergency Contacts</Text> */}
      <Text onPress={()=>{navigation.navigate('Cluster')}} className="text-center p-3 shadow-sm bg-blue-500 rounded-lg text-white  mx-4">Accident Prone Areas</Text>
      <Text onPress={signOut} className="text-center p-3 shadow-sm bg-red-500 rounded-lg text-white  mx-4">Logout</Text>
    </View>
  )
}


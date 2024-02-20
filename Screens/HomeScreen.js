import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation=useNavigation()
  return (
    <View className="items-center justify-center h-full ">
            <View className='space-y-3 items-center'>

            <Text onPress={()=>{navigation.navigate('Maps')}}  className="text-white bg-black p-5 rounded-lg font-bold">Home</Text>
            
            <Text onPress={()=>{navigation.navigate('Profile')}} className="text-white bg-black p-5 rounded-lg font-bold">profile</Text>
            {/* <Text onPress={()=>{navigation.navigate('Favourite')}} className="text-white bg-black p-5 rounded-lg font-bold">Favourite</Text> */}
            </View>
      </View>
  );
}

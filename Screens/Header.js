import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View className="h-[70px] bg-black items-center justify-between px-4 flex-row space-x-4 ">
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>

        <View  className="bg-white rounded-full">

        <Image
        source={require('../assets/profile-user.png')}
        style={{height:40,width:40}}
        />
        </View>
        </TouchableOpacity>
<Text className="text-white font-bold text-lg tracking-widest">Flex App</Text>
<TouchableOpacity onPress={()=>{setToggle(!toggle)}} className="border border-1 rounded-full border-white">
  {/* <Text  className="text-white bg-red-500 font-bold p-2 rounded-lg">SignOut</Text> */}
  <Image 
  source={require('../assets/lines.png')}
  style={{height:40,width:40}}
  />
  
</TouchableOpacity>


      </View>
  )
}
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
// import clerkClient from '@clerk/clerk-sdk-node';
// import { clerkClient } from "@clerk/fastify";
import {useAuth} from '@clerk/clerk-expo'
 
export default function UseUserExample() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [number,setNumber]=useState()
  const {signOut}=useAuth()
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }



  const updateUser = async () => {
    try{
      console.log(number)
      await user.createPhoneNumber({phoneNumber:number})
      user.reload()
      console.log("done")
      signOut()
  }
    catch(err){
      console.log(err)
    }
  };
  
//  console.log(user.phoneNumbers)
  return (
    <View className='h-full justify-center items-center space-y-5 mx-5'>
      {/* <Text>{user.imageUrl}</Text> */}
      <Image
      source={{uri:user.imageUrl}}
      style={{height:100,width:100}}

      />
      <Text> Welcome {user.fullName} </Text>
      {user.phoneNumbers[0]?.phoneNumber ? <Text>{user.phoneNumbers[0].phoneNumber}</Text> :
      <View>

      <TextInput className='p-5 rounded-xl border-blue-400 border-4 text-center' placeholder="enter phone number" value={number} onChangeText={setNumber}/>
      <TouchableOpacity onPress={updateUser}  ><Text className='text-center font-bold bg-black text-white p-5'>Submit</Text></TouchableOpacity>
      </View>}
    </View>
  );
}
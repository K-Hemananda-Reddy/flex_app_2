import React, { useContext, useEffect, useState } from 'react';
import MapView, { MarkerAnimated } from 'react-native-maps';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserLocationContext } from '../Context/UserLocationContext';
import MapViewStyle from '../utils/MapViewStyle.json'
import { useUser } from "@clerk/clerk-expo";
import {useAuth} from '@clerk/clerk-expo'
import { useNavigation } from '@react-navigation/native'
import Tabs from './Tabs';
import Header from './Header';
import axios from 'axios'

export default function App() {
  const {location,setLocation}=useContext(UserLocationContext)
  const { isLoaded, isSignedIn, user } = useUser();
  const [toggle,setToggle]=useState(false);
  const {signOut}=useAuth()
  const [points,setPoints]=useState([]);
  const navigation=useNavigation()

  useEffect(async()=>{
    const res=await getData();
    setPoints(res)
  },[])

  const getData=async()=>{
    const res=await axios.get("https://flex-cap-8mgfneh69-k-hemananda-reddy.vercel.app/api/accidents")
    return res.data.res
  } 

  return location?.latitude &&(
    <View style={styles.container}>
  
      
  <View className="h-[70px] bg-black items-center justify-between px-4 flex-row space-x-4 ">
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>

        <View  className="bg-white rounded-full">

        <Image
        source={require('../assets/profile-user.png')}
        style={{height:40,width:40}}
        />
        </View>
        </TouchableOpacity>
<Text className="text-white">{user.firstName}</Text>
<TouchableOpacity onPress={()=>{setToggle(!toggle)}} className="border border-1 rounded-full border-white">
  {/* <Text  className="text-white bg-red-500 font-bold p-2 rounded-lg">SignOut</Text> */}
  <Image 
  source={require('../assets/lines.png')}
  style={{height:40,width:40}}
  />
  
</TouchableOpacity>


      </View>
{toggle&&
<Tabs/>

}
      <MapView style={styles.map}
      region={{
        latitude:location?.latitude,
        longitude:location?.longitude,
        latitudeDelta:0.0422,
        longitudeDelta:0.0421
      }}
      // customMapStyle={MapViewStyle}
      >
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:location?.latitude,
          longitude:location?.longitude
        }}/>
        {points.map((point,index)=>(
          <MarkerAnimated image={require('../assets/dot3.png')} key={index} coordinate={{latitude:parseFloat(point?.latitude),longitude:parseFloat(point?.longitude)}}/>
        ))}
        
      </MapView>
      
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

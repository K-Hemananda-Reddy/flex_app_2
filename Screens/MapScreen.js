import React, { useContext } from 'react';
import MapView, { MarkerAnimated } from 'react-native-maps';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserLocationContext } from '../Context/UserLocationContext';
import MapViewStyle from '../utils/MapViewStyle.json'
import { useUser } from "@clerk/clerk-expo";
import {useAuth} from '@clerk/clerk-expo'
import { useNavigation } from '@react-navigation/native'

export default function App() {
  const {location,setLocation}=useContext(UserLocationContext)
  const { isLoaded, isSignedIn, user } = useUser();
  const {signOut}=useAuth()
  const navigation=useNavigation()
  return location?.latitude &&(
    <View style={styles.container}>
      
      <View className="h-[70px] bg-black items-center justify-between px-4 flex-row space-x-4">
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>

        <View  className="bg-white rounded-full">

        <Image
        source={require('../assets/profile-user.png')}
        style={{height:40,width:40}}
        />
        </View>
        </TouchableOpacity>
<Text className="text-white">{user.firstName}</Text>
<TouchableOpacity onPress={signOut}>
  {/* <Text  className="text-white bg-red-500 font-bold p-2 rounded-lg">SignOut</Text> */}
  <Image 
  source={require('../assets/logout.png')}
  style={{height:30,width:30}}
  />
</TouchableOpacity>
      </View>
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
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.506189,
          longitude:78.517430
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.498270,
          longitude:78.500027
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.489839,
          longitude:78.526480
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.503345,
          longitude:78.530002
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.482942,
          longitude:78.530059
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.516832,
          longitude:78.541052
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.512872,
          longitude:78.491394
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.500297,
          longitude:78.530754
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.476557,
          longitude:78.502411
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.518796,
          longitude:78.538484
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.490310,
          longitude:78.509795
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.539873,
          longitude:78.514053
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.524486,
          longitude:78.467674
        }}/>
        <MarkerAnimated image={require('../assets/dot3.png')} coordinate={{
          latitude:17.503205,
          longitude:78.462864
        }}/>
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

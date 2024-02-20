import * as React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useOAuth, useSignUp } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser"
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";

import LottieView from 'lottie-react-native'

WebBrowser.maybeCompleteAuthSession()
 
export default function SignUpScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress=async()=>{
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }

  return (
    <View className='h-full bg-black'>

      <View className=" h-4/6 justify-center items-center">
        <LottieView
        source={require('../assets/Animation - 1708245365603.json')}
        autoPlay
        loop
        style={{flexGrow:1,width:200}}
        />
        <TouchableOpacity onPress={onPress}>
          <View className="bg-orange-400  p-5 rounded-lg flex-row space-x-3 items-center">
          <Image
          source={require('../assets/google.png')}
          style={{height:20,width:20}}
          />
          <Text className="text-white font-extrabold tracking-widest">Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
        </View>
  );
}
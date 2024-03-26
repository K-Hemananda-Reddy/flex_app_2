import React from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const SoundPlayerApp = () => {
  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/notify.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.error('Failed to play the sound', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
};

export default SoundPlayerApp;

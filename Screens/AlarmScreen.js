import React, { useEffect } from "react";
import { View, Button } from "react-native";
import * as Notifications from "expo-notifications";
// import Sound from 'react-native-sound';
import { Audio } from 'expo-av';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function AlarmScreen() {
  // const sound = new Sound('my-song.mp3');
  const triggerNotifications = async () => {
    await Notifications.setNotificationChannelAsync("new-emails", {
      name: "E-mail notifications",
      sound: "notify.mp3", // Provide ONLY the base filename
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail!",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1, channelId: "new-emails" },
    });

    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/Alarm.mp3')
      );
      await sound.playAsync();
    } catch (error) {
      console.error('Failed to play the sound', error);
    }
  };

  return (
    <View>
      <Button
        onPress={triggerNotifications}
        title="Trigger Local Notifications"
        color="#841584"
        accessibilityLabel="Trigger Local Notifications"
      />
    </View>
  );
}

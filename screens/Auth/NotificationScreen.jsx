import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import * as Notifications from 'expo-notifications';
import NotificationsBody from "../../components/NotificationsBody";

export default function NotificationsScreen() {
  const handleContinue = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status === 'granted') {
        Alert.alert('Permissions granted', 'You will now receive notifications.');
      } else {
        Alert.alert('Permissions denied', 'You have denied notification permissions.');
      }
    } catch (error) {
      console.error("Error requesting notification permissions: ", error);
      Alert.alert('Error', 'An error occurred while requesting permission.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-bg-gray">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            padding: 20,
          }}
        >
          <NotificationsBody onContinue={handleContinue} />
        </ScrollView>
    </SafeAreaView>
  );
}

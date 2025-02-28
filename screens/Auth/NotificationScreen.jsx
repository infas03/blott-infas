import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import * as Notifications from 'expo-notifications';
import NotificationsBody from "../../components/NotificationsBody";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../context/AuthContext";

export default function NotificationsScreen() {
  const navigation = useNavigation();

  const { setIsRegistered } = useAuth();

  const handleContinue = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status === 'granted') {
        await AsyncStorage.setItem('isRegistered', JSON.stringify(true));
        setIsRegistered(true);
        navigation.navigate('Dashboard');

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

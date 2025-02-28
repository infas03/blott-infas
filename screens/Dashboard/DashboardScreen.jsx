import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { getMarketNews } from "../../services/finnhub";
import News from "../../components/News";
import { Logout } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

export default function DashboardScreen() {
  const navigation = useNavigation();

  const { setIsRegistered } = useAuth();
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Data Cleared", "AsyncStorage has been cleared.");
      setIsRegistered(false);
    } catch (error) {
      console.error("Error clearing AsyncStorage: ", error);
      Alert.alert("Error", "Failed to clear AsyncStorage.");
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("currentUser");
        if (userData !== null) {
          const parsedUserData = JSON.parse(userData);
          setUser(parsedUserData);
        }
      } catch (error) {
        console.error(
          "Error retrieving isRegistered status from AsyncStorage:",
          error
        );
      }
    };

    getUserData();
  }, []);

  console.log("user: ", user);

  useEffect(() => {
    const fetchMarketNews = async () => {
      try {
        const data = await getMarketNews();
        setNews(data);
      } catch (err) {
        setError("Failed to load market news");
      } finally {
        setLoading(false);
      }
    };

    fetchMarketNews();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('currentUser');
      console.log('User data cleared.');

      setIsRegistered(false);

      Alert.alert('Logged Out', 'You have been logged out successfully.');

      navigation.navigate('Auth');
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Error', 'An error occurred while logging out.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-bg-blue">
      <View className="p-5 flex-1">
        <View className="flex flex-row justify-between items-start">
          <Text className="text-32px text-white font-black">
            Hey {user?.firstName || "Guest"}
          </Text>
          <TouchableOpacity onPress={logout} >
            <Logout size="32" color="#523AE4" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 mt-14">
          <ScrollView>
            <News news={news} />
          </ScrollView>
        </View>

        {/* <TouchableOpacity
          onPress={clearAsyncStorage}
          className="bg-red-500 p-3 rounded-lg mt-4"
        >
          <Text className="text-white text-center font-bold">
            Clear AsyncStorage
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

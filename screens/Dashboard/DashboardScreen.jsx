import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import {
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
import NewsCardSkeleton from "../../components/NewsCardSkeleton";

export default function DashboardScreen() {
  const { setIsRegistered } = useAuth();
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserData = useCallback(async () => {
    try {
      const userData = await AsyncStorage.getItem("currentUser");
      if (userData !== null) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }, []);

  const fetchMarketNews = async () => {
    setLoading(true);
    try {
      const data = await getMarketNews();
      setNews(data);
    } catch (err) {
      setError("Failed to load market news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  useEffect(() => {
    fetchMarketNews();
  }, []);

  const handleRefresh = useCallback(() => {
    fetchMarketNews();
  }, [fetchMarketNews]);

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("currentUser");
      await AsyncStorage.removeItem("isRegistered");
      setIsRegistered(false);
      Alert.alert("Logged Out", "You have been logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
      Alert.alert("Error", "An error occurred while logging out.");
    }
  }, [setIsRegistered]);

  return (
    <SafeAreaView className="flex-1 bg-bg-blue">
      <View className="p-5 flex-1">
        <View className="flex flex-row justify-between items-start">
          <Text className="text-32px w-[90%] text-white font-black" numberOfLines={1} ellipsizeMode="tail">
            Hey {user?.firstName || "Guest"}
          </Text>
          <TouchableOpacity onPress={logout}>
            <Logout size="32" color="#523AE4" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 mt-14">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))
          ) : error ? (
            <Text className="text-white text-base font-medium font-rubik">
              Something went wrong. Please try again later.
            </Text>
          ) : (
            <News news={news} refreshing={loading} onRefresh={handleRefresh} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

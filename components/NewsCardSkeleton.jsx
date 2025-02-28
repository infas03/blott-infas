import React from 'react';
import { View, Text } from 'react-native';

export default function NewsCardSkeleton() {
  return (
    <View className="w-full mb-4 flex flex-row gap-x-6 items-center">
      <View className="w-[100px] h-[100px] bg-gray-300 animate-pulse rounded-lg" />
      <View className="flex-1">
        <View className="flex flex-row justify-between items-center mb-2">
          <Text className="w-1/2 h-3 bg-gray-300 animate-pulse rounded-lg" />
          <Text className="w-1/2 h-3 bg-gray-300 animate-pulse rounded-lg" />
        </View>
        <Text className="w-full h-6 bg-gray-300 animate-pulse rounded-lg" />
      </View>
    </View>
  );
}

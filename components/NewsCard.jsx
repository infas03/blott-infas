import React, { memo, useCallback } from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { convertTimestamp } from "../utils/helpers";

const NewsCard = memo(({ news }) => {
  const handlePress = useCallback(async () => {
    try {
      if (news?.url) {
        await Linking.openURL(news.url);
      } else {
        console.warn("No URL provided for this news item.");
      }
    } catch (err) {
      console.error("Failed to open URL:", err);
    }
  }, [news?.url]);

  return (
    <TouchableOpacity onPress={handlePress} className="w-full mb-4 flex flex-row  gap-x-6 items-center">
      <View className="w-[100px] h-[100px]">
        <Image
          source={{ uri: news?.image }}
          alt="newsPic"
          className="w-full h-full"
        />
      </View>
      <View className="flex-1">
        <View className="flex flex-row justify-between items-center mb-2">
          <Text className="text-white/70 text-xs font-rubik uppercase w-1/2">{news?.source}</Text>
          <Text className="text-white/70 text-xs font-rubik uppercase w-1/2 text-right">{convertTimestamp(news?.datetime)}</Text>
        </View>
        <Text className="text-white font-medium text-xl roboto" numberOfLines={3} ellipsizeMode="tail">{news?.headline}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default NewsCard;


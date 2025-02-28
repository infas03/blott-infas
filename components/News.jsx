import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import NewsCard from "./NewsCard";

export default function News({ news }) {
  console.log('CHECK:', news)
  return (
    <View className="flex-1">
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NewsCard news={item} />}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </View>
  );
}

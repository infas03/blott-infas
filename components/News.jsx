import React, { memo } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import NewsCard from "./NewsCard";

const News = memo(({ news, refreshing, onRefresh }) => {
  return (
    <View className="flex-1">
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NewsCard news={item} />}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ffffff"]}
            tintColor="#ffffff"
          />
        }
      />
    </View>
  );
});

export default News;

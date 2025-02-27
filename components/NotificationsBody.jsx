import { Image, Text, TouchableOpacity, View } from "react-native";

export default function NotificationsBody({ onContinue }) {
  return (
    <View className="flex-1 justify-center items-center relative">
      <View className="flex justify-center items-center absolute top-1/4">
        <Image
          source={require("../assets/icons/notification.png")}
          className="mb-5"
        />
        <Text className="font-bold text-2xl font-roboto text-center">
          Get the most out of Blott ✅
        </Text>
        <Text className="font-normal text-base font-roboto text-gray-500 text-center">
          Allow notifications to stay in the loop with your payments, requests
          and groups.
        </Text>
      </View>
      <TouchableOpacity
        onPress={onContinue}
        className="absolute bottom-0 bg-primary rounded-3xl w-full py-3"
      >
        <Text className="text-base font-medium text-white text-center">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

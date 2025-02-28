import { ArrowRight2 } from "iconsax-react-native";
import React, { memo } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const RegisterForm = memo(({ Controller, control, handleSubmit, onSubmit, errors, isValid }) => {
  return (
    <View className="flex-1 justify-between items-center">
      <View className="w-full">
        <View className="w-full mb-4">
          <Text className="text-3xl font-bold text-black/90 font-roboto">
            Your legal name
          </Text>
          <Text className="text-lg text-gray-500 font-normal font-roboto py-7">
            We need to know a bit about you so that we can create your account.
          </Text>
        </View>
        <View className="w-full mb-10">
          <Controller
            control={control}
            rules={{
              required: "First name is required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`py-3 border-b-[1px] w-full font-roboto text-xl placeholder:text-gray-400 ${
                  errors.firstName
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-gray-300"
                }`}
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
        </View>

        <View className="w-full mb-4">
          <Controller
            control={control}
            rules={{
              required: "Last name is required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`py-3 border-b-[1px] w-full font-roboto text-xl placeholder:text-gray-400 ${
                  errors.lastName
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
        </View>
      </View>
      <View className="w-full flex items-end">
        <TouchableOpacity
          disabled={!isValid}
          className={`w-14 h-14 rounded-full flex justify-center items-center ${
            isValid ? "bg-primary" : "bg-primary/40"
          }`}
          onPress={handleSubmit(onSubmit)}
        >
          <ArrowRight2 size="25" color="#ffffff" variant="Linear" />
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default RegisterForm;

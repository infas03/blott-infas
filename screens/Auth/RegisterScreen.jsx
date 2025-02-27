import React from "react";
import {
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import RegisterForm from "../../components/RegisterForm";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }, 
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    try {
      const currentUser = {
        firstName: data.firstName,
        lastName: data.lastName,
      };

      await AsyncStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );

      Alert.alert("Success", "Registered successfully!", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('Notifications');
          }
        }
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to save data to AsyncStorage");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-bg-gray">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            padding: 20,
          }}
        >
          <RegisterForm
            Controller={Controller}
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
            isValid={isValid}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

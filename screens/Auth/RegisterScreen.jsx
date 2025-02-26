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

export default function RegisterScreen() {
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

  const onSubmit = (data) => {
    Alert.alert("Form Data", JSON.stringify(data));
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

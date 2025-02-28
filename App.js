import "./global.css";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthNavigator from "./navigations/AuthNavigator";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import AppNavigator from "./navigations/AppNavigator";
import { AuthProvider, useAuth } from "./context/AuthContext";

SplashScreen.preventAutoHideAsync();

function Main() {
  const { isRegistered } = useAuth();

  return (
    <NavigationContainer>
      {isRegistered ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  const [loaded, error] = useFonts({
    Roboto: require("./assets/fonts/Roboto-VariableFont.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-VariableFont.ttf"),
    "Rubik-Italic": require("./assets/fonts/Rubik-ItalicVariableFont.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

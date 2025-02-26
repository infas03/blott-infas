import "./global.css";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthNavigator from "./navigations/AuthNavigator";
import { Text } from "react-native";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded, error] = useFonts({
    Roboto: require("./assets/fonts/Roboto-VariableFont.ttf"),
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
    <NavigationContainer>
      {/* {isLoggedIn ? <AppNavigator /> : <AuthNavigator />} */}
      <AuthNavigator />
    </NavigationContainer>
  );
}

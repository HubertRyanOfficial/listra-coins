import { useCallback } from "react";
import { View, SafeAreaView } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import UserProvider from "@/contexts/UserContext";
import Routes from "@/routes/index.routes";
import ToastSheetProvider from "@/components/ToastSheet";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Sora-Regular": require("./src/assets/fonts/Sora-Regular.ttf"),
    "Sora-SemiBold": require("./src/assets/fonts/Sora-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      <ToastSheetProvider>
        <View className="flex-1" onLayout={onLayoutRootView}>
          <StatusBar style="light" />
          <UserProvider>
            <Routes />
          </UserProvider>
        </View>
      </ToastSheetProvider>
    </SafeAreaView>
  );
}

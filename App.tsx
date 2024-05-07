import { useCallback } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";

import colors from "./colors";

import UserProvider from "@/contexts/UserContext";
import Routes from "@/routes/index.routes";
import ToastSheetProvider from "@/components/ToastSheet";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

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
    <SafeAreaView className="flex-1" edges={["top"]}>
      <ToastSheetProvider>
        <View className="flex-1" onLayout={onLayoutRootView}>
          <StatusBar
            style="light"
            backgroundColor={colors["purple-heart"].DEFAULT}
          />
          <UserProvider>
            <Routes />
          </UserProvider>
        </View>
      </ToastSheetProvider>
    </SafeAreaView>
  );
}

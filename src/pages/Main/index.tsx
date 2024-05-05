import React from "react";
import { Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function Main() {
  return (
    <View className="flex-1 bg-purple-heart">
      <StatusBar style="light" />
    </View>
  );
}

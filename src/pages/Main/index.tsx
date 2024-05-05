import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";

import Userinfo from "./components/Userinfo";
import Cards from "./components/Cards";

export default function Main() {
  return (
    <View className="flex-1 bg-purple-heart">
      <StatusBar style="light" />
      <Userinfo />
      <ScrollView
        className="rounded-t-3xl bg-alabaster flex-1 mt-24"
        contentContainerStyle={{
          marginTop: 40,
        }}
      >
        <Cards />
      </ScrollView>
    </View>
  );
}

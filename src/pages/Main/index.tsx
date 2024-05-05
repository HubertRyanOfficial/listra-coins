import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

import ShopItem from "@/components/ShopItem";

import Userinfo from "./components/Userinfo";
import Cards from "./components/Cards";

export default function Main() {
  return (
    <View className="flex-1 bg-purple-heart">
      <StatusBar style="light" />
      <Userinfo />
      <ScrollView
        className="rounded-t-3xl bg-alabaster flex-1 mt-14"
        contentContainerStyle={{
          marginTop: 30,
        }}
      >
        <Cards />
        <View className="flex-row items-center justify-between mx-4 mt-8">
          <ShopItem
            data={{
              id: "1",
              name: "Copo Stanley",
              price: 200,
              created_at: 1293812398,
              in_cart: false,
              units: 30,
              image:
                "https://stanley.fbitsstatic.net/img/p/copo-termico-de-cerveja-stanley-473ml-78082/264566-5.jpg?w=495&h=500&v=no-value",
            }}
          />
          <ShopItem
            data={{
              id: "1",
              name: "Copo Stanley",
              price: 200,
              created_at: 1293812398,
              in_cart: false,
              units: 30,
              image:
                "https://stanley.fbitsstatic.net/img/p/copo-termico-de-cerveja-stanley-473ml-78082/264566-5.jpg?w=495&h=500&v=no-value",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

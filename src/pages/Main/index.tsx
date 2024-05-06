import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useShop } from "@/contexts/ShopContext";
import { StatusBar } from "expo-status-bar";

import ShopItem from "@/components/ShopItem";

import Userinfo from "./components/Userinfo";
import Cards from "./components/Cards";
import Button from "@/components/Button";
import colors from "../../../colors";
import { useUser } from "@/contexts/UserContext";

export default function Main() {
  const { user } = useUser();
  const { loading, products } = useShop();

  return (
    <View className="flex-1 bg-purple-heart">
      <StatusBar style="light" />
      <Userinfo />
      <ScrollView
        className="rounded-t-3xl bg-alabaster mt-14"
        contentContainerStyle={{
          marginTop: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Cards />
        {loading || products.length == 0 ? (
          <View className="flex-1 mt-8">
            <ActivityIndicator
              color={colors["purple-heart"].DEFAULT}
              size="large"
            />
          </View>
        ) : (
          <>
            <View className="flex-row items-center justify-between mx-4 mt-8">
              <ShopItem data={products[0]} userId={user.id} />
              <ShopItem data={products[1]} userId={user.id} />
            </View>
            <Button
              title="Ver todos os produtos"
              className="self-center mt-8 mb-40"
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}

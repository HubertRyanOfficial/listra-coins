import React from "react";
import { View } from "react-native";

import ShopItem from "@/components/ShopItem";
import ColumnList from "@/components/ColumnList";

import { useShop } from "@/contexts/ShopContext";
import { useUser } from "@/contexts/UserContext";

export default function Shop() {
  const { products } = useShop();
  const { user } = useUser();

  return (
    <View className="flex-1 bg-purple-heart">
      <ColumnList
        componentKey="shop-list"
        data={products}
        renderItem={({ item, index }) => (
          <ShopItem data={item} userId={user.id} />
        )}
        title={"Shop"}
      />
    </View>
  );
}

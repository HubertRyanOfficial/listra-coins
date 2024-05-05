import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Product } from "@/services/products/types";

import ShopCartAddIcon from "@/assets/icons/shopping-add.svg";

interface Props {
  data: Product & {
    in_cart: boolean;
  };
}

const { width } = Dimensions.get("window");

const CARD_WIDTH = width / 2 - 25;
const CARD_HEIGHT = CARD_WIDTH + 70;

export default function ShopItem({ data }: Props) {
  const [inCart, setInCart] = useState(data.in_cart || false);
  const [loading, setLoading] = useState(false);

  return (
    <View
      className="bg-white self-start rounded-2xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
    >
      <Image
        source={{
          uri: data.image,
        }}
        className="rounded-t-2xl"
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT / 2 - 10 }}
      />
      <View className="p-4">
        <Text className="font-soraSemibold text-base">{data.name}</Text>
        <Text className="font-sora text-xs text-alabaster-300 mt-1">
          {data.units} unidades
        </Text>
        <View className="pl-2 mt-3.5 flex-row items-center justify-between">
          <View>
            <Text className="font-sora text-xs text-purple-heart">Lc</Text>
            <Text className="font-soraSemibold text-lg text-purple-heart -mt-1">
              {data.price.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity>
            <View className="bg-purple-heart w-[38px] h-[38px] justify-center items-center rounded-lg">
              {loading && !inCart ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <ShopCartAddIcon width={19} height={19} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

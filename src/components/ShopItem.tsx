import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import * as Sharing from "expo-sharing";

import { Product } from "@/services/products/types";
import { addToCart } from "@/services/Shopping";

import { useToast } from "./ToastSheet";

import ShopCartAddIcon from "@/assets/icons/shopping-add.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

interface Props {
  userId: string;
  data: Product & {
    in_cart: boolean;
  };
}

const { width } = Dimensions.get("window");

const CARD_WIDTH = width / 2 - 25;
const CARD_HEIGHT = CARD_WIDTH + 70;

export default function ShopItem({ data, userId }: Props) {
  const { startToast } = useToast();
  const [inCart, setInCart] = useState(data.in_cart || false);
  const [loading, setLoading] = useState(false);

  const handleAddInCart = useCallback(async () => {
    try {
      setLoading(true);

      await addToCart(data, userId);

      startToast({
        title: data.name,
        description: "Adicionado no carrinho ✅",
      });
      setInCart(!inCart);
    } catch (error) {
      startToast({
        title: "Houve um error ao adicionar",
        description: "Tente adicionar ao carrinho novamente",
      });
    } finally {
      setLoading(false);
    }
  }, [inCart]);

  const handleShare = async () => {
    const isAvailable = await Sharing.isAvailableAsync();
    if (isAvailable) {
      Sharing.shareAsync(data.image, {
        dialogTitle: `Listra Coins - ${data.name}`,
      });
    }
  };

  return (
    <TouchableOpacity delayLongPress={250} onLongPress={handleShare}>
      <View
        className="bg-white self-start rounded-2xl shadow"
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
          <Text className="font-soraSemibold text-base" numberOfLines={1}>
            {data.name}
          </Text>
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
            <TouchableOpacity onPress={handleAddInCart} disabled={inCart}>
              <View className="bg-purple-heart w-[33px] h-[33px] justify-center items-center rounded-xl">
                {loading && !inCart ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : !inCart ? (
                  <ShopCartAddIcon width={18} height={18} color="#FFFFFF" />
                ) : (
                  <CheckCircleIcon width={18} height={18} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

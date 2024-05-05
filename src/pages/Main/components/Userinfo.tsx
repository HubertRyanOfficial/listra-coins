import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import * as Animatable from "react-native-animatable";

import WalletIcon from "@/assets/icons/wallet.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import ShopBagIcon from "@/assets/icons/shopping-bag.svg";

import { useUser } from "@/contexts/UserContext";

export default function Userinfo() {
  const { user } = useUser();
  return (
    <>
      <View className="px-6 mt-16">
        <Animatable.View
          animation="fadeIn"
          className="flex-row justify-between"
        >
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://media.licdn.com/dms/image/D4D03AQHAbMt1YjOaMw/profile-displayphoto-shrink_800_800/0/1666360120259?e=1720656000&v=beta&t=HRPRFzI0Mo2TB4KazvWkJInILnp3jZ1i1SQBPz26gy0",
              }}
              className="w-[50px] h-[50px] rounded-[20px]"
            />
          </TouchableOpacity>
          <View className="bg-mine-shaft self-start py-0.5 px-2 rounded-full">
            <Text className="text-white font-soraSemibold text-sm">
              Listra Coins
            </Text>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={200}
          className="flex-row justify-between mt-6"
        >
          <Text className="font-sora text-base text-white">
            Olá, <Text className="font-soraSemibold">{user.name}</Text>
          </Text>
          <NotificationIcon width={34} height={34} />
        </Animatable.View>
      </View>
      <Animatable.View
        animation="fadeInUp"
        className="absolute z-[1] top-[230px] left-0 right-0 mx-6 bg-white rounded-2xl shadow-sm flex-row items-center justify-around"
      >
        <View className="flex-row items-center px-6 py-5">
          <WalletIcon width={30} height={30} />
          <Text className="font-sora text-mine-shaft text-base ml-4">
            Lc{" "}
            <Text className="font-soraSemibold">{user.balance.toFixed(2)}</Text>
          </Text>
        </View>
        <View className="w-[2px] h-full bg-mine-shaft/10" />
        <TouchableOpacity>
          <View className="flex-row items-center py-5 px-6">
            <ShopBagIcon width={30} height={30} />
            <Text className="font-sora text-mine-shaft text-base ml-4">
              Shop
            </Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
}

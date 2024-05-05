import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

function Wallet() {
  const { user } = useUser();

  return (
    <View className="absolute z-[1] top-[230px] left-0 right-0 mx-6 bg-white rounded-2xl shadow-sm flex-row items-center justify-around">
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
          <Text className="font-sora text-mine-shaft text-base ml-4">Shop</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Wallet;

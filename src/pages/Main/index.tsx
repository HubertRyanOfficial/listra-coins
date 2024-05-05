import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useUser } from "@/contexts/UserContext";

import NotificationIcon from "@/assets/icons/notification.svg";

export default function Main() {
  const { user } = useUser();
  return (
    <View className="flex-1 bg-purple-heart">
      <StatusBar style="light" />
      <View className="px-6 mt-16">
        <View className="flex-row justify-between">
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://media.licdn.com/dms/image/D4D03AQHAbMt1YjOaMw/profile-displayphoto-shrink_800_800/0/1666360120259?e=1720656000&v=beta&t=HRPRFzI0Mo2TB4KazvWkJInILnp3jZ1i1SQBPz26gy0",
              }}
              className="w-[50px] h-[50px] rounded-[20px]"
            />
          </TouchableOpacity>
          <View className="bg-mine-shaft self-start py-1 px-2 rounded-full">
            <Text className="text-white font-sora text-sm">Listra Coins</Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-6">
          <Text className="font-sora text-base text-white">
            Olá, <Text className="font-soraSemibold">{user.name}</Text>
          </Text>
          <NotificationIcon width={34} height={34} />
        </View>
      </View>
    </View>
  );
}

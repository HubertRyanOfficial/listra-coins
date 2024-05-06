import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

import BackIcon from "@/assets/icons/back.svg";

function Header({ navigation }: BottomTabHeaderProps) {
  return (
    <View className="bg-purple-heart pt-[48px] px-4 flex-row items-center">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View className="flex-row items-center">
          <BackIcon />
          <Text className="ml-4 font-soraSemibold text-white text-sm">
            Voltar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

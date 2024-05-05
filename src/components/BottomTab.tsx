import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import MainIcon from "@/assets/icons/main.svg";
import ShopIcon from "@/assets/icons/shop.svg";
import ProfileIcon from "@/assets/icons/profile.svg";

import colors from "../../colors";

const IconTypes = {
  Main: MainIcon,
  Shop: ShopIcon,
  Profile: ProfileIcon,
};

export default function BottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View className="flex-row bg-white px-12 py-5 rounded-t-3xl shadow items-center justify-between w-full absolute bottom-0">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const Icon = IconTypes[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              width={22}
              height={22}
              color={
                isFocused
                  ? colors["purple-heart"].DEFAULT
                  : colors["mine-shaft"]["400"]
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

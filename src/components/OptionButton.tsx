import React from "react";
import {
  TouchableOpacity,
  TextInputProps,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";
import cn from "classnames";

import ChevronIcon from "@/assets/icons/chevron.svg";

interface Props extends TouchableOpacityProps {
  leftIcon?: any;
  title: string;
}

function OptionButton({ leftIcon, title, className, ...props }: Props) {
  return (
    <TouchableOpacity {...props}>
      <View
        className={cn(
          "py-3.5 px-6 border-[1px] border-gray-200 rounded-3xl flex-row items-center justify-between mb-6 w-full shadow bg-white",
          {
            [className]: !!className,
          }
        )}
      >
        <View className="flex-row items-center">
          {leftIcon}
          <Text className="text-xl text-black font-soraSemibold py-4 ml-4">
            {title}
          </Text>
        </View>
        <ChevronIcon />
      </View>
    </TouchableOpacity>
  );
}

export default OptionButton;

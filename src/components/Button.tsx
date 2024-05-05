import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import cn from "classnames";

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

function Button({ title, className, ...props }: Props) {
  return (
    <TouchableOpacity {...props}>
      <View
        className={cn("bg-purple-heart py-3 px-8 self-start rounded-full", {
          [className]: !!className,
        })}
      >
        <Text className="font-soraSemibold text-white text-lg">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;

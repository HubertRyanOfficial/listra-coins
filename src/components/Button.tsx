import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import cn from "classnames";

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  backgroundColor?: string;
}

function Button({
  title,
  className,
  loading,
  backgroundColor,
  ...props
}: Props) {
  return (
    <TouchableOpacity {...props} disabled={loading}>
      <View
        className={cn("bg-purple-heart py-2.5 px-8 self-start rounded-full", {
          [className]: !!className,
          "py-3 px-3": !!loading,
          [backgroundColor]: !!backgroundColor,
        })}
      >
        {!loading ? (
          <Text className="font-soraSemibold text-white text-base">
            {title}
          </Text>
        ) : (
          <ActivityIndicator color={"#FFFFFF"} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default Button;

import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import cn from "classnames";

import colors from "../../colors";

interface Props extends TextInputProps {
  leftIcon: any;
}

function Input({ leftIcon, className, ...props }: Props) {
  return (
    <View
      className={cn(
        "py-4 px-6 border-[1px] border-gray-200 rounded-3xl flex-row items-center mb-6 w-full shadow bg-white",
        {
          [className]: !!className,
        }
      )}
    >
      {leftIcon}
      <TextInput
        {...props}
        className="text-xl text-black font-soraSemibold py-4 w-full ml-4"
        placeholderTextColor={colors["mine-shaft"].DEFAULT}
      />
    </View>
  );
}

export default Input;

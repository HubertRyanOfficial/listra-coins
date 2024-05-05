import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { FieldError } from "react-hook-form";
import cn from "classnames";

import colors from "../../colors";

interface Props extends TextInputProps {
  leftIcon: any;
  errors?: FieldError;
}

function Input({ leftIcon, className, errors, ...props }: Props) {
  return (
    <>
      <View
        className={cn(
          "py-4 px-6 border-[1px] border-gray-200 rounded-3xl flex-row items-center mb-6 w-full shadow bg-white",
          {
            [className]: !!className,
            "mb-0": errors && errors.message,
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
      {errors && errors.message && (
        <Text className="mt-2 mb-4 font-sora ml-4 text-red-500 text-xs">
          {errors.message}
        </Text>
      )}
    </>
  );
}

export default Input;

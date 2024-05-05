import React, { useEffect } from "react";
import { View, Image } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import HeaderImage from "@/assets/header-img.png";

export default function Header() {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = withTiming(1, {
      duration: 800,
    });
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: animationValue.value,
      transform: [
        { translateY: interpolate(animationValue.value, [0, 1], [40, 0]) },
      ],
    };
  });

  return (
    <Animated.View
      className="w-full justify-center items-center py-16"
      style={animatedStyles}
    >
      <Image source={HeaderImage} />
    </Animated.View>
  );
}

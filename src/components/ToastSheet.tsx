import React, { createContext, useContext, useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  children: React.ReactNode;
}

interface ToastProps {
  title: string;
  description: string;
}

const ToastSheetContext = createContext(
  {} as { startToast: (data: ToastProps) => void }
);

const { width, height } = Dimensions.get("window");

function ToastSheetProvider({ children }: Props) {
  const translateValue = useSharedValue(0);
  const limiteTimeValue = useSharedValue(width - 90);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const startToast = (newData: ToastProps) => {
    setData(newData);
    translateValue.value = withTiming(1, {
      duration: 500,
    });

    limiteTimeValue.value = withTiming(
      0,
      {
        duration: 3000,
      },
      (finished) => {
        if (finished) {
          translateValue.value = withTiming(
            0,
            {
              duration: 300,
            },
            (finished) => {
              if (finished) {
                translateValue.value = 0;
                limiteTimeValue.value = width - 90;
              }
            }
          );
        }
      }
    );

    setTimeout(() => {
      setData({
        title: "",
        description: "",
      });
    }, 3350);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          translateValue.value,
          [0, 1],
          [height + 200, 0]
        ),
      },
    ],
  }));

  return (
    <ToastSheetContext.Provider value={{ startToast }}>
      {children}
      {data.title && data.description && (
        <Animated.View
          className="z-[1] absolute bottom-20 mx-4 px-6 pt-4 bg-white rounded-3xl shadow"
          style={[
            {
              width: width - 40,
            },
            animatedStyle,
          ]}
        >
          <Text className="font-soraSemibold text-base">{data.title}</Text>
          <Text className="font-sora text-xs mt-1 mb-4">
            {data.description}
          </Text>
          <Animated.View
            className="z-[1] bg-purple-heart h-[6px]"
            style={[
              {
                width: limiteTimeValue,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              },
              animatedStyle,
            ]}
          />
        </Animated.View>
      )}
    </ToastSheetContext.Provider>
  );
}

export const useToast = () => useContext(ToastSheetContext);

export default ToastSheetProvider;

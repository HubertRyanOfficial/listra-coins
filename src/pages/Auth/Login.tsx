import React from "react";
import { Image, Text, View } from "react-native";

import HeaderImage from "@/assets/header-img.png";

const Login: React.FC = () => {
  return (
    <View className="flex-1 bg-purple-heart">
      <View className="w-full justify-center items-center pt-24 pb-12">
        <Image source={HeaderImage} />
      </View>
      <View className="rounded-t-3xl bg-alabaster flex-1">
        <Text className="text-3xl text-mine-shaft self-center mt-8">Login</Text>
      </View>
    </View>
  );
};

export default Login;

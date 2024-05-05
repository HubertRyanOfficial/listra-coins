import React from "react";
import { Image, View } from "react-native";

import HeaderImage from "@/assets/header-img.png";

const Login: React.FC = () => {
  return (
    <View className="flex-1 bg-purple-heart">
      <View>
        <Image source={HeaderImage} />
      </View>
    </View>
  );
};

export default Login;

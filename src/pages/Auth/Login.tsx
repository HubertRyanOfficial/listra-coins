import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";

import Input from "@/components/Input";
import Button from "@/components/Button";

import HeaderImage from "@/assets/header-img.png";
import EmailIcon from "@/assets/icons/user.svg";
import PasswordIcon from "@/assets/icons/lock.svg";

const Login: React.FC = () => {
  return (
    <View className="flex-1 bg-purple-heart">
      <View className="w-full justify-center items-center pt-24 pb-14">
        <Image source={HeaderImage} />
      </View>
      <ScrollView
        className="rounded-t-3xl bg-alabaster flex-1"
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <View className="flex-1 items-center">
          <Text className="text-2xl text-mine-shaft mt-8 font-soraSemibold">
            Login
          </Text>
          <View className="mt-8">
            <Input
              leftIcon={<EmailIcon width={30} height={30} />}
              placeholder="E-mail"
            />
            <Input
              leftIcon={<PasswordIcon width={30} height={30} />}
              placeholder="Senha"
              className="pt-4"
              secureTextEntry
            />
          </View>
          <Button className="mt-4" title="Entrar" />
        </View>
        <View className="flex-row items-center gap-x-2 mt-12">
          <TouchableOpacity>
            <Text className="font-sora text-xs text-alabaster-300">
              Registrar-se
            </Text>
          </TouchableOpacity>
          <Text className="font-sora text-xs  text-alabaster-300">|</Text>
          <TouchableOpacity>
            <Text className="font-sora text-xs  text-alabaster-300">
              Resetar senha
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

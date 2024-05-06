import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import { useUser } from "@/contexts/UserContext";
import Button from "@/components/Button";
import OptionButton from "@/components/OptionButton";

import CameraIcon from "@/assets/icons/camera.svg";
import DetailsIcon from "@/assets/icons/details-account.svg";
import BankIcon from "@/assets/icons/bank.svg";
import HistoricIcon from "@/assets/icons/historic.svg";

export default function Profile() {
  const { user, handleSignOut } = useUser();
  return (
    <View className="flex-1 bg-purple-heart">
      <View className="mt-14 flex-col items-center">
        <View className="bg-white w-[96px] h-[96px] rounded-3xl">
          <View className="absolute inset-0 border-4 border-[#FFFFFF40] flex-1 rounded-3xl z-[1] w-[96px] h-[96px]" />
          <Image
            className="flex-1 rounded-3xl"
            source={{
              uri: "https://media.licdn.com/dms/image/D4D03AQHAbMt1YjOaMw/profile-displayphoto-shrink_800_800/0/1666360120259?e=1720656000&v=beta&t=HRPRFzI0Mo2TB4KazvWkJInILnp3jZ1i1SQBPz26gy0",
            }}
          />
          <TouchableOpacity>
            <View className="w-7 h-7 rounded-full bg-white absolute -top-4 self-center z-[1] justify-center items-center shadow">
              <CameraIcon />
            </View>
          </TouchableOpacity>
        </View>
        <Text className="my-6 font-soraSemibold text-lg text-white">
          {user.name}
        </Text>
        <Button title="Editar Perfil" backgroundColor="bg-mine-shaft" />
      </View>
      <ScrollView
        className="rounded-t-3xl bg-alabaster mt-10 px-4"
        contentContainerStyle={{
          marginTop: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <OptionButton leftIcon={<DetailsIcon />} title="Detalhes do Perfil" />
        <OptionButton leftIcon={<BankIcon />} title="Detalhes da Conta" />
        <OptionButton leftIcon={<HistoricIcon />} title="Histórico" />
        <Button
          title="Sair"
          className="self-center mt-12 pb-32"
          onPress={handleSignOut}
        />
      </ScrollView>
    </View>
  );
}

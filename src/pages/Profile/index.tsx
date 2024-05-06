import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import * as Animatable from "react-native-animatable";
import * as ImagePicker from "expo-image-picker";

import { updateUser } from "@/services/users";
import { useUser } from "@/contexts/UserContext";

import Button from "@/components/Button";
import OptionButton from "@/components/OptionButton";
import { useToast } from "@/components/ToastSheet";

import CameraIcon from "@/assets/icons/camera.svg";
import DetailsIcon from "@/assets/icons/details-account.svg";
import BankIcon from "@/assets/icons/bank.svg";
import HistoricIcon from "@/assets/icons/historic.svg";
import ProfileIcon from "@/assets/icons/profile.svg";

import colors from "../../../colors";

export default function Profile() {
  const { startToast } = useToast();
  const { user, handleSignOut, handleUpdateUserProfile } = useUser();

  const [loadingUpload, setLoadingUpload] = useState(false);

  const handleChangeProfilePicture = async () => {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permission.granted == true) {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
          base64: true,
        });

        if (!result.canceled) {
          setLoadingUpload(true);

          const file = result.assets[0].uri;

          await updateUser(
            {
              ...user,
              profileImage: file,
            },
            user.id
          );

          handleUpdateUserProfile(file);
        }
      } else {
        startToast({
          title: "Permissão negada ❌",
          description: "Precisamos da permissão para alterar sua foto.",
        });
      }
    } catch (error) {
      startToast({
        title: "Houve um error ao alterar",
        description: "Tente novamente",
      });
    } finally {
      setLoadingUpload(false);
    }
  };

  return (
    <View className="flex-1 bg-purple-heart">
      <Animatable.View
        animation="fadeInUp"
        className="mt-14 flex-col items-center"
      >
        <View className="bg-white w-[96px] h-[96px] rounded-3xl">
          <View className="absolute inset-0 bg-transparent border-4 border-[#FFFFFF40] flex-1 rounded-3xl z-[1] w-[96px] h-[96px]" />
          {!user.profileImage ? (
            <View className="flex-1 rounded-3xl justify-center items-center">
              <ProfileIcon
                width={30}
                height={30}
                color={colors["purple-heart"].DEFAULT}
              />
            </View>
          ) : (
            <Image
              className="flex-1 rounded-3xl"
              source={{
                uri: user.profileImage,
              }}
            />
          )}
          <TouchableOpacity onPress={handleChangeProfilePicture}>
            <View className="w-7 h-7 rounded-full bg-white absolute -top-4 self-center z-[1] justify-center items-center shadow">
              <CameraIcon />
            </View>
          </TouchableOpacity>
        </View>
        <Text className="my-6 font-soraSemibold text-lg text-white">
          {user.name}
        </Text>
        <Button
          title="Editar Perfil"
          backgroundColor="bg-mine-shaft"
          onPress={handleChangeProfilePicture}
          loading={loadingUpload}
        />
      </Animatable.View>
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

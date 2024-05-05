import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUser } from "@/contexts/UserContext";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "./components/Header";

import EmailIcon from "@/assets/icons/user.svg";
import PasswordIcon from "@/assets/icons/lock.svg";

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email("Infome um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
});

const SignUp: React.FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
    reValidateMode: "onSubmit",
  });

  const handleUserSignUp = (values) => {};

  return (
    <View className="flex-1 bg-purple-heart">
      <Header />
      <ScrollView
        className="rounded-t-3xl bg-alabaster flex-1"
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <View className="flex-1 items-center">
          <Text className="text-2xl text-mine-shaft mt-8 font-soraSemibold">
            Criar conta
          </Text>
          <View className="mt-8">
            <Controller
              control={control}
              name={"name"}
              render={({
                field: { value, onChange, onBlur },
                formState: { errors },
              }) => (
                <Input
                  leftIcon={<EmailIcon width={30} height={30} />}
                  placeholder="Seu nome"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errors={errors["email"]}
                />
              )}
            />
            <Controller
              control={control}
              name={"email"}
              render={({
                field: { value, onChange, onBlur },
                formState: { errors },
              }) => (
                <Input
                  leftIcon={<EmailIcon width={30} height={30} />}
                  placeholder="E-mail"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errors={errors["email"]}
                />
              )}
            />
            <Controller
              control={control}
              name={"password"}
              render={({
                field: { value, onChange, onBlur },
                formState: { errors },
              }) => (
                <Input
                  leftIcon={<PasswordIcon width={30} height={30} />}
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  errors={errors["password"]}
                  secureTextEntry
                />
              )}
            />
          </View>
          <Button
            className="mt-4"
            title="Criar conta"
            onPress={handleSubmit(handleUserSignUp)}
          />
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

export default SignUp;

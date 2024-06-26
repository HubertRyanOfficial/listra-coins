import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/services/users";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "./components/Header";

import EmailIcon from "@/assets/icons/user.svg";
import PasswordIcon from "@/assets/icons/lock.svg";
import { useToast } from "@/components/ToastSheet";
import { AuthStackParamList } from "@/routes/Auth.routes";

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email("Infome um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
});

const SignUp: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, "SignUp">>();
  const { startToast } = useToast();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
    reValidateMode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);

  const handleUserSignUp = async (values: z.infer<typeof signupSchema>) => {
    try {
      setLoading(true);
      const date = new Date();

      if (!values.email || !values.password || !values.name) return;

      await createUser({
        email: values.email,
        password: values.password,
        name: values.name,
        balance: 100000,
        created_at: date.valueOf(),
        profileImage: null,
        notificationToken: null,
      });

      startToast({
        title: "Conta criada com sucesso. ✅",
        description: "Faça o login e comece suas compras",
      });
      navigation.goBack();
    } catch (e) {
      if (e === "user-already-exists") {
        startToast({
          title: "Já existe um usuário usando este e-mail ❌",
          description: "Use um outro e-mail para criar conta.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

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
            loading={loading}
          />
        </View>
        <View className="flex-row items-center gap-x-2 mt-12">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="font-sora text-xs text-alabaster-300">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

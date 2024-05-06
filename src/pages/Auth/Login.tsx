import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { useUser } from "@/contexts/UserContext";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Header from "./components/Header";

import { loginUser } from "@/services/users/auth";
import { AuthStackParamList } from "@/routes/Auth.routes";

import EmailIcon from "@/assets/icons/user.svg";
import PasswordIcon from "@/assets/icons/lock.svg";
import { useToast } from "@/components/ToastSheet";

const loginSchema = z.object({
  email: z.string().email("Infome um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
});

const Login: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList, "Login">>();
  const { handleUser } = useUser();
  const { startToast } = useToast();

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    reValidateMode: "onSubmit",
  });

  const handleUserLogin = async (values) => {
    try {
      setLoading(true);
      const user = await loginUser(values.email, values.password);
      handleUser(user);
    } catch (e) {
      if (e === "user-not-exists") {
        startToast({
          title: "Esse usuário não existe ❌",
          description: "Tente outro e-mail.",
        });
      } else if (e == "incorrect-password") {
        startToast({
          title: "Senha incorreta ❌",
          description: "Tente novamente!",
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
            Login
          </Text>
          <View className="mt-8">
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
                  keyboardType="email-address"
                  autoCapitalize="none"
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
            title="Entrar"
            onPress={handleSubmit(handleUserLogin)}
            loading={loading}
          />
        </View>
        <View className="flex-row items-center gap-x-2 mt-12">
          <TouchableOpacity>
            <Text
              className="font-sora text-xs text-alabaster-300"
              onPress={() => navigation.navigate("SignUp")}
            >
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

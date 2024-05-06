import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;

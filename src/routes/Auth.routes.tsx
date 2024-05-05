import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";

const Stack = createNativeStackNavigator();

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

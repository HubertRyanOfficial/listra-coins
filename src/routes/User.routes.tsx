import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "@/pages/Main";

const Stack = createNativeStackNavigator();

const UserRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default UserRoutes;

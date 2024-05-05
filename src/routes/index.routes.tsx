import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import UserRoutes from "./User.routes";
import AuthRoutes from "./Auth.routes";
import { useUser } from "@/contexts/UserContext";

const Routes: React.FC = () => {
  const { user } = useUser();
  return (
    <NavigationContainer>
      {user ? <UserRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;

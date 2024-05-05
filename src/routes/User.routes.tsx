import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopProvider from "@/contexts/ShopContext";

import Main from "@/pages/Main";
import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";
import BottomTab from "@/components/BottomTab";

const Bottom = createBottomTabNavigator();

const UserRoutes: React.FC = () => {
  return (
    <ShopProvider>
      <Bottom.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <BottomTab {...props} />}
      >
        <Bottom.Screen name="Main" component={Main} />
        <Bottom.Screen name="Shop" component={Shop} />
        <Bottom.Screen name="Profile" component={Profile} />
      </Bottom.Navigator>
    </ShopProvider>
  );
};

export default UserRoutes;

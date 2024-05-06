import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopProvider from "@/contexts/ShopContext";

import Main from "@/pages/Main";
import Shop from "@/pages/Shop";
import Profile from "@/pages/Profile";
import BottomTab from "@/components/BottomTab";
import Header from "@/components/navigation/Header";

export type BottomTabParamList = {
  Main: undefined;
  Shop: undefined;
  Profile: undefined;
};

const Bottom = createBottomTabNavigator<BottomTabParamList>();

const UserRoutes: React.FC = () => {
  return (
    <ShopProvider>
      <Bottom.Navigator
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
        tabBar={(props) => <BottomTab {...props} />}
      >
        <Bottom.Screen
          name="Main"
          options={{
            headerShown: false,
          }}
          component={Main}
        />
        <Bottom.Screen name="Shop" component={Shop} />
        <Bottom.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
          component={Profile}
        />
      </Bottom.Navigator>
    </ShopProvider>
  );
};

export default UserRoutes;

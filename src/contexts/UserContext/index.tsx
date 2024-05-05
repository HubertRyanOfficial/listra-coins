import React, { createContext, useContext, useState } from "react";

import usePersist from "@/hooks/usePersist";

import { UserContextType } from "./types";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const UserContext = createContext({} as UserContextType);

function UserProvider({ children }: Props) {
  const [data, setData, clear, loading] = usePersist("userContext", {
    user: null,
  });

  const handleLogin = (values: Pick<UserContextType, "user">) => {
    setData({ ...data, user: values });
  };

  return (
    <UserContext.Provider value={{ ...data, handleLogin }}>
      {!loading && children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

export default UserProvider;

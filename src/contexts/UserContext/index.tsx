import React, { createContext, useCallback, useContext, useState } from "react";

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

  const handleUser = useCallback(
    (values: UserContextType["user"]) => {
      setData({ ...data, user: values });
    },
    [data]
  );

  const handleUpdateUserProfile = useCallback(
    (file) => {
      setData({
        ...data,
        user: {
          ...data.user,
          profileImage: file,
        },
      });
    },
    [data]
  );

  const handleSignOut = useCallback(() => {
    clear();
  }, []);

  return (
    <UserContext.Provider
      value={{ ...data, handleUser, handleSignOut, handleUpdateUserProfile }}
    >
      {!loading && children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

export default UserProvider;

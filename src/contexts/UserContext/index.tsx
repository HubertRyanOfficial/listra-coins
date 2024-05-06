import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as Notifications from "expo-notifications";

import usePersist from "@/hooks/usePersist";

import { UserContextType } from "./types";
import { registerForPushNotificationsAsync } from "@/utils/notification";
import { updateUser } from "@/services/users";
import { useToast } from "@/components/ToastSheet";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const UserContext = createContext({} as UserContextType);

function UserProvider({ children }: Props) {
  const { startToast } = useToast();
  const [data, setData, clear, loading] = usePersist("userContext", {
    user: null,
  });
  const notificationListener = useRef<any>();

  useEffect(() => {
    if (data.user && !data.user.notificationToken) {
      getNotificationToken();
    }
  }, [data.user]);

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        startToast({
          title: notification.request.content.title,
          description: notification.request.content.body,
        });
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
    };
  }, []);

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

  const getNotificationToken = useCallback(async () => {
    const notificationToken = await registerForPushNotificationsAsync();
    await updateUser(
      {
        notificationToken,
      },
      data.user.id
    );
  }, [data.user]);

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

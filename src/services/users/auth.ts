import api from "@/config/api";
import { UserGetType } from "./types";

export const loginUser = async (email: string, password: string) => {
  const response = await api.get<UserGetType[]>("/users");
  const users = response.data;

  const currentUser = users.find((user) => user.email === email);

  if (currentUser) {
    if (currentUser.password === password) {
      return {
        id: currentUser.id,
        email: currentUser.email,
        name: currentUser.name,
        balance: currentUser.balance,
        created_at: currentUser.created_at,
      };
    } else {
      throw "incorrect-password";
    }
  } else {
    throw "user-not-exists";
  }
};

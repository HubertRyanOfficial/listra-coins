import api from "@/config/api";
import { UserGetType, UserPostType } from "./types";

export const createUser = async (data: UserPostType) => {
  const response = await api.get<UserGetType[]>("/users");

  const getCurrentUser = response.data.find(
    (user) => user.email === data.email
  );

  if (getCurrentUser) {
    throw "user-already-exists";
  }

  const user = await api.post("/users", data);
  return user.data;
};

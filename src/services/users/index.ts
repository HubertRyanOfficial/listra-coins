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

export const updateUser = async (data: Partial<UserPostType>, userId) => {
  const user = await api.get(`/users/${userId}`);
  const response = await api.put<UserGetType>(`/users/${userId}`, {
    ...user.data,
    ...data,
  });
  return response.data;
};

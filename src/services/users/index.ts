import api from "@/config/api";
import { UserPostType } from "./types";

export const createUser = async (data: UserPostType) => {
  const response = await api.post("/users", data);
  return response.data;
};

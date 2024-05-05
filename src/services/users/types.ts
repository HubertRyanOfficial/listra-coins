export type UserPostType = {
  email: string;
  password: string;
  name: string;
  balance: number;
  created_at: number;
};

export type UserGetType = UserPostType & {
  id: string;
};

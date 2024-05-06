export type UserPostType = {
  email: string;
  password: string;
  name: string;
  balance: number;
  created_at: number;
  profileImage: string | null;
};

export type UserGetType = UserPostType & {
  id: string;
};

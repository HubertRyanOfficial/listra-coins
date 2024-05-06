export type UserPostType = {
  email: string;
  password: string;
  name: string;
  balance: number;
  created_at: number;
  profileImage: string | null;
  notificationToken: string | null;
};

export type UserGetType = UserPostType & {
  id: string;
};

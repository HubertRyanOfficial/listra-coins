export interface UserContextValues {
  user: {
    id: string;
    email: string;
    name: string;
    balance: number;
    created_at: number;
    profileImage: string | null;
    notificationToken: string | null;
  } | null;
}

export interface UserContextHandles {
  handleUser: (values: UserContextType["user"]) => void;
  handleUpdateUserProfile: (file: string) => void;
  handleSignOut: () => void;
}

export type UserContextType = UserContextValues & UserContextHandles;

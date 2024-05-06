export interface UserContextValues {
  user: {
    id: string;
    email: string;
    name: string;
    balance: number;
    created_at: number;
  } | null;
}

export interface UserContextHandles {
  handleUser: (values: UserContextType["user"]) => void;
  handleSignOut: () => void;
}

export type UserContextType = UserContextValues & UserContextHandles;

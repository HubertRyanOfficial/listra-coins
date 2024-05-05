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
  handleUser: (values: Pick<UserContextValues, "user">) => void;
}

export type UserContextType = UserContextValues & UserContextHandles;

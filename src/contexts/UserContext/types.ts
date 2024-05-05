interface UserContextValues {
  user: {
    email: string;
    password: string;
  } | null;
}

interface UserContextHandles {
  handleLogin: (values: Pick<UserContextValues, "user">) => void;
}

export type UserContextType = UserContextValues & UserContextHandles;

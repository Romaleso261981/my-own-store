export type ResDataUser = {
  id: string;
  editedUser: User | null;
};

export type SortedField = keyof User;

export type PagePath =
  | "/main"
  | "/midea"
  | "/idea"
  | "/cooperHunter"
  | "/"
  | "olmo";
export type Card = {
  id: number;
  path: string;
  title: string;
  image: string;
  description: string;
  price: number;
  amount: number;
};

export type Conditioner = {
  id: number;
  path: string;
  title: string;
  image: string;
  description: string;
  price: number;
  amount: number;
};

export interface IAuth {
  userName: string;
}

export interface UserError {
  login: string | null;
  update: string | null;
  logout: string | null;
}

export type UserCredentials = {
  email: string;
  password: string;
};

export type User = {
  email?: string;
  avatar?: string;
  balans?: number;
  rule?: string;
  nickName?: string;
  phone?: string;
  roles?: string[];
};

export type NewUser = User & UserCredentials;

export type AuthError = {
  code: string;
  message: string;
};

export type UserState = {
  user: User | null | undefined;
};
export type AuthState = {
  user: null | User | undefined;

  loading: boolean;
  setIsRegistered: boolean;
};

export type FirestoreData = {
  email?: string;
  avatar?: string;
  balans?: number;
  rule?: string;
  nickName?: string;
  phone?: string;
  roles?: string[];
};

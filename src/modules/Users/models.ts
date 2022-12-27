export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  date_birth: number;
  gender: string;
}

export interface IUserState {
  users: IUser[] | [];
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

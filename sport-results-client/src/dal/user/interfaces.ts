export interface IUserInfo {
  firstName?: string;
  lastName?: string;
  login: string;
  height?: number;
  weight?: number;
}

export interface ILoginResponse {
  user: IUserInfo;
  token: string;
}

export interface IUserResponse {
  user: IUserInfo;
}

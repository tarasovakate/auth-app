export interface IUserLoginDto {
  username: string;
  password: string;
}

export class UserLoginDto implements IUserLoginDto {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

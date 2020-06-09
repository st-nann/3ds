export interface IUsernameExistRequest {
  username: string;
}

export interface IEmailExistRequest {
  email: string;
}

export interface IUserCreationRequest {
  username: string;
  email?: string;
  realname: string;
  password: string;
}

export interface IUserResetPasswordRequest {
  newPassword: string;
}

export interface IUserMultiDeleteRequest {
  userIds: string[];
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignupRequest {
  email: string;
  ref: string;
}

export interface IAuthenticationRequestOtpRequest {
  country_code: string;
  phone_number: string;
}

export interface IAuthenticationConfirmOtpRequest {
  otp: string;
}

export interface IAuthenticationConfirmProfileRequest {
  first_name: string;
  last_name: string;
  country_code: string;
  phone_number: string;
  password: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  password: string;
}

export interface IChangePasswordRequest {
  user: {
    original_password: string,
    password: string
  };
}

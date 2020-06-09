
export class AuthenticationState {
  public login: object;
  public signup: object;
  public verifySignup: object;
  public requestOtp: object;
  public confirmOtp: object;
  public confirmProfile: object;
  public createDefaultCloudFirewall: object;
  public roles: object[];
  public forgotPassword: object;
  public resetPassword: object;
  public changePawword: object;
  public email: string;
  public resendEmail: object;

  constructor() {
    this.login = {};
    this.signup = {};
    this.requestOtp = {};
    this.confirmOtp = {};
    this.verifySignup = {};
    this.confirmProfile = {};
    this.createDefaultCloudFirewall = {};
    this.roles = [];
    this.forgotPassword = {};
    this.resetPassword = {};
    this.changePawword = {};
    this.email = "";
    this.resendEmail = {};
  }
}

export default AuthenticationState;

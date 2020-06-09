import { MutationTree } from "vuex";
import { mutationType } from "./mutation-types";
import AuthenticationState from "./states";

const mutations: MutationTree<AuthenticationState> = {
  [mutationType.LOGIN](
    state: AuthenticationState,
    data: object
  ): void {
    state.login = data;
  },
  [mutationType.SIGNUP](
    state: AuthenticationState,
    data: object
  ): void {
    state.signup = data;
  },
  [mutationType.VERIFY_SIGNUP](
    state: AuthenticationState,
    data: object
  ): void {
    state.verifySignup = data;
  },
  [mutationType.REQUEST_OTP](
    state: AuthenticationState,
    data: object
  ): void {
    state.requestOtp = data;
  },
  [mutationType.CONFIRM_OTP](
    state: AuthenticationState,
    data: object
  ): void {
    state.confirmOtp = data;
  },
  [mutationType.CONFIRM_PROFILE](
    state: AuthenticationState,
    data: object
  ): void {
    state.confirmProfile = data;
  },
  [mutationType.CREATE_DEFAULT_CLOUDFIREWALL](
    state: AuthenticationState,
    data: object
  ): void {
    state.createDefaultCloudFirewall = data;
  },
  [mutationType.ROLES](
    state: AuthenticationState,
    data: object[]
  ): void {
    state.roles = data;
  },
  [mutationType.FORGOT_PASSWORD](
    state: AuthenticationState,
    data: object
  ): void {
    state.forgotPassword = data;
  },
  [mutationType.RESET_PASSWORD](
    state: AuthenticationState,
    data: object
  ): void {
    state.resetPassword = data;
  },
  [mutationType.CHANGE_PASSWORD](
    state: AuthenticationState,
    data: object
  ): void {
    state.changePawword = data;
  },
  [mutationType.EMAIL](
    state: AuthenticationState,
    data: string
  ): void {
    state.email = data;
  },
  [mutationType.RESEND_EMAIL](
    state: AuthenticationState,
    data: object
  ): void {
    state.resendEmail = data;
  }
};

export default mutations;

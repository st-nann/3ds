import { State } from "@/store";
import { GetterTree } from "vuex";
import AuthenticationState from "./states";

const getters: GetterTree<AuthenticationState, State> = {
  login: state => state.login,
  sigup: state => state.signup,
  verifySignup: state => state.verifySignup,
  requestOtp: state => state.requestOtp,
  confirmOtp: state => state.confirmOtp,
  confirmProfile: state => state.confirmProfile,
  createDefaultCloudFirewall: state => state.createDefaultCloudFirewall,
  roles: state => state.roles,
  forgotPassword: state => state.forgotPassword,
  resetPassword: state => state.resetPassword,
  changePassword: state => state.changePawword,
  email: state => state.email,
  resendEmail: state => state.resendEmail
};

export default getters;

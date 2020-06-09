import {
  IAuthenticationParam,
  IResendEmailParam
} from "@/interface/params/IAuthentication";
import { IProjectParam } from "@/interface/params/IProjects";
import {
  IAuthenticationConfirmOtpRequest,
  IAuthenticationConfirmProfileRequest,
  IAuthenticationRequestOtpRequest,
  IChangePasswordRequest,
  IForgotPasswordRequest,
  ILoginRequest,
  IResetPasswordRequest,
  ISignupRequest
} from "@/interface/request/IAuthentication";
import HttpRequest from "@/services/store/HttpRequest";
import { State } from "@/store";
import _ from "lodash";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import AuthenticationState from "./states";

const accountUrl = process.env.VUE_APP_ACCOUNTURL;

const actions: ActionTree<AuthenticationState, State> = {
  async login(
    {}: ActionContext<AuthenticationState, State>,
    payload: { data: ILoginRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/auth/login`,
      mutation: `authentication/${mutationType.LOGIN}`,
      payload: payload.data
    });
  },
  async sigup(
    {}: ActionContext<AuthenticationState, State>,
    payload: { data: ISignupRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/auth/register`,
      mutation: `authentication/${mutationType.SIGNUP}`,
      payload: payload.data
    });
  },
  async verifySigup(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IProjectParam }
  ) {
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${accountUrl}/auth/verify/${payload.params.id}`,
      mutation: `authentication/${mutationType.VERIFY_SIGNUP}`
    });
  },
  async requestOtp(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IProjectParam, data: IAuthenticationRequestOtpRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${accountUrl}/auth/send_otp/${payload.params.id}`,
      mutation: `authentication/${mutationType.REQUEST_OTP}`,
      payload: payload.data
    });
  },
  async confirmOtp(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IProjectParam, data: IAuthenticationConfirmOtpRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${accountUrl}/auth/confirm_otp/${payload.params.id}`,
      mutation: `authentication/${mutationType.CONFIRM_OTP}`,
      payload: payload.data
    });
  },
  async confirmProfile(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IProjectParam, data: IAuthenticationConfirmProfileRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${accountUrl}/auth/confirm_profile/${payload.params.id}`,
      mutation: `authentication/${mutationType.CONFIRM_PROFILE}`,
      payload: payload.data
    });
  },
  async createDefaultCloudFirewall() {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/auth/security_rule`,
      mutation: `authentication/${mutationType.CREATE_DEFAULT_CLOUDFIREWALL}`
    });
  },
  async getRoles() {
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${accountUrl}/auth/roles`,
      mutation: `authentication/${mutationType.ROLES}`
    });
  },
  async fogotPassword(
    {}: ActionContext<AuthenticationState, State>,
    payload: { data: IForgotPasswordRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/forgotpassword`,
      mutation: `authentication/${mutationType.FORGOT_PASSWORD}`,
      payload: payload.data
    });
  },
  async resetPassword(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IAuthenticationParam, data: IResetPasswordRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${accountUrl}/forgotpassword/changePassword/${payload.params.id}`,
      mutation: `authentication/${mutationType.RESET_PASSWORD}`,
      payload: payload.data
    });
  },
  async changePassword(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IAuthenticationParam, data: IChangePasswordRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/profile/${payload.params.id}/password`,
      mutation: `authentication/${mutationType.CHANGE_PASSWORD}`,
      payload: payload.data
    });
  },
  async getEmail(
    {}: ActionContext<AuthenticationState, State>,
    payload: { params: IAuthenticationParam }
  ) {
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${accountUrl}/forgotpassword/changePassword/${payload.params.id}`,
      mutation: `authentication/${mutationType.EMAIL}`
    });
  },
  async resendEmail(
    {}: ActionContext<AuthenticationState, State>,
    payload: { data: IResendEmailParam }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/auth/register/resend`,
      mutation: `authentication/${mutationType.RESEND_EMAIL}`,
      payload: payload.data
    });
  }
};

export default actions;

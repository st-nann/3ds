import {
  ILoginRequest,
  ISignupRequest
} from "@/interface/request/IAuthentication";
import HttpRequest from "@/services/store/HttpRequest";
import { State } from "@/store";
import _ from "lodash";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import AuthenticationState from "./states";

const baseUrl = process.env.VUE_APP_BASEURL;

const actions: ActionTree<AuthenticationState, State> = {
  async login(
    {}: ActionContext<AuthenticationState, State>,
    payload: { data: ILoginRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${baseUrl}/auth/login`,
      mutation: `authentication/${mutationType.LOGIN}`,
      payload: payload.data
    });
  },
  async signup(
    {}: ActionContext<AuthenticationState, State>,
    payload: { data: ISignupRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${baseUrl}/auth/signup`,
      mutation: `authentication/${mutationType.SIGNUP}`,
      payload: payload.data
    });
  }
};

export default actions;

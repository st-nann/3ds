
import { State } from "@/store";
import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { AuthenticationState } from "./states";

const authentication: Module<AuthenticationState, State> = {
  state: new AuthenticationState(),
  actions,
  mutations,
  getters,
  namespaced: true
};

export default authentication;

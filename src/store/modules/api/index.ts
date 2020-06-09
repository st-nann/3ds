
import { State } from "@/store";
import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { ApiState } from "./states";

const api: Module<ApiState, State> = {
  state: new ApiState(),
  actions,
  mutations,
  getters,
  namespaced: true
};

export default api;

import { State } from "@/store";
import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import ComponentState from "./states";

const components: Module<ComponentState, State> = {
  state: new ComponentState(),
  actions,
  mutations,
  getters,
  namespaced: true
};

export default components;

import { State } from "@/store";
import { GetterTree } from "vuex";
import AuthenticationState from "./states";

const getters: GetterTree<AuthenticationState, State> = {
  login: state => state.login,
  signup: state => state.signup
};

export default getters;

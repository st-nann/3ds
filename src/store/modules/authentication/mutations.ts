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
  }
};

export default mutations;

import { MutationTree } from "vuex";
import { mutationType } from "./mutation-types";
import ComponentState from "./states";

const mutations: MutationTree<ComponentState> = {
  [mutationType.LOADING](
    state: ComponentState,
    data: boolean
  ): void {
    state.loading = data;
  },
  [mutationType.SET_SNACKBAR](
    state: ComponentState,
    data: [{
      id: string,
      txt: string,
      type: string,
    }]
  ): void {
    state.snackbar = data;
  }
};

export default mutations;

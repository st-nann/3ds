import { MutationTree } from "vuex";
import { mutationType } from "./mutation-types";
import ComponentState from "./states";

const mutations: MutationTree<ComponentState> = {
  [mutationType.LOADING](
    state: ComponentState,
    data: boolean
  ): void {
    state.loading = data;
  }
};

export default mutations;

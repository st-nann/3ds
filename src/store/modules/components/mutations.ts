import { MutationTree } from "vuex";
import { mutationType } from "./mutation-types";
import ComponentState from "./states";

const mutations: MutationTree<ComponentState> = {
  [mutationType.TOGGLE_SIDEBAR](
    state: ComponentState,
    data: boolean
  ): void {
    state.toggleSidebar = data;
  },
  [mutationType.LOADING](
    state: ComponentState,
    data: { [key: string]: boolean }
  ): void {
    state.loading.push(data);
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
  },
  [mutationType.SET_ACTIONHANDLER](
    state: ComponentState,
    data: boolean
  ): void {
    state.actionHandler = data;
  }
};

export default mutations;

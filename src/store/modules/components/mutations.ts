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
  },
  [mutationType.SET_MODALHANDLER](
    state: ComponentState,
    data: boolean
  ): void {
    state.modalHandler = data;
  },
  [mutationType.SET_ACTIONHANDLER](
    state: ComponentState,
    data: boolean
  ): void {
    state.actionHandler = data;
  },
  [mutationType.SET_ACTIONTYPEHANDLER](
    state: ComponentState,
    data: string
  ): void {
    state.actionTypeHandler = data;
  }
};

export default mutations;

import { State } from "@/store";
import { GetterTree } from "vuex";
import ComponentState from "./states";

const getters: GetterTree<ComponentState, State> = {
  loading: state => {
    return state.loading;
  },
  toggleSidebar: state => {
    return state.toggleSidebar;
  },
  snackbar: state => {
    return state.snackbar;
  },
  actionHandler: state => {
    return state.actionHandler;
  }
};

export default getters;

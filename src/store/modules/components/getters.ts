import { State } from "@/store";
import { GetterTree } from "vuex";
import ComponentState from "./states";

const getters: GetterTree<ComponentState, State> = {
  loading: state => {
    return state.loading;
  },
  snackbar: state => {
    return state.snackbar;
  }
};

export default getters;

import { State } from "@/store";
import { GetterTree } from "vuex";
import ApiState from "./states";

const getters: GetterTree<ApiState, State> = {
  lists: state => state.lists
};

export default getters;

import { State } from "@/store";
import { GetterTree } from "vuex";
import ApiState from "./states";

const getters: GetterTree<ApiState, State> = {
  lists: state => state.lists,
  create: state => state.create,
  edit: state => state.edit,
  delete: state => state.delete,
  join: state => state.join,
  unjoin: state => state.unjoin
};

export default getters;

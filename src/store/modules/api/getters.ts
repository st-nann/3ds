import { State } from "@/store";
import { GetterTree } from "vuex";
import ApiState from "./states";

const getters: GetterTree<ApiState, State> = {
  lists: state => state.lists,
  create: state => state.create,
  delete: state => state.delete,
  paginationLists: state => state.openrc
};

export default getters;

import { MutationTree } from "vuex";
import { mutationType } from "./mutation-types";
import ApiState from "./states";

const mutations: MutationTree<ApiState> = {
  [mutationType.LISTS](
    state: ApiState,
    data: object[]
  ): void {
    state.lists = data;
  },
  [mutationType.CREATE](
    state: ApiState,
    data: object
  ): void {
    state.create = data;
  },
  [mutationType.DELETE](
    state: ApiState,
    data: object
  ): void {
    state.delete = data;
  },
  [mutationType.OPENRC](
    state: ApiState,
    data: object[]
  ): void {
    state.openrc = data;
  }
};

export default mutations;

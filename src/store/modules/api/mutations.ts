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
  [mutationType.EDIT](
    state: ApiState,
    data: object
  ): void {
    state.edit = data;
  },
  [mutationType.DELETE](
    state: ApiState,
    data: object
  ): void {
    state.delete = data;
  },
  [mutationType.JOIN](
    state: ApiState,
    data: object
  ): void {
    state.join = data;
  },
  [mutationType.UNJOIN](
    state: ApiState,
    data: object
  ): void {
    state.unjoin = data;
  }
};

export default mutations;

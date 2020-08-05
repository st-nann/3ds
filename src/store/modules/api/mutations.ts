import { MutationTree } from "vuex";
import { mutationType } from "./mutation-types";
import ApiState from "./states";

const mutations: MutationTree<ApiState> = {
  [mutationType.LISTS](
    state: ApiState,
    data: object[]
  ): void {
    state.lists = data;
  }
};

export default mutations;

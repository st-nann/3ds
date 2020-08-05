import { State } from "@/store";
import _ from "lodash";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import ComponentState from "./states";

const actions: ActionTree<ComponentState, State> = {
  loading(
    { commit }: ActionContext<ComponentState, State>,
    data: boolean
  ) {
    commit(mutationType.LOADING, data);
  }
};

export default actions;

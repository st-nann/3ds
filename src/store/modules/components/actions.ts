import { State } from "@/store";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import ComponentState from "./states";

const actions: ActionTree<ComponentState, State> = {
  loading(
    { commit }: ActionContext<ComponentState, State>,
    data: boolean
  ) {
    commit(mutationType.LOADING, data);
  },
  updateSnackbar(
    { commit, dispatch, state }: ActionContext<ComponentState, State>,
    data: {
      id: string
      txt: string
      type: string
    }
  ) {
    const newSnackbar = state.snackbar || [];
    newSnackbar.push(data);
    data.id = uuidv4().toString();
    commit(mutationType.SET_SNACKBAR, newSnackbar);
    setTimeout(() => {
      dispatch("closeSnackbar", data.id);
    }, 5000);
  },
  closeSnackbar(
    { commit, state }: ActionContext<ComponentState, State>,
    id: string,
  ): void {
    const newSnackbar = state.snackbar || [];
    commit(
      mutationType.SET_SNACKBAR,
      _.filter(newSnackbar, (snack) => snack.id !== id),
    );
  }
};

export default actions;

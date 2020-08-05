import HttpRequest from "@/services/store/HttpRequest";
import { State } from "@/store";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import ApiState from "./states";

const baseUrl = process.env.VUE_APP_BASEURL;

const actions: ActionTree<ApiState, State> = {
  async getLists() {
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${baseUrl}`,
      mutation: `api/${mutationType.LISTS}`
    });
  }
};

export default actions;

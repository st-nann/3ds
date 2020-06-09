
import { IDeleteParam, IOpenRCParam } from "@/interface/params/IApi";
import HttpRequest from "@/services/store/HttpRequest";
import { State } from "@/store";
import _ from "lodash";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import ApiState from "./states";

const accountUrl = process.env.VUE_APP_ACCOUNTURL;

const actions: ActionTree<ApiState, State> = {
  async getApis() {
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${accountUrl}/access-key`,
      mutation: `api/${mutationType.LISTS}`
    });
  },
  async createApiKey() {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${accountUrl}/access-key`,
      mutation: `api/${mutationType.CREATE}`
    });
  },
  async deleteApiKey(
    {}: ActionContext<ApiState, State>,
    payload: { params: IDeleteParam }
  ) {
    await HttpRequest.sendRequest({
      method: "DELETE",
      path: `${accountUrl}/access-key/${payload.params.userId}`,
      mutation: `api/${mutationType.CREATE}`
    });
  },
  async getOpenRC(
    {}: ActionContext<ApiState, State>,
    payload: { params: IOpenRCParam }
  ) {
    const user = payload.params.user;
    const password = payload.params.password;
    const query = user && password ? `?user=${user}&password=${password}` : "";
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${accountUrl}/access-key/openrc${query}`,
      
      mutation: `api/${mutationType.OPENRC}`
    });
  }
};

export default actions;

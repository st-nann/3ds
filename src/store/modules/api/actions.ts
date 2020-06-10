
import { IEditParam, IDeleteParam } from "@/interface/params/IApi";
import { ICreateRequest, IEditRequest, IJoinAndUnjoinRequest } from "@/interface/request/IApi";
import HttpRequest from "@/services/store/HttpRequest";
import { State } from "@/store";
import _ from "lodash";
import { ActionContext, ActionTree } from "vuex";
import { mutationType } from "./mutation-types";
import ApiState from "./states";

const baseUrl = process.env.VUE_APP_BASEURL;

const actions: ActionTree<ApiState, State> = {
  async getLists() {
    await HttpRequest.sendRequest({
      method: "GET",
      path: `${baseUrl}/lists`,
      mutation: `api/${mutationType.LISTS}`
    });
  },
  async createPartyAndEvent(
    {}: ActionContext<ApiState, State>,
    payload: { data: ICreateRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "POST",
      path: `${baseUrl}/party-and-event`,
      mutation: `api/${mutationType.CREATE}`,
      payload: payload.data
    });
  },
  async editPartyAndEvent(
    {}: ActionContext<ApiState, State>,
    payload: { params: IEditParam, data: IEditRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${baseUrl}/party-and-event/${payload.params.id}`,
      mutation: `api/${mutationType.EDIT}`,
      payload: payload.data
    });
  },
  async deleteParrtAndEvent(
    {}: ActionContext<ApiState, State>,
    payload: { params: IDeleteParam }
  ) {
    await HttpRequest.sendRequest({
      method: "DELETE",
      path: `${baseUrl}/party-and-event/${payload.params.id}`,
      mutation: `api/${mutationType.DELETE}`
    });
  },
  async jionPartyAndEvent(
    {}: ActionContext<ApiState, State>,
    payload: { data: IJoinAndUnjoinRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${baseUrl}/party-and-event/join`,
      mutation: `api/${mutationType.JOIN}`,
      payload: payload.data
    });
  },
  async unJionParrtAndEvent(
    {}: ActionContext<ApiState, State>,
    payload: { data: IJoinAndUnjoinRequest }
  ) {
    await HttpRequest.sendRequest({
      method: "PUT",
      path: `${baseUrl}/party-and-event/unjoin`,
      mutation: `api/${mutationType.UNJOIN}`,
      payload: payload.data
    });
  }
};

export default actions;

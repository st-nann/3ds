import { IHttpRequest, IToken } from "@/interface/IHttpRequest";
import router from "@/router";
import { clearToken, getToken } from "@/services/Authentication";
import store from "@/store";
import axios, { AxiosInstance } from "axios";
import _ from "lodash";

class HttpRequest {
  private axios: AxiosInstance;
  private token: IToken;

  constructor() {
    this.token = localStorage.token ? getToken() : undefined;
    this.axios = axios.create({
      headers: this.token
        ? { "x-auth-token": this.token["x-auth-token"] }
        : undefined
    });
    axios.interceptors.response.use(this.handleResponse, this.handleError);
  }

  private redirect (path: string) {
    router.push(path);
  }

  private handleResponse(response: any) {
    return response;
  }

  private handleError(error: any) {
    switch (error.response.status) {
      case 401:
        clearToken();
        break;
      default:
        this.redirect("/Error");
        break;
    }
    localStorage.callAPI = 0;
    return Promise.reject(error);
  }

  private doRemoveKey(
    storeName: string,
    stateName: string,
    mutation: string
  ) {
    _.remove(store.state[storeName][stateName], item => {
      const keys = _.keys(item);
      return _.includes(keys, mutation);
    });
    return store.state[storeName][stateName];
  }

  public sendRequest(options: IHttpRequest) {
    store.dispatch("components/loading", { [options.mutation]: true });
    return this.axios.request({
      method: options.method,
      url: options.path,
      responseType: "json",
      data: options.payload
    }).then(async (response: any) => {
      store.commit(`${options.mutation}`, response.data);
      this.doRemoveKey("components", "loading", options.mutation);
      store.dispatch("components/loading", { [options.mutation]: false });
    }).catch(error => {
      store.dispatch("components/updateSnackbar", {
        txt: error.response.data && error.response.data.message
          ? error.response.data.message
          : "Something went wrong",
        type: "error"
      });
      throw error;
    });
  }
}

export default new HttpRequest();

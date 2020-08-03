import Api from "@/store/modules/api/index";
import Components from "@/store/modules/components/index";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// tslint:disable-next-line: interface-name
export interface State {
  [key: string]: any;
}

const store = new Vuex.Store({
  modules: {
    api: Api,
    components: Components
  }
});

export default store;

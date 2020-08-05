import Vue, { CreateElement } from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueYouTubeEmbed from "vue-youtube-embed";
import router from "./router";
import store from "./store";
import Filters from "@/services/Filters";

Filters.init();
Vue.use(VueYouTubeEmbed);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

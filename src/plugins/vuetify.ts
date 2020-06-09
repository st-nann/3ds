import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  breakpoint: {
    thresholds: {
      xs: 768,
      sm: 1024,
      md: 1440,
      lg: 2560,
    }
  }
});

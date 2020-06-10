import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#583d7f",
        secondary: "#160f38",
        third: "#51a3af",
        fourth: "#f5f7fc"
      },
      dark: {
        primary: "#583d7f",
        secondary: "#160f38",
        third: "#51a3af",
        fourth: "#f5f7fc"
      }
    }
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

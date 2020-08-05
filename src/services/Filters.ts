import _ from "lodash";
import moment from "moment";
import Vue from "vue";

export default {
  init () {
    Vue.filter("date", value => {
      return moment(value).format("LLLL");
    });
  }
};

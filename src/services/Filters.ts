import _ from "lodash";
import moment from "moment";
import numeral from "numeral";
import Vue from "vue";

export default {
  init () {
    Vue.filter("number", value => {
      return numeral(parseFloat(value)).format("0,0[.]00");
    });
    Vue.filter("date", value => {
      const splits = _.split(value, " ", 2);
      let date: any = splits[0];
      const type = splits[1];
      if (date && date !== "undefined") {
        date = _.includes(type, "unix") ? moment(JSON.parse(date)) : moment(date);
        switch (type) {
          case "ago": switch (true) {
            case _.includes(date._f, "Z"):
              return date.startOf("minute").fromNow();
            default:
              return date.startOf("minute").add(7, "hour").fromNow();
          }
          case "fulldate":
            return date.format("LL");
          case "fulldate_unix":
            return moment.unix(date).format("llll");
          case "datetime": switch (true) {
            case _.includes(date._f, "Z"):
              return date.format("lll");
            default:
              return date.add(7, "hour").format("lll");
          }
          case "unix":
            return (
              _.includes(moment.unix(date).fromNow(), "in")
                ? moment.unix(date).fromNow().substring(2)
                : moment.unix(date).fromNow()
            );
          default:
            return date;
        }
      }
      return "-";
    });
    Vue.filter("datePeriod", value => {
      const month = value[0];
      const year = value[1];
      const updateTime = value[2];
      const thirtyMonth = [4, 6, 9, 11];
      const startDate = 1;
      let endDate: number | string = 0;
      const thisMonth = moment().month() + 1;
      const thisYear = moment().year();
      const dateOfUpdateTime = moment(updateTime).format("D");
      endDate = thisYear > year || (thisYear === year && thisMonth > month)
        ? (_.parseInt(month) === 2)
          ? (year % 4 === 0 ? 29 : 28)
          : (_.includes(thirtyMonth, _.parseInt(month)) ? 30 : 31)
        : dateOfUpdateTime;
      const convertMonth = moment().month(month).subtract(1, "months").format("MMM");
      return `${startDate} - ${endDate} ${convertMonth} ${year}`;
    });
    Vue.filter("shortMonth", value => {
      return value ? moment().month(value).subtract(1, "month").format("MMM") : "";
    });
    Vue.filter("nodata", value => {
      const empty = ["", null, undefined];
      return _.includes(empty, value) ? "-" : value;
    });
  }
};

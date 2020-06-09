import { doConvertCurrency } from "@/services/Function.ts";
import _ from "lodash";
import moment from "moment";
import numeral from "numeral";
import Vue from "vue";

export default {
  init () {
    Vue.filter("unit", value => {
      if (value !== "") {
        const splits = _.split(value, " ", 2);
        const numbers: number = parseInt(splits[0]);
        if (_.includes(value, "binary")) {
          if (typeof splits[0] !== "string") {
            switch (true) {
              case numbers >= 1073741824:
                return `${(numbers / 1073741824).toFixed(2)} GB`;
              case numbers >= 1048576:
                return `${(numbers / 1048576).toFixed(2)} MB`;
              case numbers >= 1024:
                return `${(numbers / 1024).toFixed(2)} KB`;
              case numbers > 1:
                return `${numbers} bytes`;
              case numbers === 1:
                return `${numbers} byte`;
              default:
                return "0 bytes";
            }
          }
          return numbers;
        } else if (_.includes(value, "calculating")) {
          return value;
        } else {
          if (_.includes(value, "GB")) {
            value = numbers < 1024 ? "GB" : "TB";
          } else {
            if (numbers < 1024) { value = "<1024"; }
          }
          switch (value) {
            case 0: return "0 GB";
            case "0 MB": return "0 MB";
            case "0 GB": return "0 GB";
            case "<1024" : return `${numbers} MB`;
            case `${numbers} B`: return `${Math.ceil(numbers / Math.pow(2, 30))} GB`;
            case "GB": return `${numbers} GB`;
            case "TB": return `${numbers / 1000} TB`;
            default: return `${numbers / 1024} GB`;
          }
        }
      }
      return value;
    });
    Vue.filter("unitVolume", value => {
      const numbers = parseInt(value);
      switch (true) {
        case (numbers === 0 && value !== "" && value !== "0") : return "invalid";
        case (numbers >= 1000) : return `${numbers / 1000} TB`;
        case (numbers < 1000) : return `${value} GB`;
        default: return "0 GB";
      }
    });
    Vue.filter("currency", value => {
      value = doConvertCurrency(value);
      const numbers = numeral(value).format("00.00");
      const price = numeral(value).format("0,0.00");
      const splits = _.split(numbers, ".");
      return splits[0].length > 7
        ? `${numeral(parseInt(splits[0]) / 1000000).format("0,0.00")} M`
        : price;
    });
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

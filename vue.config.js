process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  configureWebpack: {
    mode: process.env.VUE_APP_MODE
  },
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      title: process.env.VUE_APP_TITLE,
      output: {
        publicPath:
          process.env.VUE_APP_NODE_ENV === "production"
            ? "/3ds/assignment"
            : ""
      }
    }
  }
}
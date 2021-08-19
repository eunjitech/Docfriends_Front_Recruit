module.exports = {
  devServer: {
    overlay: false,
    proxy: "https://localhost.8080/test",
  },
  lintOnSave: false,
  publicPath: "/test",
  outputDir: "./dist",
};

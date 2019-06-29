module.exports = {
  assetsDir: "./dist",
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/assets/stylesheet/variables";'
      }
    }
  }
}
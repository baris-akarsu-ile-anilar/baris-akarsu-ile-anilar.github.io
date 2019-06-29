module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/assets/stylesheet/variables";'
      }
    }
  }
}
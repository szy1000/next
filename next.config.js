const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

config = {
  distDir: 'dist',
  generateEtags: true,  //nginx使用了etag 设置为false
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  pageExtensions: ['jsx', 'js'],

  // generateBuildId: async () => {
  //   if
  //   return null
  // }

  webpack(config, options) {
    return config
  },

  
}
module.exports = withCss({})

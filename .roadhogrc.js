{
  "proxy": {
      "/api": {
          "target": "http://8.140.115.92:4999/",
          "changeOrigin": true,
          "pathRewrite": { "^/api" : "" }
        }
  },
}

// https://www.npmjs.com/package/roadhog
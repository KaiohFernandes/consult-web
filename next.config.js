require("dotenv").config()
const withImages = require('next-images');

module.exports = withImages({
  env: {
    MJ_APIKEY_PUBLIC: '8f56daf2dc17cfeef21f8c7456783671',
    MJ_APIKEY_PRIVATE: 'fd1ef9cf68813cf3e52f96b35c8b36dc',
    EMAIL_SENDER: 'kaiohfernandes15@gmail.com',
    EMAIL_RECEIVER: 'jefferson@consultx.net.br'
  }
})

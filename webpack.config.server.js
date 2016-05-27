const { server_configuration } = require('universal-webpack')
const settings = require('./universal-webpack-settings')
const configuration = require('./webpack.config')

module.exports = server_configuration(configuration, settings)
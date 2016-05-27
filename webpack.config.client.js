const { client_configuration } = require('universal-webpack')
const settings = require('./universal-webpack-settings')
const configuration = require('./webpack.config')

module.exports = client_configuration(configuration, settings)
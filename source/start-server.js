const { server } = require('universal-webpack')
const settings = require('../universal-webpack-settings')
const configuration = require('../webpack.config')

server(configuration, settings)
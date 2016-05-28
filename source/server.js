require('babel-register')


const express = require('express')
const routes = require('../src/routes')

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const {match, RouterContext} = require('react-router')

module.exports = function(){
  const app = express()

  app.use( (req,res) => {
    match({routes, location: req.url}, (err, redirect, renderProps) => {
      console.log(renderProps, req.url, err, redirect)
      res.send(ReactDOMServer.renderToString(React.createElement(RouterContext, renderProps)))
    })
  })

  app.listen(3333)
}
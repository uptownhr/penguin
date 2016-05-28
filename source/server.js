require('babel-register')

const express = require('express')
const routes = require('../src/routes')

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const {match, RouterContext} = require('react-router')

module.exports = function(){
  const app = express()
  app.use(express.static('static'))

  app.use( (req,res) => {
    match({routes, location: req.url}, (err, redirect, renderProps) => {
      const element = React.createElement(RouterContext, renderProps)
      const template = `<html><body><div id='root'>${ReactDOMServer.renderToString(element)}</div><script src="http://localhost:3000/bundle.js"></script></body></html>`.replace(/\s+/g, ' ').trim();
      res.send(template)
    })
  })

  app.listen(3333)
}
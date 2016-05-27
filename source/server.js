//require('babel-register')


const express = require('express')
const routes = require('../src/routes')

module.exports = function(){
  const app = express()

  app.use( (req,res) => {
    res.send('hello')
  })

  app.listen(3333)
}
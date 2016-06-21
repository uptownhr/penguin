const express = require('express'),
  app = express(),
  kube = require('kube')

kube(app)
app.listen(3000)

app.get('/', function(req,res){
  res.kube.render()
})
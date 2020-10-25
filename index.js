// ./index.js

const express = require ('express')
const http = require('http')
const url = require('url')
const qs = require('querystring')
const handles = require('./handles')

path = require('path')

app = express()
app.use(express.static(path.join('/', 'public')))


app.set('views', '/' + "/views") //'views, current directory +'/views'
app.set('view engine', 'ejs');

/*
const route = url.parse(req.url) //parse url to jS in route
const path = route.pathname //avoir le chemin de l'url
const params = qs.parse(route.query) //avoir les parametres du chemin en jS
*/


app.get(
  '/hello/:name',
  (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.set('port', 8081)
app.listen(app.get('port'),() => console.log('server listenin on port ${app.get('port')}'))

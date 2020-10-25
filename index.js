// ./index.js

const express = require ('express')
const http = require('http')
const url = require('url')
const qs = require('querystring')
const handles = require('./handles')
var ejs=require('ejs')
path = require('path')
metrics = require('./metrics')

app = express()
app.use(express.static(path.join(__dirname, 'public')))


app.set('views', __dirname + "/views") //'views, current directory +'/views
app.set('view engine', 'ejs');


app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})

app.get(
  '/',
  (req, res) => res.render('hellobis.ejs')
)

app.get(
  '/hello/:name',
  (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.set('port', 8081)
app.listen(app.get('port'),() => console.log(`server listening on port ${app.get('port')}`))

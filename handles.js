
// ./handles.js
const http = require('http')
const url = require('url')
const qs = require('querystring')


module.exports = {
  serverHandle : function(req, res){
      const route = url.parse(req.url) //parse url to jS in route
      const path = route.pathname //avoir le chemin de l'url
      const params = qs.parse(route.query) //avoir les parametres du chemin en jS

      res.writeHead(200, {'Content-Type' : 'text/html'});

      if (path==='/'){
        res.write('please enter hello in your url and a name if you want as http://localhost:8080/hello(?name=magalie)\n');
      }else if ((path==='/hello') && ('name' in params)){
        if (params['name']==='magalie'){
          res.write('hello i am magalie\n');
        }
        else{
          res.write('hello '+params['name']+' welcome on this page!\n');
        }
      }else {
       /*res.status(404).send({
          status: 404,
          error: ‘Not found’
      });*/
      res.write("404 error");

      }
      res.end();
      }
}

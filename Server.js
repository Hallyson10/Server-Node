var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
        var page = 'index.html'
        if(request.url !== '/'){
            page = request.url + '.html'
        }
        fs.readFile('./public/'+page,function(err,data){
            var errorStatus = 200;
            if(err){//tratando o erro de forma simples
                errorStatus = 404;
                data = fs.readFileSync('./error/404.html');
            }
            response.writeHead(200,{'Content-type':'text/html : charset=utf-8'}); //cabeçario da requisição
            response.write(data);//corpo da requisiçãoo
            response.end();
        })
})
server.listen(3000) //ouvindo na porta 3000
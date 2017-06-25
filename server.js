//Тимофей Осокин, ЭУ-436 

var restify = require('restify'),
    venues = require('./venues'),
    port = process.env.PORT || 3000; 

var server = restify.createServer({
    name : 'web'
});

server.use(function(req, res, next){
    console.log(req.method + ' ' + req.url);
    return next();
});

server.get('api/venues', venues.get);
server.get('api/venues/:id', venues.getById);
server.get('api/venues', venues.post);
server.get('api/venues/:id', venues.put);
server.get('api/venues/:id', venues.delete);

server.listen(port, function(){
    console.log('api запущен на порте ' + port)
})
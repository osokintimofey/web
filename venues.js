function VenuesController(){
    var that = this;
    that.list = [];

    var FindVenueById = function(req){
        var result = that.list.filter(function(p){
            return p.Id === parseInt(req.params.id);
        });
        if(found && found.length>0){
            return found[0];
        }
        return null;
    };

    that.get = function(req, res, next){
        res.send(200, that.list);
        return next();
    };

    that.getById = function(req, res, next){
        var found = FindVenueById(req);
        if(found){
            res.send(200, found);
        }else{
            res.send(404);
        }
        return next();
    };

    that.post = function(req, res, next){
        if(!req.body.hasOwnProperty('id') || !req.body.hasOwnProperty('name')){
            res.send(500);
            return next();
        }else{
            that.list.push({
                id : parseInt(req.body.id),
                name : req.body.name
            });
            res.send(201);
        }
        return next();
    };

    that.put = function(req, res, next){
        if(!req.body.hasOwnProperty('name')){
            res.send(500);
            return next();
        }
        var found = FindVenueById(req);
        if(found){
            found.name = req.body.name;
            res.send(200, found);
        }else{
            res.send(404, 'venue not found');
        }
        return next();
    };

    that.delete = function(req, res, next){
        that.list = that.list.filter(function(p){
            return p.id !== parseInt(req.params.id);
        });
        res.send(200);
        return next();
    };
};

module.exports = new VenuesController();
var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
     views: importRoutes('./views'),
};

exports = module.exports = function(app){
    app.get('/',routes.views.index),
    app.get('/report',routes.views.report),
    app.get('/add-event', routes.views.addEvent)
};


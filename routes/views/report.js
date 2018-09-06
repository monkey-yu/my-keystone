var keystone = require('keystone');
var Report = keystone.List('Report');
exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Init locals
    locals.section = 'report';
    // locals.filters = {
    // 	category: req.params.category,
    // };
    locals.reports = [];

    // Load the posts
    view.on('init', function (next) {

        var q = keystone.list('Report').model.find().where('state','published');

        q.exec(function(err,result){
            locals.reports = result;
            next(err);
        });
 
    });

    // Render the view
    view.render('report');
}
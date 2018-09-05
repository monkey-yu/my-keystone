var keystone = require('keystone');
keystone.init({
    'cookie secret':'secure string goes here',
    'name':'my-project',
    'user model':'User', 
    'views': 'templates/views',
    'view engine': 'pug',
    'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/keystone-demo',
    'cloudinary config': 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',
    
    'auto update':false,
    'auth':true,
    'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,

	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN
});

keystone.import('models');
keystone.set('routes',require('./routes'));
keystone.start();


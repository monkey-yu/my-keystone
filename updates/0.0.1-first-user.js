var keystone = require('keystone');
var User = keystone.list('User');

exports.create = {
  User: [
    {
      displayName: 'zhaoyu',
      email: 'demo@keystonejs.com',
      password: 'demo',
    },
  ], 
};
